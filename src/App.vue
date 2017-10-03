<template>
  <div id="app" class="container">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    navigation: Navigation,
  },
};
</script>
