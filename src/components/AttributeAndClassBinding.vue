<template>
  <section id="attribute-and-class-binding">
    <h1>Attribute and Class Binding</h1>

    <button :title="title">Hover over me</button>

    <h3 :class="className">Title with dynamically assigned color</h3>

    <button @click="toggleButton" :class="{ 'is-blue-background': isBlueBackground }">Click to Toggle Background Color</button>
  </section>
</template>

<script>
export default {
  name: 'attribute-and-class-binding',
  data: () => ({
    title: 'This title is dynamically bound using "v-bind:title"',
    className: 'color-red',
    isBlueBackground: false,
  }),
  methods: {
    toggleButton() {
      this.isBlueBackground = !this.isBlueBackground;
    },
  },
};
</script>

<style lang="scss" scoped>
#attribute-and-class-binding {
  button {
    padding: 5px;
    border: 1px solid rgba(42, 42, 42, 0.9);
    border-radius: 5px;
    background-color: #ddd;
  }
  ul li {
    text-align: left;
  }

  .color-red {
    color: red;
  }

  .is-blue-background {
    background-color: #3FB8AF;
  }
}
</style>
