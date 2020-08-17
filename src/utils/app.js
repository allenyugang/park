import axios from 'axios';
// import Cookies from 'js-cookie'
const service = axios.create({
    baseURL: process.env.VUE_APP_JAVA_API,
    timeout: 600000, // 请求超时时间
})
service.interceptors.request.use((config) => {
    return config;
  }, (error) => {
    console.log(error); // for debug
});
export {service};