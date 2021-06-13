<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export type Label = string | undefined;

@Component
export default class InputBase extends Vue {
  @Prop({ type: String })
  readonly label!: Label;
}
</script>
