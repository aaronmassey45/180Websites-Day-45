import axios from 'axios';

const API_KEY = '913eb1a611c447929ef24af6c93d4b6b';
const ROOT_URL = 'https://api.giphy.com/v1/gifs/search?q=';

export const FETCH_GIF = 'FETCH_GIF';

export function fetchGIF(gif) {
  const url = `${ROOT_URL}${gif}&api_key=${API_KEY}&limit=6`;
  const request = axios.get(url);

  return {
    type: FETCH_GIF,
    payload: request
  }
}
