<template>
  <table>
    <thead v-if="showHeader">
      <tr>
        <th v-for="(c, i) in columns" :key="i">
          {{ c.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(d, i) in data" :key="i">
        <td v-for="(c, j) in columns" :key="j">
          {{ d[c.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface Column {
  name: string;
  key: string;
}

type CellType = string | number;

@Component
export default class MTable extends Vue {
  @Prop({ required: true, type: Array })
  readonly columns!: Column[];

  @Prop({ required: true, type: Array })
  readonly data!: Map<string, CellType>[];

  @Prop({ default: true, required: false, type: Boolean })
  readonly showHeader!: boolean;
}
</script>
