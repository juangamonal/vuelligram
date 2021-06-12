<template>
  <div id="app">
    <!-- blockquote -->
    <section class="container">
      <h3>Blockquote</h3>
      <m-blockquote>
        <p><em>Yeah!! Milligram is amazing.</em></p>
      </m-blockquote>
    </section>

    <!-- button -->
    <section class="container">
      <h3>Button</h3>
      <p>
        <m-button>Normal</m-button>
        <m-button m-type="clear">Clear</m-button>
        <m-button m-type="outline">Outline</m-button>
      </p>
    </section>

    <!-- table -->
    <section class="container">
      <h3>Table</h3>
      <m-table :columns="tableOne.columns" :data="tableOne.data" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MBlockquote from "./components/Blockquote.vue";
import MButton from "./components/Button.vue";
import MTable from "./components/Table.vue";

@Component({
  components: {
    MBlockquote,
    MButton,
    MTable,
  },
})
export default class App extends Vue {
  readonly tableOne = {
    columns: [
      { name: "Name", key: "name" },
      { name: "Age", key: "age" },
      { name: "Height", key: "height" },
      { name: "Location", key: "location" },
    ],
    data: [
      {
        name: "Stephen Curry",
        age: "27",
        height: "1,91",
        location: "Akron, OH",
      },
      {
        name: "Klay Thompson",
        age: "25",
        height: "2,01",
        location: "Los Angeles, CA",
      },
    ],
  };
}
</script>

<style lang="sass">
@import './assets/vuelligram.sass'
</style>
