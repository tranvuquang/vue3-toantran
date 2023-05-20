<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      teamName: "RHP Team",
      firstName: "Toan",
      lastName: "Tran",
      isHello: false,
      isShowModal: false,
    };
  },
  methods: {
    onChangeName() {
      this.firstName = "Sky";
      this.lastName = "Albert";
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<template>
  <div id="app">
    <h1>
      Hello from {{ teamName }} and
      {{ !isHello ? `${firstName} ${lastName}` : "" }}
    </h1>
    <button @click="onChangeName">Change Name</button>

    <div class="modal1" v-if="isShowModal">
      <h2>Modal content</h2>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
