import axios from 'axios';

const instance = ({ baseURL, noHeaders, options, headers, checkExpiredSession = true } = {}) => {
  const SESSION_TOKEN = undefined // sessionStorage.getItem(`token`)
  const generateHeaders = () => {
    if (!noHeaders) {
      return {
        Authorization: `Bearer ${SESSION_TOKEN}`,
        ...headers
      }
    }
    return {
      ...headers
    }
  }

  const newInstance = axios.create({
    baseURL: baseURL || "http://127.0.0.1/",
    headers: generateHeaders(),
    ...options
  })

  newInstance.interceptors.response.use(response => {
    return response
  }, error => {
    if (checkExpiredSession && ErrorUtils.isExpiredSession(error)) {
      swal({
        title: 'Session expired!',
        type: 'warning',
        showConfirmButton: true,
        confirmButtonText: 'OK'
      })
    }

    return Promise.reject(error)
  })

  return newInstance
}

export default instance
