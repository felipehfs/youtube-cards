import React from 'react'
import {Header} from './DetailsHeader.styles';
import {Button} from '../Button';

interface DetailsHeaderProps {
    onGoBack: () => void;
}

export default function DetailsHeader({
    onGoBack
}: DetailsHeaderProps) {
    return (
        <Header>
            <Button onClick={onGoBack}>Voltar</Button>
        </Header>
    )
}

