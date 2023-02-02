import axios from "axios";
import { Access } from "types/auth/auth";

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_DOMAIN,
})

$api.interceptors.request.use( config => {
  if ( config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  }
  return config
})

$api.interceptors.response.use( 
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        const res = await axios.post<Access>(
          `${process.env.REACT_APP_API_DOMAIN}/auth/token/refresh/`,
          { withCredentials: true }
        )
        localStorage.setItem('token', res.data.access)
        return $api.request(originalRequest)
      } catch (error) {
        console.log("Unauthorized");
      }
    }
    throw error;
  }
)
   

export default $api