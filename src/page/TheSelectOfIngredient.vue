<template>
  <select class="select-al" v-model="drink" @change="updateDrink">
    <option value="">Select:</option>
    <option value="Snowday">Snowday</option>
    <option value="Gluehwein">Gluehwein</option>
    <option value="Downshift">Downshift</option>
  </select>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const drink = ref("");
const emit = defineEmits();

const updateDrink = () => {
  emit("drink", drink.value);
};
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
