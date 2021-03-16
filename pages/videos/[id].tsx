import React from 'react'
import DefaultLayout from "../../components/layout/defaultLayout";
import YoutubeVideo from '../../components/YoutubeVideo';
import DetailsHeader from '../../components/DetailsHeader';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import Video from '../../models/video';

export default function VideoDetails({
    video
}) {
    const router = useRouter()

    if (router.isFallback) {
      return (
        <DefaultLayout>
        <DetailsHeader onGoBack={() => router.push('/')} />
          <p>Carregando</p>
        </DefaultLayout>
      )
    }


    return (
        <DefaultLayout>
            <DetailsHeader onGoBack={() => router.push('/')} />
            <YoutubeVideo youtubeId={video.youtubeId} height="480px" />
            <h3>{video.title}</h3>
            <p>{video.description}</p> 
        </DefaultLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`http://localhost:3004/videos/`);
    const posts: Video[] = await res.json();
    
    const paths = posts.map(video => ({
        params: { id: video.id.toString()},
    }));

    return { paths, fallback: true };
}
 

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3004/videos/${params.id}`);
    const video = await res.json();

    return {
        props: {
            video,
        },
        revalidate: 1,
    }
}