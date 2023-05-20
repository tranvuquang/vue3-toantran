<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<template>
  <div id="app">
    <h1>this is app</h1>
    <button @click="toggleModal">Click me</button>
    <Teleport to="body">
      <Modal
        title="abc"
        content="def"
        theme="123"
        v-if="isShowModal"
        v-on:closeModal="toggleModal"
      >
        <template v-slot:header>
          <h2>This is header slot</h2>
        </template>
        <label for="">Name</label>
        <input type="text" />

        <template v-slot:footer>
          <h2>This is footer slot</h2>
        </template>
      </Modal>
    </Teleport>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
