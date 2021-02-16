import md5 from "md5";

export const fetchCaharacters = () => {
  return get(`http://gateway.marvel.com/v1/public/characters`);
};

export const fetchCaharacter = id => {
  return get(`http://gateway.marvel.com/v1/public/characters/${id}`);
};

function get(url) {
  const ts = Date.now();
  // Replace with real data (dotEnv)
  const apiPublicKey = "";
  const apiPrivateKey = "";
  const hash = md5(ts + apiPrivateKey + apiPublicKey);
  return fetch(`${url}?ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`).then(
    handleResponse
  );
}
function handleResponse(response) {
  return response.text().then(text => {
    const data = (text && JSON.parse(text)) || {};

    if (!response.ok) {
      if (!data.error) {
        data.error = {
          message: response.statusText
        };
      }
      data.error.status = response.status;
      return Promise.reject(data.error);
    }

    return data.data.results;
  });
}
