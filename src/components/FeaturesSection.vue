<template>
  <section class="features-section">
    <form class="link-form">
      <label for="link-input" class="hidden">Shorten link here</label>
      <input
        class="link-form-input"
        :class="{ invalid: isError }"
        type="text"
         name="link-input"
        id="link-input"
        v-model="url"
        placeholder="Shorten a link here"
      />
      <span v-if="isError" class="link-form-error">{{ errorMessage }}</span>

      <button
        class="button-primary link-form-button"
        @click.prevent="submit"
        :disabled="isPending"
      >
        <ball-loader v-if="isPending" />
        <span v-else>Shorten It!</span>
      </button>
    </form>
    <ul>
      <shortlink
        v-for="link in links"
        :key="link.code"
        :link="link"
        :onCopy="onCopy"
        :copiedLink="copiedLink"
      />
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
import BallLoader from "./BallLoader.vue";
import useApi from "./composables/use-api";
import useStore from "./composables/use-store";
import scroll from "../dom/scroll";
import copy from "../dom/copy";

import { ref, onBeforeMount, nextTick } from "vue";
export default {
  name: "FeaturesSection",
  props: { features: Array },
  components: { FeatureList, Shortlink, BallLoader },
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
          nextTick(() => {
            scroll(link.code);
          });
        }
      } else {
        scroll(link.code);
      }
    };
    const onCopy = code => {
      copiedLink.value = code;
      copy(`link-${copiedLink.value}`);
    };
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

<style lang="scss" scoped>
.features-section {
  position: relative;
}

.link-form {
  $form-padding: 30px;
  transform: translateY(-50%);
  padding: $form-padding;
  background-image: url("../../public/assets/images/bg-shorten-mobile.svg");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-color: $color-violet;
  border-radius: 10px;

  &-input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 12px;
    padding-left:$gap-xs ;
    &:invalid {
      border-color: $color-red;
    }
    &:focus{
      border-bottom-color: $color-cyan;
    }
  }

  &-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    //background-color: rgba(0,0,0,0.6);
    //@include flex(center,center)
  }
  &-button {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-top: $gap-m;
    font-size: 0.9rem;
    position: relative;
  }
  &-error {
    position: absolute;
    top: 85px;
    left: $form-padding;
    font-size: $font-size-s;
    color: $color-red;
  }
  @media (min-width: 700px) {
    @include flex(space-between, center);
    background-image: url("../../public/assets/images/bg-shorten-desktop.svg");

    &-button {
      width: 23%;
      margin-top: 0;
    }
    &-input {
      width: 75%;
      margin-bottom: 0;
    }
  }
}
.invalid {
  border-color: $color-red;
}
</style>
