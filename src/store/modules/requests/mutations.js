export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setLocalRequests(state, payload) {
    state.requests = payload;
  },
};
