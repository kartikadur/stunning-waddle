import Vue from 'vue';
import localforage from 'localforage';
// import 'bulma/css/bulma.css';

import { App } from './app';
import router from './router';
import store from './store';

require('localforage-startswith');

localforage.config({
  name: 'budgetapp',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  // template: '<App/>',
  components: { App },
  render: h => h(App),
});
