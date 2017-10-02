import moment from 'moment';

import { guid } from '@/utils';
import { saveBudget, fetchBudgets, saveCategory, fetchCategories } from '../api';

const verifyUniqueMonth = (budgets, budget) => {
  const month = moment(budget.month);

  return !Object.values(budgets).find((o) => {
    if (o.id === budget.id) {
      return false; // existing budget no need to check for month
    }
    return month.isSame(o.month, 'month');
  });
};

export const createBudget = ({ commit, state }, data) => {
  if (!verifyUniqueMonth(state.budgets, data)) {
    return Promise.reject(new Error('A budget already exists for this month.'));
  }

  const id = guid();
  const budget = Object.assign({ id }, data);
  budget.budgeted = 0;
  budget.spent = 0;
  budget.income = 0;

  commit('CREATE_BUDGET', { budget });
  return saveBudget(budget);
};

export const updateBudget = ({ commit, state }, data) => {
  if (!verifyUniqueMonth(state.budgets, data)) {
    return Promise.reject(new Error('A budget already exists for this month.'));
  }

  commit('UPDATE_BUDGET', { budget: data });
  return saveBudget(data);
};

export const loadBudgets = ({ commit, state }) => {
  if (!state.budgets || Object.keys(state.budgets).length === 0) {
    fetchBudgets()
      .then((res) => {
        commit('LOAD_BUDGETS', res);
        return res;
      });
  }
};

export const updateBudgetBalance = ({ commit, getters }, data) => {
  /*
  Accepts a budget and a parameter value to be updated
  param: budgeted\spent
  value: number
  */
  commit('UPDATE_BUDGET_BALANCE', data);
  saveBudget(getters.getBudgetById(data.budget.id));
};

export const createCategory = ({ commit, state }, data) => {
  const id = guid();
  const category = Object.assign({ id }, data);
  commit('CREATE_CATEGORY', { category });
  saveCategory(category);
  return category;
};

export const loadCategories = ({ commit, state }) => {
  if (!state.categories || Object.keys(state.categories).length === 0) {
    fetchCategories()
      .then((res) => {
        commit('LOAD_CATEGORIES', res);
        return res;
      });
  }
};

export const createBudgetCategory = ({ commit, dispatch, getters }, data) => {
  // Create empty budget categories object if it does not exist
  if (!data.budget.budgetCategories || Object.keys(data.budget.budgetCategories).length === 0) {
    commit('CREATE_EMPTY_BUDGET_CATEGORY_OBJECT', data.budget);
  }

  const id = guid();
  const budgetCategory = Object.assign({ id }, data.budgetCategory);

  commit('CREATE_BUDGET_CATEGORY', { budget: data.budget, budgetCategory });
  saveBudget(getters.getBudgetById(data.budget.id));

  dispatch('updateBudgetBalance', {
    budget: data.budget,
    param: 'budgeted',
    value: budgetCategory.budgeted,
  });
};

export const updateBudgetCategory = ({ commit, dispatch, getters }, data) => {
  const newBudget = data.budgetCategory.budgeted;
  const oldBudget = getters.getBudgetCategoryById(data.budget.id, data.budgetCategory.id).budgeted;

  if (newBudget !== oldBudget) {
    dispatch('updateBudgetBalance', {
      budget: data.budget,
      param: 'budgeted',
      value: newBudget - oldBudget,
    });
  }

  commit('UPDATE_BUDGET_CATEGORY', data);

  // save using the budget in our store
  saveBudget(getters.getBudgetById(data.budget.id));
};

export const duplicateBudget = ({ commit, dispatch, getters, state }, data) => {
  /* expects a baseBudget object which will be copied into a budget object */
  if (!(data.budget && data.baseBudget)) return Promise.reject(new Error('Incorrect data sent to duplicateBudget'));

  let budget = data.budget;

  budget.budgeted = 0;
  budget.budgetCategories = null;

  commit('UPDATE_BUDGET', { budget });

  budget = getters.getBudgetById(budget.id);

  if ('budgetCategories' in data.baseBudget) {
    Object.keys(data.baseBudget.budgetCategories).forEach((key) => {
      dispatch('createBudgetCategory', {
        budget,
        budgetCategory: {
          category: data.baseBudget.budgetCategories[key].category,
          budgeted: data.baseBudget.budgetCategories[key].budgeted,
          spent: 0,
        },
      });
    });
  }

  return budget;
};
