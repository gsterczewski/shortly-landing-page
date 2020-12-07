<template>
  <header class="header">
    <img class="logo" src="assets/images/logo.svg" alt="" />
    <nav class="navigation">
      <ul class="navigation-list">
        <li v-for="link in links" :key="link" class="navigation-item">
          <a class="navigation-link" href="#">{{ link }}</a>
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
    <nav
      class="mobile-navigation"
      :class="{ 'mobile-navigation--active': isMenuActive }"
      id="js-mobile-nav"
    >
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

<style lang="scss" scoped>
.header {
  @include flex(space-between, center);
  padding-top: $gap-l;
  padding-bottom: $gap-l;
  background-color: $color-white;
}

.logo {
  height: $font-size-xxl;
}
.navigation {
  @include flex(space-between, center);
  flex-grow: 1;
  @media (max-width: $tablet-breakpoint) {
    display: none;
  }

  &-link:hover,&-link:focus {
    color: $color-dark-violet;
  }

  &-link {
    color: $color-gray;
  }
}

.navigation-list {
  @include flex(space-between, center);
}

.navigation-item:not(:last-child),
.logo {
  margin-right: $gap-l;
}

.mobile-navigation {
  background-color: $color-violet;
  width: 86%;
  padding: 50px 20px;
  text-align: center;
  color: $color-white;
  position: absolute;
  top: 100px;
  left: -100%;
  border-radius: 7px;
  z-index: 2;
  transition: all 0.35s;
  visibility: hidden;
  &-list {
    text-align: center;
  }
  &-item {
    & > a {
      width: 100%;
      
    }
  }
  &-item:not(:last-of-type) {
    margin-bottom: $gap-m;
  }

  &-hr {
    border-top: 1px solid $color-gray;
    margin: $gap-l 0;
    opacity: 0.3;
  }
}

.mobile-navigation--active {
  left: 7%;
  visibility: visible;  
}
</style>
