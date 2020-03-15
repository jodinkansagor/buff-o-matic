import React, { useState } from 'react';
import styles from './MemeInputForm.css';
import MemeModal from './MemeModal';


const MemeInputForm = () => {
  const [headline, setHeadline] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState('');


  const handleSubmit = event => {
    event.preventDefault();
    setShowModal(true);
  };


  return (
    <>
      {showModal ? <MemeModal headline={headline} caption={caption} image={image} /> : null} 
    
      <form onSubmit={handleSubmit} className={styles.form}>
        <section className={styles.textInput}>
          <h2>Headline: </h2>
          <input type="text" id="headline" value={headline} onChange={({ target }) => setHeadline(target.value)} />
          <h2>Caption: </h2>
          <input type="text" value={caption} onChange={({ target }) => setCaption(target.value)} />

        </section>
        <section className={styles.imagesInput}>
          <input type="radio" value="https://media.wired.com/photos/59266c61cefba457b0799ec0/master/w_2400,c_limit/Buffy-the-Vampire-Slayer_TA_TSDBUTH_FE123_H.jpg" id="buffy1" name={image} onChange={({ target }) => setImage(target.value)} />
          <label htmlFor="buffy1"><img src='https://media.wired.com/photos/59266c61cefba457b0799ec0/master/w_2400,c_limit/Buffy-the-Vampire-Slayer_TA_TSDBUTH_FE123_H.jpg' /></label>
          <input type="radio" value="https://imgix.bustle.com/2017/3/14/53bb87e4-0439-4dd0-9ce2-dcbd7c148828.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70" id="buffy2" name={image} onChange={({ target }) => setImage(target.value)} />
          <label htmlFor="buffy2"><img src='https://imgix.bustle.com/2017/3/14/53bb87e4-0439-4dd0-9ce2-dcbd7c148828.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70' /></label>
          <input type="radio" value="https://consequenceofsound.net/wp-content/uploads/2019/03/screen-shot-2019-03-01-at-11.48.18-am.png?w=807(471 kB)
" id="buffy3" name={image} onChange={({ target }) => setImage(target.value)} />
          <label htmlFor="buffy3"><img src='https://consequenceofsound.net/wp-content/uploads/2019/03/screen-shot-2019-03-01-at-11.48.18-am.png?w=807(471 kB)
' /></label>
        </section>
        <button>Preview Your Meme!</button>
      </form>
    </>
  );
};

export default MemeInputForm;
