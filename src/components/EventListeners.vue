<template>
  <section id="event-listeners">
    <h1>Lists</h1>

    <input type="text" id="input" v-model="newName">
    <button id="button" @click="addName">Add Name</button>

    <ul>
      <li v-for="(name, i) in names" :key="i">{{ name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'event-listeners',
  data: () => ({
    newName: '',
    names: ['Joe', 'Mary', 'Jane', 'Jack'],
  }),
  methods: {
    addName() {
      if (this.newName) {
        this.names.push(this.newName);
      }
      this.newName = '';
    },
  },
  // mounted() {
  //   // Dirty way of doing this
  //   const self = this;
  //   document.querySelector('#button').addEventListener('click', () => {
  //     const name = document.querySelector('#input');
  //     self.names.push(name.value);
  //     name.value = '';
  //   });
  // },
};
</script>

<style lang="scss" scoped>
#event-listeners ul li {
  text-align: left;
}
</style>
