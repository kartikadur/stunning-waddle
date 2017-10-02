<template>
  <section id="navigation">
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="{ name: route.name }">{{ route.name }}</router-link>
      </li>
    </ul>
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
