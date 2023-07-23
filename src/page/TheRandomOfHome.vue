<template>
  <div>
    <div v-for="drink of drinks" :key="drink.idDrink" class="drink-container">
      <router-link :to="{ name: 'detail', params: { id: drink.idDrink } }"
        ><img class="img-random" :src="drink.strDrinkThumb" alt=""
      /></router-link>

      <div class="view-part">
        <h2>{{ drink.strDrink }}</h2>
        <div class="ing-to-ins">
          <h3>{{ drink.strInstructions }}</h3>
        </div>
        <h2 class="ing-to">Ingredient:</h2>
        <div v-for="(el, ind) of new Array(20)" :key="ind">
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
    padding: 15px
    width: 500px
    border-radius: 5%

.drink-container
    display: flex
    border: 1px solid gray
    height: 500px
    margin: 20px
    background-color: $graynav
    border-radius: 1%
    border: 2px solid gray
    box-shadow: 5px 5px $textMuted
    overflow: hidden

.view-part
    position: relative
    left: 100px
    top: 10px
    right: 15px
    bottom: 10px
    justify-content: space-between
    color: #fff
    margin-right: 170px


.ing-to
  padding-top: 10px
  padding-bottom: 10px
</style>
