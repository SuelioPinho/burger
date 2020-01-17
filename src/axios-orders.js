import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://burger-98474.firebaseio.com/'
    baseURL: 'https://4vs9ii21v5.execute-api.us-east-1.amazonaws.com/dev'
});

export default instance;