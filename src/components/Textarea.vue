<template>
  <div>
    <label v-if="label" :for="$attrs.name">{{ label }}</label>
    <textarea v-bind="$attrs" v-model="model"/>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import InputBase from "./InputBase.vue";

@Component({ inheritAttrs: false })
export default class MTextarea extends InputBase {}
</script>
