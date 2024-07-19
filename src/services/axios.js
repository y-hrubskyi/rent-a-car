import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65e9fd57c9bf92ae3d3acc7a.mockapi.io/api/v1'
});

export default instance;
