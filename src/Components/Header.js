import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/c7logo2.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
 //const token = localStorage.getItem('token');

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.name}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
