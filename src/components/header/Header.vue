<template>
  <header class="header">
    <img class="logo" src="assets/images/logo.svg" alt="" />
    <nav class="navigation">
      <ul class="navigation-list">
        <li v-for="link in links" :key="link" class="navigation-item">
          <a href="#">{{ link }}</a>
        </li>
      </ul>
      <ul class="navigation-list">
        <li class="navigation-item">
          <a href="">Login</a>
        </li>
        <li class="navigation-item">
          <a class="call-to-action" href="">Sign Up</a>
        </li>
      </ul>
    </nav>
    <menu-button @click="toggleMenu" :isMenuActive="isMenuActive" />
    <nav class="mobile-navigation" :class="{'mobile-navigation--active': isMenuActive}" id="js-mobile-nav">
      <ul class="mobile-navigation-list">
        <li v-for="link in links" :key="link" class="mobile-navigation-item">
          <a href="#">{{ link }}</a>
        </li>
      </ul>
      <hr class="mobile-navigation-hr" />
      <ul class="mobile-navigation-list">
        <li class="mobile-navigation-item">
          <a href="#">Login</a>
        </li>
        <li class="mobile-navigation-item">
          <a class="call-to-action" href="">Sign Up</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import MenuButton from "./MenuButton.vue";
export default {
  components: { MenuButton },
  props: {
    links: Array,
    toggleMenu: Function,
    isMenuActive: Boolean
  }
};
</script>

<style></style>
