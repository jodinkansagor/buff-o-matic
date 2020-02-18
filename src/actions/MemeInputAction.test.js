import { fetchPostMeme, FETCH_POST_MEME_LOADING, FETCH_POST_MEME } from './memeInputAction';

jest.mock('../services/memeApi.js');

describe('post action', () => {
  it('creates the loading state action', () => {
    const dispatch = jest.fn();
    const action = fetchPostMeme({ headline: 'headline', caption: 'caption', image: 'image' });

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_POST_MEME_LOADING });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_POST_MEME,
          payload: { headline: 'headline', caption: 'caption', image: 'image' }
        });
      });
  });
});
