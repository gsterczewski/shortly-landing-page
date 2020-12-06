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

<style lang="scss"></style>
