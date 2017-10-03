<template>
  <div class="content" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    name: { required: true },
    selected: { default: false },
  },
  data: () => ({
    isActive: false,
  }),
  mounted() {
    this.isActive = this.selected;
  },
};
</script>
