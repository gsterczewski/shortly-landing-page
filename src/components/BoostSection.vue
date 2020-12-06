<template>
  <section class="boost-section">
    <h2 class="text-centered boost-section-heading">Boost your links today</h2>
    <a href="#" class="call-to-action">Get Started </a>
  </section>
</template>

<script>
export default {
  name: "BoostSection"
};
</script>

<style lang="scss" scoped>
  .boost-section {
  @include flex-column(flex-start, center);
  margin-top: $gap-xxl;
  padding-top: $gap-xxl;
  padding-bottom: $gap-xxl;
  background-image: url("../../public/assets/images/bg-boost-mobile.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $color-violet;
  &-heading {
    color: $color-white;
  }

  @media (min-width: $tablet-breakpoint) {
    background-image: url("../../public/assets/images/bg-boost-desktop.svg");
  }
}
</style>
