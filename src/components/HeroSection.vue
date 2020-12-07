<template>
  <section class="hero-section">
    <img
      class="hero-section-img"
      src="assets/images/illustration-working.svg"
      alt=""
    />
    <div class="hero-section-content">
      <h1 class="hero-section-heading">More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <a href="#" class="call-to-action"> Get Started </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
};
</script>

<style lang="scss" scoped>
.hero-section {
  background-color: $color-white;
  padding-top: $gap-l;
  padding-bottom: $gap-xxxl;
  @include flex-column(flex-start, center);
  overflow-x: hidden;
  &-heading {
    font-size: $font-size-xxl;
  }
  &-img {
    width: 100vw;
    max-width: 800px;
    margin-left: 50px;
  }

  &-content {
    text-align: center;
    margin-top: $gap-l;
  }

  @media (min-width: 1000px) {
    @include flex-reverse(center, space-between);
    &-img {
      width: 50%;
    }
    &-content {
      margin-top: 0;
      flex-grow: 1;
      text-align: left;
    }
    &-heading {
      font-size: $font-size-xxxl;
    }
  }
}
</style>
