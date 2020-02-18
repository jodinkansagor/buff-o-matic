import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MemeHome.css';

const MemeHome = () => (
  <section className={styles.Home}>
    <Link to={'/inputform'}>
      <h1>Create A Meme</h1>
    </Link>
    <Link to={'/memes'}>
      <h1>See All Memes</h1>
    </Link>
  </section>
);

MemeHome.propTypes = {};

export default MemeHome;
