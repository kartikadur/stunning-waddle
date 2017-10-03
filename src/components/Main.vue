<template>
  <section id="main" class="content">

    <message :title="title" :body="body" />

    <button class="button is-info" @click="showModal">
      Show Modal
    </button>

    <modal :body="body" :is-active="isActive" @close="hideModal"></modal>

    <tabs>
      <tab name="Pictures" :selected="true">
        <h1 class="title">Pictures go here</h1>
        <p>Etsy raw denim hammock, actually bespoke cornhole put a bird on it. Kinfolk bitters hella subway tile, paleo cornhole distillery neutra. Pabst art party swag edison bulb, keffiyeh thundercats mustache poutine bushwick af shaman. Schlitz plaid ugh tacos cliche. </p>
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
  </section>
</template>

<script>
import Message from './Message';
import Modal from './Modal';
import Tabs from './Tabs';
import Tab from './Tab';

export default {
  name: 'main-component',
  components: {
    message: Message,
    modal: Modal,
    tabs: Tabs,
    tab: Tab,
  },
  data: () => ({
    title: 'This is a message',
    body: 'Etsy raw denim hammock, actually bespoke cornhole put a bird on it. Kinfolk bitters hella subway tile, paleo cornhole distillery neutra. Pabst art party swag edison bulb, keffiyeh thundercats mustache poutine bushwick af shaman. Schlitz plaid ugh tacos cliche. Occupy fashion axe sriracha authentic. Mustache tumblr banh mi crucifix fanny pack XOXO shaman listicle. Master cleanse mustache +1 gentrify ugh heirloom. Tumeric cold-pressed man braid distillery. Asymmetrical raw denim la croix shaman freegan chillwave put a bird on it glossier locavore single-origin coffee venmo keffiyeh man braid DIY. Swag DIY street art taxidermy hell of jianbing offal fixie bicycle rights schlitz poutine. IPhone poutine seitan bespoke slow-carb. Activated charcoal celiac intelligentsia tousled pug lumbersexual. VHS quinoa 90\'s meditation hell of, vice 8-bit knausgaard.',
    isActive: false,
  }),
  methods: {
    showModal() {
      this.isActive = true;
    },
    hideModal() {
      this.isActive = false;
    },
  },
};
</script>
