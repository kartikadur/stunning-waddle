<template>
  <section id="lists">
    <h1>Lists</h1>

    <input type="text" id="input">
    <button id="button">Add Name</button>

    <ul>
      <li v-for="(name, i) in names" :key="i">{{ name }}</li>
    </ul>

  </section>
</template>

<script>
export default {
  name: 'lists',
  data: () => ({
    names: ['Joe', 'Mary', 'Jane', 'Jack'],
  }),
  mounted() {
    // Dirty way of doing this
    const self = this;
    document.querySelector('#button').addEventListener('click', () => {
      const name = document.querySelector('#input');
      self.names.push(name.value);
      name.value = '';
    });
  },
};
</script>

<style lang="scss" scoped>
#lists ul li {
  text-align: left;
}
</style>
