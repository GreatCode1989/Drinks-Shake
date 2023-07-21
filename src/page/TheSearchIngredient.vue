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
</template>

<script setup></script>

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
  color: yellow
  font-size: 54px
  text-align: center
  letter-spacing: 2px
  font-weight: bold
  text-shadow: 3px 2px gray
</style>
