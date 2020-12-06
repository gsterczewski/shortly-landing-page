<template>
  <section class="features-section">
    <form class="link-form">
      <input
        class="link-form-input"
        :class="isError ? 'invalid' : ''"
        type="text"
        name=""
        v-model="url"
      />
      <span v-if="isError" class="link-form-error">{{ errorMessage }}</span>
      <span v-if="isPending">pending....</span>
      <button
        class="link-form-button"
        @click.prevent="submit"
        :disabled="isPending"
      >
        Shorten It!
      </button>
    </form>
    <ul>
      <shortlink v-for="link in links" :key="link.code" :link="link" :onCopy="onCopy" :copiedLink="copiedLink" />
    </ul>
    <h2 class="text-centered">Advanced Statistics</h2>
    <p class="text-centered">
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>
    <feature-list :features="features" />
  </section>
</template>

<script>
import FeatureList from "./FeatureList.vue";
import Shortlink from "./Shortlink.vue";
import useApi from "./composables/use-api";
import useStore from "./composables/use-store";
import scroll from "../dom/scroll";
import copy from "../dom/copy";

import { ref, onBeforeMount } from "vue";
export default {
  name: "FeaturesSection",
  props: { features: Array },
  components: { FeatureList, Shortlink },
  setup() {
    const url = ref("");

    const { fetchLink, isError, isPending, errorMessage } = useApi();
    const { links, addLink, getLink, getAllLinks } = useStore();
    const copiedLink = ref(null);
    onBeforeMount(getAllLinks);

    const submit = async () => {
      let link = getLink(url.value);
      if (!link) {
        link = await fetchLink(url.value);
        if (!isPending.value && !isError.value) {
          addLink(link);
        }
      } else {
        scroll(link.code);
      }
    };
  const onCopy = (code) => {
    copiedLink.value = code
    copy(`link-${copiedLink.value}`)

  }
    return {
      submit,
      isError,
      isPending,
      errorMessage,
      url,
      links,
      onCopy,
      copiedLink
    };
  }
};
</script>

<style></style>
