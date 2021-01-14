import axios from 'axios';

const Config = require('../../Config/config.json');

const baseUrl = Config.SERVER_URL;

const Api = () => axios.create({
  baseURL: baseUrl,
});

export default Api;
