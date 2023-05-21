<script>
import QuizForm from "./components/QuizForm.vue";
export default {
  name: "App",
  components: { QuizForm },
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
    <QuizForm />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
