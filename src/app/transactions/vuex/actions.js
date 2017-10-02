export const doSomething = ({ commit }, data) => {
  commit('DO_SOMETHING', { data });
};

export { doSomething as default };
