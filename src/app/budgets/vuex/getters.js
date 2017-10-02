export default {
  getBudgetById: state => (budgetId) => {
    if (state.budgets && budgetId in state.budgets) {
      return state.budgets[budgetId];
    }
    return false;
  },

  getCategoryById: state => (categoryId) => {
    if (state.categories && categoryId in state.categories) {
      return state.categories[categoryId];
    }
    return false;
  },

  getCategorySelectList: (state) => {
    if (state.categories && Object.keys(state.categories).length > 0) {
      return Object.values(state.categories);
    }
    return [];
  },

  getBudgetCategoryById: state => (budgetId, budgetCategoryId) => {
    if (state.budgets && budgetId in state.budgets) {
      if (state.budgets[budgetId].budgetCategories &&
        budgetCategoryId in state.budgets[budgetId].budgetCategories) {
        return state.budgets[budgetId].budgetCategories[budgetCategoryId];
      }
      return false;
    }
    return false;
  },
};
