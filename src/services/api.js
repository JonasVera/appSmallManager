const axios = require('axios');

const api = axios.create({
    baseURL:'http://192.168.42.235:4520/'
})

export default api;