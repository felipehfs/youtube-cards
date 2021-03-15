import styled from "styled-components";

export const Button = styled.button`
    border: none;
    padding: 8px 10px;
    color: #fff;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    cursor: pointer;

    &:active {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &.outlined {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme}) => theme.colors.primary }; 
        background-color: transparent;
    }

    &.outlined:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
    }
`;

export default Button;