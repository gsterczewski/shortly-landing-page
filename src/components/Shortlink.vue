<template>
  <li class="link-item" :id="link.code">
    <p class="link-item-title truncate">{{ link.original }}</p>
    <hr class="link-item-line" />
    <div class="link-item-group">
      <a
        :href="link.full"
        target="_blank"
        class="link-item-anchor"
        :id="`link-${link.code}`"
        >{{ link.full }}</a
      >
      <button
        class="button-primary link-item-button"
        :class="{ 'button-primary--active': isActive }"
        @click.prevent="toClipboard"
      >
        {{ isActive ? "Copied!" : "Copy" }}
      </button>
    </div>
  </li>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Shortlink",
  props: {
    link: Object,
    copiedLink: String,
    onCopy: Function
  },
  setup(props) {
    const isActive = computed(() => props.link.code === props.copiedLink);
    const toClipboard = () => {
      props.onCopy(props.link.code);
    };
    return {
      toClipboard,
      isActive
    };
  }
};
</script>

<style lang="scss" scoped>
.link-item {
  @include flex(space-between, center);
  background-color: $color-white;
  border-radius: 5px;
  margin-bottom: $gap-l;
  padding: $gap-m;

  &:last-of-type {
    margin-bottom: $gap-xxl;
  }

  &-title {
    margin: 0;
    color: $color-dark-violet;
    font-weight: 700;
    max-width: 40%;
    font-size: $font-size-m;
  }
  &-anchor {
    margin-right: $gap-m;
    color: $color-cyan;
    font-weight: 700;

    &:hover {
      color: $color-violet;
    }
  }
  &-button {
    width: 6rem;
  }
  &-line {
    display: none;
  }
  @media (max-width: $tablet-breakpoint) {
    @include flex-column();
    padding-left: 0;
    padding-right: 0;
    &-title {
      margin-bottom: $gap-s;
      max-width: 100%;
      width: 100%;
      padding-left: $gap-m;
    }
    &-group {
      width: 100%;
      @include flex-column();
      padding: 0 $gap-m;
    }
    &-anchor {
      margin-bottom: $gap-s;
    }
    &-button {
      width: 100%;
      padding: $gap-s;
    }
    &-line {
      display: block;
      width: 100%;
      margin-bottom: $gap-s;
      opacity: 0.1;
    }
  }
}
</style>
