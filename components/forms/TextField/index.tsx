import React from 'react'
import {Wrapper, Label, Input} from './TextField.styles';

type InputChangeEvent = (event: React.FormEvent<HTMLInputElement>) => void;

interface TextFieldProps extends HTMLInputElement{
    label: string;
    onChange: InputChangeEvent;
}

export default function TextField({
    label,
    value,
    onChange,
    type="text",
    name
}: TextFieldProps) {
    return (
        <Wrapper>
            <Label htmlFor={label}>{label}</Label>
            <Input  id={name} name={name} type={type} value={value}  onChange={onChange} />           
        </Wrapper>
    )
}

