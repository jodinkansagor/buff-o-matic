import { getMeme } from '../services/memeApi';

export const FETCH_GET_MEME_LOADING = 'FETCH_GET_MEME_LOADING';
export const FETCH_GET_MEME = 'FETCH_GET_MEME';

export const fetchGetMeme = () => dispatch => {
  dispatch({ type: FETCH_GET_MEME_LOADING });
  return getMeme()
    .then((memeArray) => dispatch({ type: FETCH_GET_MEME, payload: memeArray }));
};
