import React from 'react'
import PropTypes from 'prop-types'

export default function YoutubeVideo({
    youtubeId,
    ...props
}) {
    return (
        <iframe 
            src={`http://www.youtube.com/embed/${youtubeId}`} 
            width="100%"
            height="auto"
            frameBorder="0"
            {...props}
        />
    )
}

YoutubeVideo.propTypes = {
    youtubeId: PropTypes.string.isRequired
}