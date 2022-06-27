import React from 'react';
import styles from './CreateEvento.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { EVENT_POST } from '../../Api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const CreateEvento = () => {
  const name = useForm();
  const description = useForm();
  const date = useForm();
  const place = useForm();
  const time = useForm();


  const { data, error, loading, request } = useFetch();

  
  const navigate = useNavigate();
  React.useEffect(() => {
    if (data) navigate('/event');
  }, [data, navigate]);


  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('name', name.value);
  //   formData.append('description', description.value);
  //   formData.append('date', date.value);
  //   formData.append('place', place.value);
  //   formData.append('time', time.value);

  //   const token = window.localStorage.getItem('token');
  //   const { url, options } = PHOTO_POST(formData, token);
  //   request(url, options);
  // }


  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = EVENT_POST({
      name: name.value,
      description: description.value,
      date: date.value,
      place: place.value,
      time: time.value
    });
    const { response, json } = await request(url, options);
  }



  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome do Evento" type="text" name="name" {...name} />
        <Input label="Descrição" type="text" name="description" {...description} />
        <Input label="Data" type="date" name="date" {...date} />
        <Input label="Local" type="text" name="place" {...place} />
        <Input label="Horário" type="time" name="time" {...time} />
   
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default CreateEvento;
