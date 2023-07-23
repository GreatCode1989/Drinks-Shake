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
  <div>
    <div>
      <NavbarName />
    </div>
    <div class="input-img">
      <input
        class="search-match"
        v-model="drink"
        type="text"
        placeholder="Search Coctails"
        @change="searchDrinks"
      />
      <button type="button" class="search-button" @click="searchDrinks">
        <img class="img-search" src="../assets/img/search.png" alt="" />
      </button>
      <TheSelectOfName @drinks="selectDrinks" />
    </div>
  </div>
  <div v-if="drinks === null || drinks.length === 0">
    <img class="img-null" src="../assets/img/nameimg.jpg" />
  </div>
  <div>
    <div else>
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
  </div>
  <div>
    <div
      v-for="drink of select.slice(0, 20)"
      :key="drink.idDrink"
      class="drink-select"
    >
      <router-link :to="{ name: 'detail', params: { id: drink.idDrink } }"
        ><img class="img-random" :src="drink.strDrinkThumb" alt=""
      /></router-link>
    </div>
  </div>
</template>

<script setup>
import TheSelectOfName from "../page/TheSelectOfName.vue";
import NavbarName from "../components/NavbarName.vue";
import { ref, onMounted, computed } from "vue";
import store from "../store";

const select = ref([]);
const drink = ref("");
const drinks = computed(() => {
  return store.state.drinks;
});

function searchDrinks() {
  if (drink.value) {
    store.dispatch("searchCoctailName", drink.value);
    localStorage.setItem("drinkName", drink.value);
  } else {
    store.commit("searchName", []);
  }
}

function selectDrinks(data) {
  select.value = data;
}

onMounted(() => {
  drink.value = localStorage.getItem("drinkName");
  if (drink.value) {
    searchDrinks();
  }
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
  padding: 10px

.name-header
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  color: $green
  font-size: 54px
  text-align: center
  letter-spacing: 2px
  font-weight: bold
  text-shadow: 3px 2px gray

.search-match

  width: 70%
  display: flex
  justify-content: center
  margin: 0 auto

  margin-top: 25px
  height: 37px
  border-color: $blue
  font-size: 21px
  margin-bottom: 15px

  .img-random
    display: flex
    padding: 15px
    width: 500px
    border-radius: 5%

.drink-container
    display: flex
    border: 1px solid gray
    height: 700px
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

.img-search
  position: absolute
  right: 290px
  width: 30px



.input-img
  display: flex
  position: relative
  justify-content: space-between
  align-items: center

.search-button
  background-color: none
  border: none
  cursor: pointer
  padding: 0
  margin-left: 5px
  margin-bottom: 19px

.img-null
  display: flex
  justify-content: center
  margin: 0 auto
  width: 700px
  margin-bottom: 15px

.drink-select
  display: flex
  justify-content: center
  margin: 0 auto
  margin-top: 15px
</style>
