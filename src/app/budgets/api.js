import localforage from 'localforage';
// import moment from 'moment';

import { processAPIData } from '@/utils';

const BUDGET_NAMESPACE = 'BUDGET';
const CATEGORY_NAMESPACE = 'CATEGORY';

/* eslint-disable no-console */
export const saveBudget = (data) => {
  const budget = Object.assign({}, data);
  budget.month = budget.month.toJSON();

  return localforage.setItem(`${BUDGET_NAMESPACE}-${budget.id}`, budget)
    .then(value => value)
    .catch(err => console.log('Error', err));
};

export const fetchBudgets = () => (
  localforage.startsWith(BUDGET_NAMESPACE)
  .then((res) => {
    const budgets = processAPIData(res);
    /* eslint-disable no-console */
    Object.keys(budgets).map(k => (
      Object.assign(
        budgets[k], {
          month: new Date(budgets[k].month),
        },
      )
    ));
    return budgets;
  }));

export const saveCategory = category => (
  localforage.setItem(`${CATEGORY_NAMESPACE}-${category.id}`, category)
  .then(value => value)
  .catch(err => console.log('Error', err))
);

export const fetchCategories = () => (
  localforage.startsWith(CATEGORY_NAMESPACE)
  .then(res => processAPIData(res))
);
