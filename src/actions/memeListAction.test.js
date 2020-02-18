import { fetchGetMeme, FETCH_GET_MEME_LOADING, FETCH_GET_MEME } from './memeListAction';

jest.mock('../services/memeApi.js');

describe('get meme', () => {
  it('creates the get loading state', () => {
    const dispatch = jest.fn();
    const action = fetchGetMeme();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_GET_MEME_LOADING });
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_GET_MEME, payload: [{ headline: 'headline', caption: 'caption', image: 'image' }, { headline: 'headline2', caption: 'caption2', image: 'image2' }] });
      });
  });

});
