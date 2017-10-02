import * as components from './components';

export default [{
  path: '/budgets',
  component: components.BudgetsList,
  name: 'budgetsList',
}, {
  path: '/budgets/create',
  component: components.BudgetCreateUpdate,
  name: 'budgetCreate',
}, {
  path: '/budgets/update/:budgetId',
  component: components.BudgetCreateUpdate,
  name: 'budgetUpdate',
}];
