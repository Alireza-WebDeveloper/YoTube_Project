import axios from 'axios';

const ajaxApi = axios.create({
  baseURL: 'https://youtube-v31.p.rapidapi.com',
  params: {
    part: 'snippet',
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'da5d87ef91msh569ca25b4f82bc5p1d6a5bjsn37b50fdac013',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});

export default ajaxApi;
