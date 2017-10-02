export default {
  getAccountById: state => (accountId) => {
    if (state.accounts && accountId in state.accounts) {
      return state.accounts[accountId];
    }
    return false;
  },
};
