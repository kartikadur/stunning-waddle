<template>
  <section id="coupon-component" class="content">
    <input type="text" class="input" placeholder="Enter your coupon code" @blur="applyCoupon">
  </section>
</template>

<script>
export default {
  name: 'coupon',
  methods: {
    applyCoupon(e) {
      this.$emit('applied', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
