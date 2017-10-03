<template>
  <section id="computed-properties" class="content">
    <h1 class="title">
      {{ reversedMessage }}
    </h1>
    <section class="section">
      <h2 class="subtitle is-5">All tasks</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">{{ task.description }}</li>
      </ul>
    </section>
    <section class="section">
      <h2 class="subtitle is-5">Completed tasks with v-if</h2>
      <ul>
        <li v-for="(task, index) in tasks" v-if="task.completed" :key="index">{{ task.description }}</li>
      </ul>
    </section>
    <section class="section">
      <h2 class="subtitle is-5">Incomplete tasks (computed)</h2>
      <ul>
        <li v-for="(task, index) in incompleteTasks" :key="index">{{ task.description }}</li>
      </ul>
    </section>

  </section>
</template>

<script>
export default {
  name: 'computed-properties',
  data: () => ({
    message: 'Hello World',
    tasks: [
      { description: 'Check emails', completed: true },
      { description: 'Buy Milk', completed: false },
      { description: 'Buy Apples', completed: false },
      { description: 'Walk for an hour', completed: false },
      { description: 'Make dinner', completed: false },
      { description: 'Make bed', completed: true },
    ],
  }),
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>


