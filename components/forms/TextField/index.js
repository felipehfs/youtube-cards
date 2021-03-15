import React from 'react'
import PropTypes from 'prop-types';
import {Wrapper, Label, Input} from './TextField.styles';

export default function TextField({
    label,
    value,
    onChange,
    type="text",
    name
}) {
    return (
        <Wrapper>
            <Label htmlFor={label}>{label}</Label>
            <Input  id={name} name={name} type={type} value={value}  onChange={onChange} />           
        </Wrapper>
    )
}

TextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    id: PropTypes.string,
}