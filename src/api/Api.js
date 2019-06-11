import axios from 'axios'

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
    baseURL: baseURL || API_URL,
    headers: generateHeaders(),
    ...options
  })

  newInstance.interceptors.response.use(response => {
    return response
  }, error => {
    if (checkExpiredSession && ErrorUtils.isExpiredSession(error)) {

      // store.dispatch('Auth/setToken', undefined)
      // store.commit('SignUp/setStep', { noRedirect: true, step: 1 })
      window.removeSession()

      swal({
        title: 'Session expired!',
        type: 'warning',
        showConfirmButton: true,
        confirmButtonText: 'OK'
      }).then(r => {
        window.location.replace('/conta/entrar')
      })

    }

    return Promise.reject(error)
  })

  return newInstance
}

export default instance
