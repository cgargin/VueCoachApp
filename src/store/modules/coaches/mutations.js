export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setLocalCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
