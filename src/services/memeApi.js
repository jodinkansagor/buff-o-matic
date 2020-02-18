
export const postMeme = (meme) => {
  return fetch(`${process.env.API_URL}/api/v1/buff-memes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meme)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};


export const getMeme = () => {
  return fetch(`${process.env.API_URL}/api/v1/buff-memes`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};
