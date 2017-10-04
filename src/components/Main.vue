<template>
  <section id="main">
    <tabs>
      <tab name="Custom Event" :selected="true">
        <h1 class="title">Apply coupon here</h1>
        <div class="section">
          <ol>
            <li>Custom event 'applied' is used for communication between Coupon component and Main component</li>
            <li>'couponAccepted' param is used to either show coupon element or coupon accepted message</li>
          </ol>
        </div>
        <message v-if="couponAccepted" :title="title" :body="body" />
        <coupon v-else @applied="onCouponApplied"></coupon>
      </tab>
      <tab name="Music">
        <h1 class="title">Music goes here</h1>
        <p>Tumeric cold-pressed man braid distillery. Asymmetrical raw denim la croix shaman freegan chillwave put a bird on it glossier locavore single-origin coffee venmo keffiyeh man braid DIY. Swag DIY street art taxidermy hell of jianbing offal fixie bicycle rights schlitz poutine.</p>
      </tab>
      <tab name="Videos">
        <h1 class="title">Videos go here</h1>
        <p> Occupy fashion axe sriracha authentic. Mustache tumblr banh mi crucifix fanny pack XOXO shaman listicle. Master cleanse mustache +1 gentrify ugh heirloom. Tumeric cold-pressed man braid distillery. Asymmetrical raw denim la croix shaman freegan chillwave put a bird on it glossier locavore single-origin coffee venmo keffiyeh man braid DIY. </p>
      </tab>
      <tab name="Documents">
        <h1 class="title">Documents go here</h1>
        <p>IPhone poutine seitan bespoke slow-carb. Activated charcoal celiac intelligentsia tousled pug lumbersexual. VHS quinoa 90's meditation hell of, vice 8-bit knausgaard. Schlitz plaid ugh tacos cliche. Occupy fashion axe sriracha authentic.</p>
      </tab>
    </tabs>

    <modal :is-active="isActive" @close="hideModal">
      <template slot="header">{{ title }}</template>
      {{ body }}
    </modal>
  </section>
</template>

<script>
import Coupon from './Coupon';
import Message from './Message';
import Modal from './Modal';
import Tab from './Tab';
import Tabs from './Tabs';


export default {
  name: 'main-component',
  components: {
    coupon: Coupon,
    message: Message,
    modal: Modal,
    tab: Tab,
    tabs: Tabs,
  },
  data: () => ({
    title: '',
    body: '',
    isActive: false,
    couponAccepted: false,
  }),
  methods: {
    showModal() {
      this.isActive = true;
    },
    hideModal() {
      this.isActive = false;
    },
    onCouponApplied(couponCode) {
      this.title = 'Coupon Activity';
      this.body = `You used coupon code ${couponCode}, it was accepted`;
      this.couponAccepted = true;
      this.showModal();
    },
  },
};
</script>
