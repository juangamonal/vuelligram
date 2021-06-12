<template>
	<button class="button" :class="className">
		<slot/>
	</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

type ButtonType = "normal" | "clear" | "outline";

@Component
export default class MButton extends Vue {
	@Prop({ required: false, type: String })
	readonly mType!: ButtonType;

	get className() {
		if (this.mType) {
			switch (this.mType) {
				case "normal":
					return null;
				case "clear":
					return "button-clear";
				case "outline":
					return "button-outline";
				default:
					throw new Error(`Invalid button type value: '${this.mType}'`);
			}
		} else return null;
	}
}
</script>
