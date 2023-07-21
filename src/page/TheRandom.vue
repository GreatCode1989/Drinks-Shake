<template>
  <div>
    <div v-for="drink of drinks" :key="drink.idDrink" class="drink-container">
      <router-link :to="{ name: 'detail', params: { id: drink.idDrink } }"
        ><img class="img-random" :src="drink.strDrinkThumb" alt=""
      /></router-link>

      <div class="view-part">
        <h2>{{ drink.strDrink }}</h2>
        <div>
          <h3>{{ drink.strInstructions }}</h3>
        </div>
        <div v-for="(el, ind) of new Array(20)" :key="ind">
          <span>Ingredient:</span>
          <h3 v-if="drink[`strIngredient${ind + 1}`]">
            {{ drink[`strIngredient${ind + 1}`] }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  drinks: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.img-random
    display: flex
    margin: 10px
    width: 100%
    border-radius: 5%

.drink-container
    display: flex
    border: 1px solid gray
    height: 750px
    margin: 20px
    border-radius: 1%
    border: 2px solid gray
    box-shadow: 5px 5px $textMuted

.view-part
    position: relative
    left: 100px
    top: 20px
</style>
