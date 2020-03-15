import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

const MemeItem = (meme) => (

  <section className={styles.meme}>
    <h1 className={styles.headline}>{meme.headline}</h1>
    <img src={meme.image} />
    <h1 className={styles.caption}>{meme.caption}</h1>
  </section>
);

MemeItem.propTypes = {
  meme: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default MemeItem;
