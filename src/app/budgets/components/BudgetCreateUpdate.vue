<template>
  <div id="budget-create-update">
    
    <router-link :to="{ name: 'budgetsList' }">View all budgets</router-link>
    
    <div class="columns">
      <div class="column is-6">
        <form @submit.prevent='processSave' class="form">
          <div class="field has-addons">
            <p class="control has-icons-left">
              <datepicker type="date" input-class="input" name="month" v-model="selectedBudget.month" format="MMMM yyyy"></datepicker>
              <span class="icon is-left">
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </span>
            </p>
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </div>
          <span class="help" v-if="!editing">To add budget items you must first save the budget.</span>
          <router-link class="button is-link" :to="{ name: 'budgetsList' }">Cancel</router-link>
        </form>    
      </div>
    </div>

    <div v-if="editing">
      <nav class="level">
        <div class="level-item has-text-centered">
          <p class="heading">Budgeted</p>
          <p class="title">${{ selectedBudget.budgeted }}</p>
        </div>
        <div class="level-item has-text-centered">
          <p class="heading">Spent</p>
          <p class="title">${{ selectedBudget.spent }}</p>
        </div>
        <div class="level-item has-text-centered">
          <p class="heading">Income</p>
          <p class="title">${{ selectedBudget.income }}</p>
        </div>
      </nav>

       <table class="table is-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Budgeted</th>
            <th>Spent</th>
            <th>Remaining</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="value, key in selectedBudget.budgetCategories">
            <component
              :is="budgetCategoryComponent(value)"
              v-model="value"
              v-on:update-budget-category="saveBudgetCategory"
              v-on:edit-budget-category="activeBudgetCategory = value"
            ></component>
          </template>
          <BudgetCategoryCreateUpdate v-if="editing" v-on:add-budget-category="addBudgetCategory"></BudgetCategoryCreateUpdate>
        </tbody>
        <tfoot>
          <tr>
            <td>
              Copy budget from:
              <select class="select"
              @change="processDuplicateBudget($event.target.value)"
              >
                <option v-for="value, key in budgets"
                :value="key">{{ value.month | dateFilter }}</option>
              </select>
            </td>
            <td>${{ selectedBudget.budgeted }}</td>
            <td>${{ selectedBudget.spent }}</td>
            <td>${{ selectedBudget.budgeted - selectedBudget.spent }}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  import Datepicker from 'vuejs-datepicker';
  import { dateFilter } from '@/filters';

  import BudgetCategoryCreateUpdate from './BudgetCategoryCreateUpdate';
  import BudgetCategory from './BudgetCategory';

  export default {
    name: 'budget-create-update',

    data() {
      return {
        selectedBudget: {},
        editing: false,
        activeBudgetCategory: null,
        lastBudget: null,
      };
    },

    filters: {
      dateFilter,
    },

    components: {
      Datepicker,
      BudgetCategoryCreateUpdate,
      BudgetCategory,
    },

    mounted() {
      if ('budgetId' in this.$route.params) {
        this.loadBudgets()
        .then(() => {
          this.refreshBudget();
        });
      }
    },

    computed: {
      ...mapGetters([
        'getBudgetById',
        'getCategoryById',
      ]),

      ...mapState({
        budgets: state => state.budgets.budgets,
      }),
    },

/* eslint-disable no-alert */
    methods: {
      ...mapActions([
        'createBudget',
        'updateBudget',
        'loadBudgets',
        'createBudgetCategory',
        'updateBudgetCategory',
        'duplicateBudget',
      ]),

      resetAndGo() {
        this.selectedBudget = {};
        this.$router.push({ name: 'budgetsList' });
      },

      saveNewBudget() {
        this.createBudget(this.selectedBudget)
        .then(() => {
          this.resetAndGo();
        })
        .catch((err) => { alert(err); });
      },

      saveBudget() {
        // TODO save updated budget
        // temp
        this.updateBudget(this.selectedBudget)
        .then(() => {
          this.resetAndGo();
        })
        .catch((err) => { alert(err); });
      },

      processSave() {
        if (this.editing) {
          this.saveBudget();
        } else {
          this.saveNewBudget();
        }
      },

      addBudgetCategory(budgetCategory) {
        if (!budgetCategory.category) return;

        this.createBudgetCategory({
          budget: this.selectedBudget,
          budgetCategory: {
            category: budgetCategory.category.id,
            budgeted: budgetCategory.budgeted,
            spent: 0,
          },
        }).then(() => {
          this.refreshBudget();
        });
      },

      saveBudgetCategory(budgetCategory) {
        const bgCat = Object.assign({}, budgetCategory, {
          category: budgetCategory.category.id,
        });
        this.updateBudgetCategory({
          budget: this.selectedBudget,
          budgetCategory: bgCat,
        })
        .then(() => {
          this.refreshBudget();
        });
      },

      refreshBudget() {
        const selectedBudget = this.getBudgetById(this.$route.params.budgetId);
        if (selectedBudget) {
          this.editing = true;
          this.selectedBudget = Object.assign({}, selectedBudget);
        }
      },

      budgetCategoryComponent(budgetCategory) {
        if (this.activeBudgetCategory && this.activeBudgetCategory === budgetCategory) {
          return 'budget-category-create-update';
        }
        return 'budget-category';
      },

      processDuplicateBudget(budgetId) {
        if (confirm('Are you sure you want to duplicate this budget? Doing this will overwrite all existing data for this month (transaction data will NOT be erased).')) {
          this.duplicateBudget({
            budget: this.selectedBudget,
            baseBudget: this.getBudgetById(budgetId),
          }).then((budget) => {
            this.selectedBudget = budget;
          });
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  #budget-create-update {

  }
</style>