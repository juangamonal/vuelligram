<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export type ItemType = string | number;

@Component
export default class ListBase<T> extends Vue {
  @Prop({ required: true, type: Array })
  readonly items!: T[];
}
</script>
