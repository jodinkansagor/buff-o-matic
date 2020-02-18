import { postMeme } from '../services/memeApi';

export const FETCH_POST_MEME_LOADING = 'FETCH_POST_MEME_LOADING';
export const FETCH_POST_MEME = 'FETCH_POST_MEME';

export const fetchPostMeme = meme => dispatch => {
  dispatch({ type: FETCH_POST_MEME_LOADING });
  return postMeme(meme)
    .then(meme => dispatch({
      type: FETCH_POST_MEME,
      payload: meme
    }));
};
