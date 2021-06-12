<template>
  <dl>
    <template v-for="(e, i) in items">
      <dt :key="i">{{ e.value }}</dt>
      <dd v-for="(c, j) in e.children" :key="`${i}-${j}`">{{ c }}</dd>
    </template>
  </dl>
</template>

<script lang="ts">
import ListBase, { ItemType } from "./ListBase.vue";
import { Component } from "vue-property-decorator";

interface Item {
  children?: ItemType[];
  value: ItemType;
}

@Component
export default class MUl extends ListBase<Item> {}
</script>
