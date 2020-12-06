<template>
  <li class="link-item" :id="link.code">

    <p class="link-item-title truncate">{{link.original}}</p>
      <div class="link-item-group">
    <a :href="link.full" class="link-item-anchor">{{link.full}}</a>
    <button class="button-primary">copy</button>
      </div>
    
</li>
</template>

<script>
import {onMounted} from "vue";
import scroll from "../dom/scroll";
export default {
    name: "Shortlink",
    props:{
        link: Object
    },
    setup(props){
        onMounted(()=> scroll(props.link.code))
    }
}
</script>

<style lang="scss">
    

</style>