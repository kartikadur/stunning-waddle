<template>
  <section id="event-listeners" class="content">
    <h1 class="title">Event Listeners</h1>

    <div class="field has-addons">
      <div class="control">
        <input type="text" id="input" class="input" v-model="newName">
      </div>
      <div class="control">
        <button id="button" class="button is-primary" @click="addName">Add Name</button>
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
