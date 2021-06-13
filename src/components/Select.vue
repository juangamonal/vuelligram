<template>
  <div>
    <label v-if="label" :for="$attrs.name">{{ label }}</label>
    <select :type="type" v-bind="$attrs" v-slot="model">
      <slot />
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import InputBase from "./InputBase.vue";

type InputType = "text" | "number";

@Component({ inheritAttrs: false })
export default class MSelect extends InputBase {
  @Prop({ type: String })
  readonly type!: InputType;
}
</script>
