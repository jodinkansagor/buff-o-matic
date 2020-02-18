import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MemeItem from './MemeItem';
import { isloadingGetMeme, getGetMeme } from '../selectors/memeGetSelector';
import { fetchGetMeme } from '../actions/memeListAction';
import styles from './Meme.css';


const MemeList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isloadingGetMeme);
  const memeArray = useSelector(getGetMeme);
  console.log(memeArray);

  useEffect(() => {
    dispatch(fetchGetMeme());
  }, []);

  if(loading) return <h1>loading</h1>;

  const memeElements = memeArray.map(meme => (
    <li key={meme._id}>
      <MemeItem {...meme} />
    </li>
  ));

  return (
    <section className={styles.list}>
      {memeElements}
    </section>
  );
};

export default MemeList;

