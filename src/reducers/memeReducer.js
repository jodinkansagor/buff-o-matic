import { FETCH_POST_MEME_LOADING, FETCH_POST_MEME } from '../actions/memeInputAction';

const initialState = {
  loading: false,
  meme: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POST_MEME_LOADING:
      return { ...state, loading: true };
    case FETCH_POST_MEME:
      return { ...state, loading: false, meme: action.payload };

    default:
      return state;
  }
}
