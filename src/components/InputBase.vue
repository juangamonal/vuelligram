<script lang="ts">
import { Component, Prop, VModel,Vue } from "vue-property-decorator";

export type Label = string | undefined;

@Component
export default class InputBase extends Vue {
  @Prop({ type: String })
  readonly label!: Label;

  @VModel()
  protected model!: any;
}
</script>
