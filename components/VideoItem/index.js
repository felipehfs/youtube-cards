import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './VideoItem.styles'
import { useRouter } from 'next/router';

export default function VideoItem({
    data
}) {
    const router = useRouter();

    return (
        <Wrapper onClick={() => router.push(`/videos/${data.id}`)}>
            <img src={data.cover} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </Wrapper>
    )
}

VideoItem.propTypes = {
    data: PropTypes.shape({
        cover: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
}