import Vue from 'vue';
import Router from 'vue-router';

// Import Components
import Main from '@/components/Main';
import * as components from '@/components';

Vue.use(Router);


export const routes = [
  // {
  //   path: '/basic-data-binding',
  //   name: 'Basic Data Binding',
  //   component: components.BasicDataBinding,
  // }, {
  //   path: '/lists',
  //   name: 'Lists',
  //   component: components.Lists,
  // }, {
  //   path: '/event-listeners',
  //   name: 'Event Listeners',
  //   component: components.EventListeners,
  // }, {
  //   path: '/attribute-and-class-binding',
  //   name: 'Attribute and Class Binding',
  //   component: components.AttributeAndClassBinding,
  // }, {
  //   path: '/computed-properties',
  //   name: 'Computed Properties',
  //   component: components.ComputedProperties,
  // }, {
  //   path: '/task-list',
  //   name: 'TaskList',
  //   component: components.TaskList,
  // },
  {
    path: '/',
    name: 'main',
    component: Main,
  },
];

/* eslint-disable no-console */
Object.keys(components).forEach((key) => {
  // console.log(components[key].name, components[key].name.split(''));
  const name = components[key].name;
  const navLink = {
    component: components[key],
    path: `/${name}`,
    name,
  };
  routes.push(navLink);
});
/* eslint-enable no-console */

export default new Router({
  routes,
});
