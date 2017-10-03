<template>
  <section id="basic-data-binding" class="content">
    <h1 class="title">Basic Data Binding</h1>
    <input type="text" id="input" class="input" v-model="message">
    <p class="subtitle is-5">Input: {{ message }}</p>
  </section>
</template>

<script>
export default {
  name: 'basic-data-binding',
  data: () => ({
    message: 'Hello world',
  }),
};
</script>

<style lang="scss" scoped>
#basic-data-binding {
  margin: 0;
  padding: 0;
}
</style>
