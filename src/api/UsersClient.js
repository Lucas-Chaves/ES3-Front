import Api from './Api'

export default {
  getAll() {
    return Api({}).get(`/user`)
  },

  create(payload) {
    return Api({}).post(`/user`, payload)
  },
}
