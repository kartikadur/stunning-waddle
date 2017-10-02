import * as components from './components';

export default [{
  path: '/',
  component: components.AccountsList,
  name: 'accountsList',
}, {
  path: '/accounts/create',
  component: components.AccountCreateUpdate,
  name: 'accountCreate',
}, {
  path: '/accounts/update/:accountId',
  component: components.AccountCreateUpdate,
  name: 'accountUpdate',
  props: true,
}];
