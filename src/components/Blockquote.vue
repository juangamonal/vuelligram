<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MBlockquote extends Vue {}
</script>
