import localforage from 'localforage';

import { processAPIData } from '@/utils';

const ACCOUNT_NAMESPACE = 'ACCOUNT';

/* eslint-disable no-console */
export const saveAccount = account => (
  localforage.setItem(`${ACCOUNT_NAMESPACE}-${account.id}`, account)
  .then(value => value)
  .catch(err => console.log('Error', err))
);

export const removeAccount = account => (
  localforage.removeItem(`${ACCOUNT_NAMESPACE}-${account.id}`)
  .then(() => true)
  .catch((err) => {
    console.log('Error', err);
    return false;
  })
);

export const fetchAccounts = () => (
  localforage.startsWith(ACCOUNT_NAMESPACE)
  .then(res => processAPIData(res))
);
