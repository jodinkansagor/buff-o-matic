export const postMeme = () => {
  return Promise.resolve(
    { headline: 'headline', caption: 'caption', image: 'image' },
  );
};

export const getMeme = () => {
  return Promise.resolve([
    { headline: 'headline', caption: 'caption', image: 'image' },
    { headline: 'headline2', caption: 'caption2', image: 'image2' }
  ]);
};

