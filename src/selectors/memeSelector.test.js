import { isLoadingPostMeme, getPostedMeme } from './memeSelector';

describe('meme selectors', () => {
  it('selects the post meme loading state', () => {
    const state = {
      post: {
        loading: true,
        meme: null
      }
    };

    const loading = isLoadingPostMeme(state);
    expect(loading).toEqual(true);
  });

  it('selects the post meme', () => {
    const state = {
      post: {
        loading: true,
        meme: {
          headline: 'headline', caption: 'caption', image: 'image'
        }
      }
    };

    const meme = getPostedMeme(state);
    expect(meme).toEqual({ headline: 'headline', caption: 'caption', image: 'image' });
  });
});
