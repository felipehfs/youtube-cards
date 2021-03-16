import DefaultLayout from "../../components/layout/defaultLayout";
import TextField from "../../components/forms/TextField";
import Button from "../../components/Button";
import React, { useState } from "react";
import { useRouter } from "next/router";


const styles = { marginTop: '10px', display: "flex", justifyContent: "flex-end" };


export default function CreateVideos() {
  const [formValues, setFormValues] = useState({ 
    title: '',
    youtubeId: '',
    description: '',
    cover: ''
  });
  const router = useRouter();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({...formValues, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3004/api/videos`, {
        body: JSON.stringify(formValues),
        method: 'POST',
      });
  
      const body = await response.json();
      console.log(body);
      router.push('/')

    } catch(err) {
      console.error(err);
    }
  };

  return (
    <DefaultLayout>
      <h2>Novo vídeo</h2>
      <form>
        <TextField 
          onChange={handleOnChange}
          value={formValues.title} 
          name="title"
          label="Título" />
        <TextField 
          name="youtubeId"
          onChange={handleOnChange}
          value={formValues.youtubeId} 
          label="Id do Youtube" />
        <TextField 
          name="cover"
          onChange={handleOnChange}
          value={formValues.cover} 
          label="Capa do Vídeo" />
        <TextField 
          name="description"
          onChange={handleOnChange}
          value={formValues.description} 
          label="Descrição" />
        <div style={styles}>
          <Button onClick={handleSubmit}>Salvar</Button>
        </div>
      </form>
    </DefaultLayout>
  );
}
