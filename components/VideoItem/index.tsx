import React from 'react'
import { Wrapper } from './VideoItem.styles'
import { useRouter } from 'next/router';
import Video from '../../models/video'
import Image from 'next/image'

interface VideoItemProps {
    data: Video;
}

export default function VideoItem({
    data
}: VideoItemProps) {
    const router = useRouter();

    return (
        <Wrapper onClick={() => router.push(`/videos/${data.id}`)}>
            <Image src={data.cover} alt={data.title}  width="90%" height="70" layout="responsive"/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </Wrapper>
    )
}
