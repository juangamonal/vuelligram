import { Component, Prop, Vue } from "vue-property-decorator";

type ButtonType = undefined | "clear" | "outline";
type ButtonSize = undefined | "small" | "large";

@Component
export default class ButtonBase extends Vue {
  @Prop({ type: String }) readonly mType!: ButtonType;
  @Prop({ default: false, type: Boolean }) readonly expanded!: boolean;
  @Prop({ type: String }) readonly size!: ButtonSize;
}
