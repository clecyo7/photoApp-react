import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/c7logo2.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
