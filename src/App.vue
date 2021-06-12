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
      <m-table :columns="table.columns" :data="table.data" />
    </section>

    <!-- list -->
    <section class="container">
      <h3>Lists</h3>
      <div class="row">
        <div class="column">
          <m-ul :items="ulItems" />
        </div>
        <div class="column">
          <m-ol :items="olItems" />
        </div>
        <div class="column">
          <m-dl :items="dlItems" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MBlockquote from "./components/Blockquote.vue";
import MButton from "./components/Button.vue";
import MTable from "./components/Table.vue";
import MDl from "./components/Dl.vue";
import MOl from "./components/Ol.vue";
import MUl from "./components/Ul.vue";

@Component({
  components: {
    MBlockquote,
    MButton,
    MTable,
    MDl,
    MOl,
    MUl,
  },
})
export default class App extends Vue {
  readonly table = {
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

  readonly ulItems = [
    "Unordered list item 1",
    "Unordered list item 2",
    "Unordered list item 3",
  ];
  readonly olItems = [
    "Ordered list item 1",
    "Ordered list item 2",
    "Ordered list item 3",
  ];
  readonly dlItems = [
    {
      value: "Description list item 1",
      children: ["Description list item 1.1"],
    },
  ];
}
</script>

<style lang="sass">
@import './assets/vuelligram.sass'
</style>
