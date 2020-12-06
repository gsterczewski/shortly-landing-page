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
