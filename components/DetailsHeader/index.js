import React from 'react'
import {Header} from './DetailsHeader.styles';
import {Button} from '../Button';
import PropTypes from 'prop-types';

export default function DetailsHeader({
    onGoBack
}) {
    return (
        <Header>
            <Button onClick={onGoBack}>Voltar</Button>
        </Header>
    )
}

DetailsHeader.propTypes = {
    onGoBack: PropTypes.func.isRequired,
}