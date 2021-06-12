<template>
  <ol>
    <li v-for="(e, i) in items" :key="i">{{ e }}</li>
  </ol>
</template>

<script lang="ts">
import ListBase, { ItemType } from "./ListBase.vue";
import { Component } from "vue-property-decorator";

@Component
export default class MUl extends ListBase<ItemType> {}
</script>
