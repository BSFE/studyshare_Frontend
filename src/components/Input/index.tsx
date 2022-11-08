import {InputHTMLAttributes, DetailedHTMLProps} from 'react';

import {InputStyle} from './style';

interface InputProps
extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}


function Input (inputProps: InputProps) {
    const {...props} = inputProps
    return <input css={InputStyle} {...props}/>
}

export default Input