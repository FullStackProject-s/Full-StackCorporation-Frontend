import axios from "axios";

const $api = axios.create({
    withCredentials: false,
    baseURL: process.env.REACT_APP_API_DOMAIN,
})

$api.interceptors.request.use( config => {
  if ( config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  }
  return config
})
   

export default $api