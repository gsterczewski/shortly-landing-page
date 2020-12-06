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

<style lang="scss" scope>
  .menu-btn {
  &-bar {
    width: 2rem;
    height: 4px;
    background-color: $color-gray;
    transition: all 0.35s;
  }
  &-bar:nth-of-type(2) {
    margin: 5px 0;
  }
  &:hover{
    cursor: pointer;
  }
  &:hover{
    .menu-btn-bar{
      background-color: $color-cyan;
    }
  }    
  @media (min-width: $tablet-breakpoint+1) {
    display: none;
  }
}

.menu-btn--active {
  .menu-btn-bar-2 {
    transform: translate(50%);
  }
  .menu-btn-bar {
    background-color: $color-cyan;
  }
}
</style>
