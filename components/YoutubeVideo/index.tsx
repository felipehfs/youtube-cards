import React from 'react'

interface YoutubeVideoProps {
    [key:string]: unknown;
    youtubeId: string;
}

export default function YoutubeVideo({
    youtubeId,
    ...props
}: YoutubeVideoProps) {
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
