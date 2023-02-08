import axios from "axios";
import { Access } from "types/auth/auth";

export const $apiPost = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_DOMAIN,
})

$apiPost.interceptors.request.use( config => {
  if(config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  }
  return config
})

$apiPost.interceptors.response.use( 
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
          {withCredentials: true}
        )
        console.log(res);
        localStorage.setItem('token', res.data.access)
        return $apiPost.request(originalRequest)
      } catch (error) {
        console.log("Unauthorized");
      }
    }
    throw error;
  }
)


export const $apiGet = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_DOMAIN,
})

$apiGet.interceptors.request.use( config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})

$apiGet.interceptors.response.use( 
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
          {withCredentials: true}
        )
        console.log(res);
        localStorage.setItem('token', res.data.access)
        return $apiGet.request(originalRequest)
      } catch (error) {
        console.log("Unauthorized");
      }
    }
    throw error;
  }
)