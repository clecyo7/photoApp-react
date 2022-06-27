import React from 'react';
import EventoHeaderNav from './EventoHeaderNav';
import styles from './EventoHeader.module.css';
import { useLocation } from 'react-router-dom';

const EventoHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();


//receperar a pagina que o usuario está no momento faz um swith e alterar o titulo da pagina de acordo com o location

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {

      case '/event/create':
        setTitle('Criar Evento');
        break;

      case '/event/show':
        setTitle('Visualizar Evento');
        break;


      default:
        setTitle('Meus Eventos');
    }
  }, [location]);

  return (
      <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <EventoHeaderNav />
      </header>
  );
};

export default EventoHeader;
