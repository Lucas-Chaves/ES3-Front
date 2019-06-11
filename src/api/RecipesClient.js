import Api from './Api';

export default {
  getAll() {
    return Api({}).get(`/alimento`);
  },

  create(payload) {
    return Api({}).post(`/alimento`, payload);
  },
}
