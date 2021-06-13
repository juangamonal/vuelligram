<script lang="ts">
import ButtonBase from "./base/button";
import MButton from "./Button.vue";
import { Component } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";

@Component
export default class MButtonGroup extends ButtonBase {
  render(h: CreateElement): VNode {
    const props = {
      mType: this.mType,
      expanded: this.expanded,
      size: this.size,
    };

    return h(
      "div",
      { class: "button-group" },
      this.$slots.default?.map((s) =>
        h(MButton, { props }, s.componentOptions?.children)
      )
    );
  }
}
</script>
