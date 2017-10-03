<template>
  <section id="lists" class="content">
    <h1 title>Lists</h1>

    <div class="field has-addons">
      <div class="control">
        <input type="text" id="input" class="input">
      </div>
      <div class="control">
        <button id="button" class="button is-primary">Add Name</button>
      </div>
    </div>
    <section class="section">
      <ul>
        <li v-for="(name, i) in names" :key="i">{{ name }}</li>
      </ul>
    </section>
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
