<template>
  <div>
    <div>
      <header class="header-container">
        <div>
          <img class="img-header" src="../assets/img/header.jpg" alt="Drink" />
        </div>

        <div class="name-header">Выбирай свой напиток мечты!!</div>
      </header>
    </div>
  </div>
  <Navbar />
  <div>
    <TheRandomOfHome :drinks="drinks"></TheRandomOfHome>
  </div>
</template>

<script setup>
import TheRandomOfHome from "./TheRandomOfHome.vue";
import Navbar from "../components/Navbar";
import { onMounted, ref } from "vue";
import axiosClient from "@/axiosClient";

const drinks = ref({});

onMounted(() => {
  axiosClient.get("random.php").then((response) => {
    const data = response.data;
    drinks.value = data.drinks;
  });
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.header-container
  position: relative
  text-align: center

.img-header
  width: 100%
  height: 300px

.name-header
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  color: $textMuted
  font-size: 54px
  text-align: center
  letter-spacing: 2px
  font-weight: bold
</style>
