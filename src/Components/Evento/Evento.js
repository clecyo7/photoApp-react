import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';
import ListEvento from './ListEvento';
import CreateEvento from './CreateEvento';
import ShowEvento from './ShowEvento';
import UpdateEvento from './UpdateEvento';
import EventoHeader from './EventoHeader';

const Evento = () => {
  const { data } = React.useContext(UserContext);
  //console.log(data)

  return (
    <section className="container">
      <Head title="Eventos" />
      <EventoHeader />
      <Routes>
        <Route path="/" element={<ListEvento />} />
        <Route path="create" element={<CreateEvento />} />
        <Route path="show" element={<ShowEvento />} />
        <Route path="update" element={<UpdateEvento />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Evento;
