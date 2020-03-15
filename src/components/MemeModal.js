import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './MemeModal.css';
import { fetchPostMeme } from '../actions/memeInputAction';
import PropTypes from 'prop-types';

const MemeModal = ({ headline, caption, image }) => {
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = (meme) => {
    dispatch(fetchPostMeme(meme));
    history.replace('/memes');
  };

  return ( 
    <div className={styles.MemeModal}>
      <section className={styles.meme}>
        <h1 className={styles.headline}>{headline}</h1>
        <img src={image} />
        <h1 className={styles.caption}>{caption}</h1>
      </section>
      <div className={styles.controls}>
        <button type="submit" onClick={() => handleSubmit({ headline, caption, image })}>Make it!</button>
        <button type="button">Ditch it!</button>
      </div>
    </div>
  );
};

MemeModal.propTypes = {
  headline: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.string.isRequired
};
export default MemeModal;
