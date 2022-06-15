import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasEventos } from '../../Assets/feed.svg';
import { ReactComponent as Evento } from '../../Assets/evento.svg';
import { ReactComponent as AdicionarEvento } from '../../Assets/adicionar.svg';
import { ReactComponent as EditarEvento } from '../../Assets/edit.svg';
import { ReactComponent as Voltar } from '../../Assets/voltar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './EventoHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const EventoHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/event" end>
          <MinhasEventos />
          {mobile && 'Meus Eventos'}
        </NavLink>

        <NavLink to="/event/create">
          <AdicionarEvento />
          {mobile && 'Criar Evento'}
        </NavLink>

        <NavLink to="/event/show">
          <Evento />
          {mobile && 'Visualização de Eventos'}
        </NavLink>

        <NavLink to="/event/update">
          <EditarEvento />
          {mobile && 'Editar Evento'}
        </NavLink>
        <NavLink to="/conta">
          <Voltar />
          {mobile && 'Voltar'}
        </NavLink>

        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default EventoHeaderNav;
