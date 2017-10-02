<template>
  <div id="accounts-create-edit">

    <router-link :to="{ name: 'accountsList' }">View all accounts</router-link>

    <div class="columns">
      <div class="column is-6">
        <form @submit.prevent="processSave" class="form">
          <label for="name" class="label">Name</label>
          <p class="control">
            <input type="text" class="input" name="name" v-model="selectedAccount.name">
          </p>
          <label for="category" class="label">Category</label>
          <p class="control">
            <span class="select">
              <select name="category" id="category" v-model="selectedAccount.category">
                <option v-for="value, key in categories" :value="key">{{ value }}</option>
              </select>
            </span>
          </p>
          <label for="balance" class="label">Balance</label>
          <p class="control has-icon" v-if="!editing">
            <input type="number" class="input" step="0.01" name="balance" v-model="selectedAccount.balance">
            <span class="help">Use negative values for accounts that carry a negative balance, e.g. credit cards</span>
            <span class="icon">
              <i class="fa fa-usd" aria-hidden="true"></i>
            </span>
          </p>
          <p v-else>
            <span>To update your balance, add a balance adjusting transaction.</span>
          </p>
          <div class="control is-grouped">
            <p class="control">
              <button class="button is-success">Submit</button>
            </p>
            <p class="control">
              <router-link class="button is-link" :to="{ name: 'accountsList' }">Cancel</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { CATEGORIES } from '@/consts';

  export default {
    name: 'account-create-update',
    props: ['accountId'],

    data() {
      return {
        categories: CATEGORIES,
        selectedAccount: {},
        editing: false,
      };
    },
    mounted() {
      if (this.accountId) {
        this.loadAccount();
      }
    },
    methods: {
      ...mapActions([
        'createAccount',
        'updateAccount',
        'loadAccounts',
      ]),

      resetAndGo() {
        this.selectedAccount = {};
        this.$router.push({ name: 'accountsList' });
      },

      saveNewAccount() {
        this.createAccount(this.selectedAccount)
        .then(() => {
          this.resetAndGo();
        });
      },

      saveAccount() {
        this.updateAccount(this.selectedAccount)
        .then(() => {
          this.resetAndGo();
        });
      },

      processSave() {
        if (this.editing) {
          this.saveAccount();
        } else {
          this.saveNewAccount();
        }
      },

      loadAccount() {
        const self = this;
        this.loadAccounts()
        .then(() => {
          const selectedAccount = self.getAccountById(self.$route.params.accountId);
          if (selectedAccount) {
            self.editing = true;
            self.selectedAccount = Object.assign({}, selectedAccount);
          }
        });
      },
    },

    computed: {
      ...mapGetters([
        'getAccountById',
      ]),
    },

    watch: {
      accountId(newId) {
        if (newId) {
          this.loadAccount();
        }
        this.editing = false;
        this.selectedAccount = {};
      },
    },
  };
</script>

<style scoped lang='scss'>
  #accounts-create-edit {

  }
</style>