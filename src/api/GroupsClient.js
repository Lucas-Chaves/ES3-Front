import Api from './Api';

export default {
  getAll() {
    return Api({}).get(`/grupo`);
  },

  create(payload) {
    return Api({}).post(`/grupo`, payload);
  },
}
