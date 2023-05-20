<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: { HelloWorld },
  data() {
    return {};
  },
  methods: {
    onClick() {
      console.log(this.$refs.hello);
    },
  },
};
</script>

<template>
  <div id="app">
    <h1>this is app</h1>
    <button @click="onClick">Click me</button>
    <HelloWorld msg="abc" ref="hello" />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
