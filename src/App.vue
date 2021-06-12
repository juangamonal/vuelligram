<template>
  <div id="app">
    <!-- blockquote -->
    <section class="container">
      <h3>Blockquote</h3>
      <MBlockquote></MBlockquote>
    </section>

    <!-- Button -->
    <section class="container">
      <h3>Button</h3>
      <m-button>Normal</m-button>
      <m-button m-type="clear">Clear</m-button>
      <m-button m-type="outline">Outline</m-button>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MBlockquote from "./components/Blockquote.vue";
import MButton from "./components/Button.vue";

@Component({
  components: {
    MBlockquote,
    MButton
  }
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import './assets/vuelligram.sass'
</style>
