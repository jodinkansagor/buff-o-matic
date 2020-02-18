import { FETCH_GET_MEME_LOADING, FETCH_GET_MEME } from '../actions/memeListAction';

const initialState = {
  loading: false,
  memeArray: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_GET_MEME_LOADING:
      return { ...state, loading: true };
    case FETCH_GET_MEME:
      return { ...state, loading: false, memeArray: action.payload };
    default:
      return state;
  }
}
