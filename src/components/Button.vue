<template>
  <button class="button" :class="className">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type ButtonType = "normal" | "clear" | "outline";
type ButtonSize = "normal" | "small" | "large";

@Component
export default class MButton extends Vue {
  @Prop({ default: "normal", type: String }) readonly mType!: ButtonType;

  @Prop({ default: false, type: Boolean }) readonly expanded!: boolean;

  @Prop({ default: "normal", type: String }) readonly size!: ButtonSize;

  get className(): string {
    let str = "";

    if (this.mType) {
      switch (this.mType) {
        case "normal":
          break;
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
        case "normal":
          break;
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
