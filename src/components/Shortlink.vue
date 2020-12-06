<template>
  <li class="link-item" :id="link.code">
    <p class="link-item-title truncate">{{ link.original }}</p>
    <div class="link-item-group">
      <a :href="link.full" class="link-item-anchor" :id="`link-${link.code}`">{{link.full}}</a>
      <button class="button-primary copy-button" :class="{'button-primary--active': isActive}" @click.prevent="toClipboard">{{isActive ? "Copied!" : "Copy"}}</button>
    </div>
  </li>
</template>

<script>
import {computed } from "vue";

export default {
  name: "Shortlink",
  props: {
    link: Object,
    copiedLink:String,
    onCopy : Function
  },
  setup(props) {
  
   const isActive =  computed(() => props.link.code === props.copiedLink)
    const toClipboard = () => {
      props.onCopy(props.link.code)
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
  padding: 10px;
  background-color: $color-white;
  @include flex(space-between, center);
  margin-bottom: $gap-l;
  &:last-of-type {
    margin-bottom: $gap-xxl;
  }

  &-title {
    margin: 0;
    color: $color-dark-violet;
    font-weight: 500;
    max-width: 40%;
    font-size: $font-size-m;
  }
  &-anchor {
    margin-right: $gap-m;
    color: $color-cyan;
    &:hover {
      color: $color-violet;
    }
  }

  @media (max-width: $tablet-breakpoint) {
    @include flex-column();
    //font-size: $font-size-m;
    &-title {
      margin-bottom: $gap-m;
      max-width: 100%;
      width: 100%;
    }
    &-group {
      width: 100%;
      @include flex(space-between, center);
    }
  }
  
}
</style>
