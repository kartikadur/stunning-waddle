<template>
  <section id="tabs-component">
    <div class="tabs">
      <ul>
        <li v-for="(tab, i) in tabs" :key="i" :class="{ 'is-active': tab.isActive }">
          <a href="#" @click.prevent="selectTab(tab)">
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>

  </section>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'tabs',
  data: () => ({
    tabs: [],
  }),
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        /** Use Vue.set(object, param as string, value)
         * instead of tab.isActive = (tab.name === selectedTab.name)
         * for reassigning values
        */
        Vue.set(tab, 'isActive', (tab.name === selectedTab.name));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#tabs-component {
  .tabs {
    li+li {
      margin: 0;
    }
  }
}
</style>

