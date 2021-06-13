<template>
  <button class="button" :class="className">
    <slot />
  </button>
</template>

<script lang="ts">
import ButtonBase from "./base/button";
import { Component } from "vue-property-decorator";

@Component
export default class MButton extends ButtonBase {
  get className(): string {
    let str = "";

    if (this.mType) {
      switch (this.mType) {
        case "clear":
          str += "button-clear";
          break;
        case "outline":
          str += "button-outline";
          break;
        default:
          throw new Error(`Invalid button type value: '${this.mType}'`);
      }
    }

    if (this.size) {
      if (this.mType) str += " ";

      switch (this.size) {
        case "small":
          str += "button-small";
          break;
        case "large":
          str += "button-large";
          break;
        default:
          throw new Error(`Invalid button size value: '${this.size}'`);
      }
    }

    if (this.expanded) {
      str += `${this.mType || this.size ? " " : ""}button-expanded`;
    }

    return str;
  }
}
</script>
