<template>
  <div class="menu-btn" :class="{ 'menu-btn--active': isMenuActive }">
    <div class="menu-btn-bar menu-btn-bar-1"></div>
    <div class="menu-btn-bar menu-btn-bar-2"></div>
    <div class="menu-btn-bar menu-btn-bar-3"></div>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: {
    isMenuActive: Boolean
  }
};
</script>

<style></style>
