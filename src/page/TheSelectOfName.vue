<template>
  <select class="select-al" v-model="selectOption" @change="handleSelectChange">
    <option value="">select an option</option>
    <option value="alcoholic">alcoholic</option>
    <option value="non_alcoholic">non alcoholic</option>
  </select>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import axiosClient from "@/axiosClient";

const drinks = ref(null);
const selectOption = ref("");

const emit = defineEmits(["drinks"]);

function searchAlcohol() {
  axiosClient.get("filter.php?a=Alcoholic").then((response) => {
    const data = response.data;
    drinks.value = data.drinks;
    emit("drinks", drinks.value);
  });
}

function searchNoAlcohol() {
  axiosClient.get("filter.php?a=Non_Alcoholic").then((response) => {
    const data = response.data;
    drinks.value = data.drinks;
    emit("drinks", drinks.value);
  });
}

function handleSelectChange() {
  if (selectOption.value === "alcoholic") {
    searchAlcohol();
  } else if (selectOption.value === "non_alcoholic") {
    searchNoAlcohol();
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.select-al
  position: absolute
  right: 50px
  width: 170px
  top: 25px
  height: 35px
  padding: 5px
  font-size: 17px
  border-color:$blue
</style>
