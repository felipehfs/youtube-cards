
import React from 'react'
import { Wrapper, Content } from './defaultLayout.styles'

export default function DefaultLayout({
    children
}) {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}
