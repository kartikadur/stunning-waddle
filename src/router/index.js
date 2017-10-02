import Vue from 'vue';
import Router from 'vue-router';

// Import Components
// This is how it will look finally
import * as components from '@/components';

Vue.use(Router);

export const routes = [
  {
    path: '/basic-data-binding',
    name: 'basic-data-binding',
    component: components.BasicDataBinding,
  }, {
    path: '/lists',
    name: 'lists',
    component: components.Lists,
  }, {
    path: '/event-listeners',
    name: 'event-listeners',
    component: components.EventListeners,
  }, {
    path: '/attribute-and-class-binding',
    name: 'attribute-and-class-binding',
    component: components.AttributeAndClassBinding,
  },
];

export default new Router({
  routes,
});
