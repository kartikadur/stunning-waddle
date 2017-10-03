<template>
  <section id="task-list" class="content">
    <h1 class="title">
      Task Lists
    </h1>
    <section class="section">
      <ul>
        <task v-for="(task, i) in tasks" :key="i">{{ task.description }}</task>
      </ul>
    </section>
  </section>
</template>

<script>
import Task from './Task';

export default {
  name: 'task-list',
  components: {
    task: Task,
  },
  data: () => ({
    tasks: [
      { description: 'Check emails', completed: true },
      { description: 'Buy Milk', completed: false },
      { description: 'Buy Apples', completed: false },
      { description: 'Walk for an hour', completed: false },
      { description: 'Make dinner', completed: false },
      { description: 'Make bed', completed: true },
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>
