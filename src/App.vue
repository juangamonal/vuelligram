<template>
  <div id="app">
    <!-- blockquote -->
    <section class="container">
      <h3>Blockquote</h3>

      <m-blockquote>
        <p><em>Yeah!! Vuelligram is amazing.</em></p>
      </m-blockquote>
    </section>

    <!-- button -->
    <section class="container">
      <h3>Button</h3>

      <h5>Types</h5>
      <p>
        <m-button>Normal</m-button>
        <m-button m-type="clear">Clear</m-button>
        <m-button m-type="outline">Outline</m-button>
      </p>

      <h5>Sizes</h5>
      <p>
        <m-button size="small">Small</m-button>
        <m-button>Normal</m-button>
        <m-button size="large">Large</m-button>
      </p>

      <h5>Expanded</h5>
      <p>
        <m-button expanded>Expanded normal</m-button>
        <m-button m-type="clear" expanded>Expanded clear</m-button>
        <m-button m-type="outline" expanded>Expanded outline</m-button>
      </p>
    </section>

    <!-- button group -->
    <section class="container">
      <h3>Button group</h3>

      <p>
        <m-button-group>
          <m-button>Button 1</m-button>
          <m-button>Button 2</m-button>
          <m-button>Button 3</m-button>
        </m-button-group>
      </p>
      <p>
        <m-button-group m-type="outline" size="small">
          <m-button>Button 1</m-button>
          <m-button>Button 2</m-button>
          <m-button>Button 3</m-button>
        </m-button-group>
      </p>
      <p>
        <m-button-group m-type="clear" size="large">
          <m-button>Button 1</m-button>
          <m-button>Button 2</m-button>
          <m-button>Button 3</m-button>
        </m-button-group>
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

    <!-- forms -->
    <section class="container">
      <h3>Forms</h3>

      <form>
        <fieldset>
          <m-input label="Name" name="name" placeholder="Juan Gamonal" />
          <m-select label="Age Range" name="age-range">
            <option value="0-13">0-13</option>
            <option value="14-17">14-17</option>
            <option value="18-23">18-23</option>
            <option value="24+">24+</option>
          </m-select>
          <m-textarea label="Comment" name="comment" placeholder="Hi Juan..." />
          <m-button>Send</m-button>
          <m-input
            class="float-right"
            label="Send a copy to yourself"
            type="checkbox"
          />
        </fieldset>
      </form>
    </section>

    <!-- code -->
    <section class="container">
      <h3>Code</h3>

      <m-code :code="code" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  MBlockquote,
  MButton,
  MButtonGroup,
  MCode,
  MInput,
  MTable,
  MSelect,
  MTextarea,
  MDl,
  MOl,
  MUl,
} from "./index";

@Component({
  components: {
    MBlockquote,
    MButton,
    MButtonGroup,
    MCode,
    MInput,
    MSelect,
    MTable,
    MTextarea,
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

  readonly code = `.milligram {
    color: #9b4dca;
}`;
}
</script>

<style lang="sass">
@import './vuelligram.sass'
</style>
