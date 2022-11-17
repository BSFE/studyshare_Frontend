import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react';

import { InputStyle } from './style';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input = (inputProps: InputProps, ref: any) => {
    const { ...props } = inputProps;
    return <input css={InputStyle} ref={ref} {...props} />;
};

export default React.forwardRef(Input);
