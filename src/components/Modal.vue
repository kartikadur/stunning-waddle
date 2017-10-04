<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class=" modal-background "></div>
    <div class="modal-card ">
      <header class="modal-card-head ">
        <p class="modal-card-title ">
          <slot name="header"></slot>
        </p>
        <button class="delete " aria-label="close " @click="closeModal"></button>
      </header>
      <section class="modal-card-body ">
        <!-- Content ... -->
        <slot>
          No message was assigned to this modal
        </slot>
      </section>
      <footer class="modal-card-foot ">
        <slot name="footer">
          <button class="button is-success" @click="closeModal">Ok</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['body', 'isActive'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>


