import { guid } from '@/utils';
import { saveAccount, removeAccount, fetchAccounts } from '../api';

export const createAccount = ({ commit }, data) => {
  const id = guid();
  const account = Object.assign({ id }, data);
  commit('CREATE_ACCOUNT', { account });
  saveAccount(account).then(() => {});
};

export const updateAccount = ({ commit }, data) => {
  commit('UPDATE_ACCOUNT', { account: data });
  saveAccount(data).then(() => {});
};

export const deleteAccount = ({ commit }, data) => {
  commit('DELETE_ACCOUNT', { account: data });
  removeAccount(data).then(() => {});
};


export const loadAccounts = (state) => {
  if (!state.accounts || Object.keys(state.accounts).length === 0) {
    fetchAccounts()
      .then((res) => {
        state.commit('LOAD_ACCOUNTS', res);
        return res;
      });
  }
};
