import axios from 'axios';

const baseUrl = 'http://jmcprofile01:14583';

const Api = () => axios.create({
  baseURL: baseUrl,
});

export default Api;
