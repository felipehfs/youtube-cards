import React from 'react'
import {Wrapper} from './gallery.styles'
import VideoItem from '../VideoItem'
import Video from '../../models/video'

interface GalleryProps {
    items: Video[];
}

export default function Gallery({
    items
}: GalleryProps) {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <VideoItem 
                        data={item} key={item.id} />
                ))
            }            
        </Wrapper>
    )
}
