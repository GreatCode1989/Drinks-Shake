<template>
  <div>
    {{ drinks }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "@/axiosClient";
import { useRoute } from "vue-router";

const route = useRoute();
const drinks = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then((response) => {
    const data = response.data;
    drinks.value = data;
  });
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>
