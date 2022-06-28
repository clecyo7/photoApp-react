import React, { useEffect, useState } from 'react';
import styles from './CreateEvento.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { EVENT_POST, EVENT_LIST, EVENT_UPDATE } from '../../Api';
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../Helper/Head';

const UpdateEvento = () => {
  const [name, setName] = useState("");
  const [description, setDescription ] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState(true);
  const { data, error, loading, request } = useFetch();
  let { id } = useParams();

  
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (data) navigate('/event');
  // }, [data, navigate]);

  useEffect(() => {
    async function fetchEvents() {
     // const token = window.localStorage.getItem('token');
      const { url, options } = EVENT_LIST(id);
      const { response, json } = await request(url, options);
      let res = json;
      setName(res.name);
      setDescription(res.description);
      setDate(res.date);
      setPlace(res.place);
      setTime(res.time);

    }
    fetchEvents();
  }, [request]);



  const handleChangeName = (e) => {
    setName(e.target.value);
}

const handleDescription = (e) => {
  setDescription(e.target.value);
}

const handleDate = (e) => {
  setDate(e.target.value);
}

const handlePlace = (e) => {
  setPlace(e.target.value);
}

const handleTime = (e) => {
  setTime(e.target.value);
}
  const handleStatus = (e) => {
    setStatus(!status);
}

async function handleSubmit(event) {
  event.preventDefault();
  const { url, options } = EVENT_UPDATE(id, {  
    name: name,
    description: description,
    date: date,
    place: place,
    time: time,
    status: status
  });
  const { response, json } = await request(url, options);
  if(response.ok) navigate('/event');
}



  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome do Evento" value={name} type="text" name="name" onChange={handleChangeName} />
        <Input label="Descrição" value={description} type="text" name="description" onChange={handleDescription}  />
        <Input label="Data" value={date} type="date" name="date" onChange={handleDate} />
        <Input label="Local" value={place} type="text" name="place" onChange={handlePlace} />
        <Input label="Horário" value={time} type="time" name="time" onChange={handleTime} />
        <div className='row'>
          <h5 className="card-title">Situação do Evento</h5>
          <div className="mb-3 col-md-4">
            <div className="form-check form-switch ">
              <label className="form-check-label" >{status ? 'Ativo' : 'Inativo'}</label>
              <input className="form-check-input" value={status} type="checkbox" name='st_banco' checked={status} onClick={handleStatus} />
            </div>
          </div>
        </div>
        <br />
        
        {loading ? (
          <Button disabled>Editando...</Button>
        ) : (
          <Button>Editar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default UpdateEvento;
