<template>
  <section id="basic-data-binding">
    <h1>Basic Data Binding</h1>
    <input type="text" id="input" v-model="message">
    <p>The value of the input is: {{ message }}</p>
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
