<template>
  <section id="navigation" class='navbar' role="navigation" aria-label="main navigation">
    <div class="navbar-brand"></div>
    <div class="navbar-menu">

      <ul class="navbar-menu">
        <li v-for="(route, index) in routes" :key="index">
          <router-link class="navbar-item" :to="{ name: route.name }">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>

    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </section>
</template>

<script>
import { routes } from '../router';

export default {
  name: 'navigation',
  data: () => ({
    routes,
  }),
};
</script>

<style lang="scss" scoped>

</style>
