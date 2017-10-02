<template>
  <div id="budgets-list">
    I'm a list of budgets.

    <router-link :to="{ name: 'budgetCreate' }">Add a budget</router-link>

    <table class="table is-bordered">
      <thead>
        <tr>
          <th>Budget Month</th>
          <th>Budgeted</th>
          <th>Spent</th>
          <th>Income</th>
          <th>Balance</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="budget, key in sortedBudgets" :class="{ 'is-delinquent': false }">
          <td><span class="subtitle is-5">{{ budget.month | dateFilter }}</span></td>
          <td><span class="subtitle is-5">${{ budget.budgeted }}</span></td>
          <td><span class="subtitle is-5">${{ budget.spent }}</span></td>
          <td><span class="subtitle is-5">${{ budget.income }}</span></td>
          <td><span class="subtitle is-5">${{ budget.budgeted - budget.spent }}</span></td>
          <td>
            <router-link :to="{ name: 'budgetUpdate', params: { budgetId: budget.id }}">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { dateFilter } from '@/filters';

export default {
  name: 'budgets-list',

  mounted() {
    this.loadBudgets();
  },

  filters: {
    dateFilter,
  },

  methods: {
    ...mapActions([
      'loadBudgets',
    ]),
  },

  computed: {
    ...mapState({
      budgets: state => state.budgets.budgets,
    }),

    sortedBudgets() {
      return Object.keys(this.budgets)
      .sort((a, b) => this.budgets[b].month - this.budgets[a].month)
      .map(key => this.budgets[key]);
    },
  },


};
</script>

<style scoped lang='scss'>
  #budgets-list {

  }
</style>