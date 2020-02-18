import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <section className={styles.header}>
    <Link to={'/'}>
      <h1>Welcome to the Buffy Meme-o-matic!</h1>
    </Link>
  </section>
);


export default Header;
