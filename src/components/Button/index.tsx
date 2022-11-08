import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import {BaseButtonStyle, RoundButtonStyle} from './style'

const ButtonStyleUnionList = ['base', 'round'] as const;
type ButtonStyleUnion = typeof ButtonStyleUnionList[number];

interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button (buttonProps: ButtonProps & { buttonStyle?: ButtonStyleUnion }) {
    const { buttonStyle = 'base', ...props } = buttonProps

    if(buttonStyle === 'base') {
        return <BaseButton {...props} />
    } else if (buttonStyle==='round') {
        return <RoundButton {...props} />
    } else {
        console.error(`Unknown button style: ${buttonStyle}`);
        return null;
    }
}

export default Button;

export function BaseButton(buttonProps: ButtonProps) {
    const { children, className, ...rest } = buttonProps;

    return (
        <button
            {...rest}
            css={BaseButtonStyle}>
            {children}
        </button>
    );
}

export function RoundButton(buttonProps: ButtonProps) {
    const { children, className, ...rest } = buttonProps;

    return (
        <button
            {...rest}
            css={RoundButtonStyle}>
            {children}
        </button>
    );
}