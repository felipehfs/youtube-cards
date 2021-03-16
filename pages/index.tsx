import DefaultLayout from "../components/layout/defaultLayout";
import Gallery from "../components/gallery";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

export default function Home({ videos }) {
  const router = useRouter();

  return (
  <DefaultLayout>
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
      }}>
      <h2>Meus vídeos</h2>
      <Button onClick={() => router.push("/videos/create")}>+</Button>
    </header>
    <Gallery items={videos} />
  </DefaultLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`http://localhost:3004/videos`);
  const data = await response.json();

  return {
    props: {
      videos: data,
    }
  }
}