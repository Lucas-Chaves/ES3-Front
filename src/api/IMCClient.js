import Api from './Api';

export default {
  getAll() {
    return Api({}).get(`/imc`);
  },

  create(payload) {
    return Api({}).post(`/imc`, payload);
  },
}
