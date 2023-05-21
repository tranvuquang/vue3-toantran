<script>
export default {
  name: "About",
  data() {
    return {
      abouts: [
        { id: 1, name: "name1" },
        { id: 2, name: "name2" },
      ],
    };
  },
};
</script>

<template>
  <div class="about">
    <h2>About Page</h2>
    <div class="item" v-for="about in abouts" :key="about.id">
      <router-link :to="`/about/${about.id}`">{{ about.name }}</router-link>
    </div>
  </div>
</template>

<style></style>
