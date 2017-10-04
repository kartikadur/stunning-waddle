<template>
  <section id="attribute-and-class-binding" class="content">
    <h1 class="title">Attribute and Class Binding</h1>

    <button class="button is-primary" :title="title">Hover over me</button>

    <h3 class="subtitle is-5" :class="className">Title with dynamically assigned color</h3>

    <button class="button" @click="toggleButton" :class="{ 'is-blue-background': isBlueBackground }">Click to Toggle Background Color</button>
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
  .color-red {
    color: red;
  }

  .is-blue-background {
    background-color: #3FB8AF;
    color: white;
  }
}
</style>
