import axios from 'axios';

const ajaxApi = axios.create({
  baseURL: 'https://youtube-v31.p.rapidapi.com',
  params: {
    part: 'snippet',
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '30fa33f71emsh863cfde46b96189p1dac12jsn23cfc4940c28',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});

export default ajaxApi;
