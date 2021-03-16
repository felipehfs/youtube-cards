import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colors.gray};
    overflow: hidden;
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const Content = styled.div`
    background-color: #fff;
    max-width: 70%;
    width: 100%;
    padding: 25px;
    margin: 20px auto;
    box-shadow: 2px 2px 4px #ccc;
    border-radius: 4px;
    animation: ${fadeIn} .3s;

    @media(max-width: 500px) {
        margin: 0;
        max-width: 100%;
        min-height: 100vh;
    }
`