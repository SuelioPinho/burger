import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-98474.firebaseio.com/'
});

export default instance;