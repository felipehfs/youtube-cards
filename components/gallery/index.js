import React from 'react'
import {Wrapper} from './gallery.styles'
import PropTypes from 'prop-types'
import VideoItem from '../VideoItem'

export default function Gallery({
    items
}) {
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

Gallery.propTypes = {
    items: PropTypes.array.isRequired,
}
