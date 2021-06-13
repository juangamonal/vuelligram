<template>
  <div>
    <label v-if="label && type !== 'checkbox'" :for="$attrs.id">{{
      label
    }}</label>
    <input :type="type" v-bind="$attrs" v-model="model"/>
    <label
      class="label-inline"
      v-if="label && type === 'checkbox'"
      :for="$attrs.id"
      >{{ label }}</label
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import InputBase from "./InputBase.vue";

type InputType = "text" | "number" | "checkbox";

@Component({ inheritAttrs: false })
export default class MInput extends InputBase {
  @Prop({ type: String })
  readonly type!: InputType;
}
</script>
