<template>
  <pre><code>{{ code }}</code></pre>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MCode extends Vue {
  @Prop({ required: true, type: String })
  readonly code!: string;
}
</script>
