import reducer from './memeGetReducer';
import { FETCH_GET_MEME_LOADING, FETCH_GET_MEME } from '../actions/memeListAction';

describe('meme reducer', () => {
 

  it('handles fetch get loading', () => {
    const action = { type: FETCH_GET_MEME_LOADING };
    const initialState = { loading: false, memeArray: [] };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      memeArray: []
    });
  });

  it('handles get fetch', () => {
    const action = { type: FETCH_GET_MEME, payload: [
      { headline: 'headline', caption: 'caption', image: 'image' },
      { headline: 'headline2', caption: 'caption2', image: 'image2' }
    ] };
    const initialState = { loading: true, memeArray: [] };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      memeArray: [
        { headline: 'headline', caption: 'caption', image: 'image' },
        { headline: 'headline2', caption: 'caption2', image: 'image2' }
      ]
    });
  });
});
