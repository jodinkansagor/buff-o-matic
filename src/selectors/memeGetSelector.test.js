import { isloadingGetMeme, getGetMeme } from './memeGetSelector';

describe('get meme selectors', () => {
  it('selects the get meme loading status', () => {
    const state = {
      get: {
        loading: true,
        memeArray: []
      }
    };

    const loading = isloadingGetMeme(state);
    expect(loading).toEqual(true);
  });

  it('selects the get meme', () => {
    const state = {
      get: {
        memeArray: [
          { headline: 'headline', caption: 'caption', image: 'image' },
          { headline: 'headline2', caption: 'caption2', image: 'image2' }
        ]
      }
    };

    const memeArray = getGetMeme(state);
    expect(memeArray).toEqual(
      [{ headline: 'headline', caption: 'caption', image: 'image' }, { headline: 'headline2', caption: 'caption2', image: 'image2' }]
    );
  });
});
