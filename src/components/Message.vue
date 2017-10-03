<template>
  <article id="message-component" class="message" v-show="isVisible">
    <div class="message-header">
      {{ title }}
      <button class="delete" aria-label="delete" @click="hideModal"></button>
    </div>
    <div class="message-body">
      {{ body }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'message',
  props: ['title', 'body'],
  data: () => ({
    isVisible: true,
  }),
  methods: {
    hideModal() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
