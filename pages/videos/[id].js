import React from 'react'
import DefaultLayout from "../../components/layout/defaultLayout";
import YoutubeVideo from '../../components/YoutubeVideo';
import DetailsHeader from '../../components/DetailsHeader';
import { useRouter } from 'next/router';

export default function Video({
    video
}) {
    const router = useRouter()

    return (
        <DefaultLayout>
            <DetailsHeader onGoBack={() => router.push('/')} />
            <YoutubeVideo youtubeId={video.youtubeId} height="480px" />           
            <h3>{video.title}</h3>
            <p>{video.description}</p> 
        </DefaultLayout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3004/videos/`);
    const posts = await res.json();
    
    const paths = posts.map(post => ({
        params: { id: post.id.toString()},
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3004/videos/${params.id}`);
    const video = await res.json();

    return {
        props: {
            video,
        },
        revalidate: 1,
    }
}