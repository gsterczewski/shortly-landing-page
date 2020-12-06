<template>
  <ul class="feature-list">
    <li v-for="feature in features" :key="feature.title" class="feature">
      <div class="feature-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <path fill="#2BD0D0" :d="feature.d" />
        </svg>
      </div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.body }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FeatureList",
  props: {
    features: Array
  }
};
</script>

<style lang="scss" scoped>
.feature-list {
  margin-top: $gap-xxl;

  @media (min-width: 1200px) {
    @include flex;

    & > .feature:nth-of-type(2) {
      margin: 30px 40px 0;
    }
    & > .feature:nth-of-type(3) {
      margin-top: 60px;
    }
  }
}

.feature {
  $list-gap-y: 100px;
  $list-gap-x: 40px;
  font-size: 0.9rem;
  background-color: $color-white;
  border-radius: 10px;
  padding: $gap-s;
  text-align: center;
  position: relative;

  &:not(:last-child) {
    margin-bottom: $list-gap-y;
    &::after {
      @include delimiter($list-gap-x, $list-gap-y, 10px);
    }
  }
}
.feature-logo {
  @include flex(center, center);
  @include circle(80px);
  background-color: $color-violet;
  margin: 0 auto;
  transform: translateY(-50%);
}
</style>
