<template>
	<div
		class="display"
		:style="{ background: color }"
	>
		<div class="door-grid">
			<div class="top-left"></div>
			<div :class="{ top: !room.doors.north }"></div>
			<div class="top-right"></div>
			<div :class="{ left: !room.doors.west }"></div>
			<div></div>
			<div :class="{ right: !room.doors.east }"></div>
			<div class="bottom-left"></div>
			<div :class="{ bottom: !room.doors.south }"></div>
			<div class="bottom-right"></div>
		</div>
		<div :class="{ overlay: true, hidden: !overlay }">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Room } from '@/game/structures'
import { computed, onMounted, useTemplateRef } from 'vue'

const props = defineProps<{
	room: Room
	overlay: boolean
}>()

const color = computed(() => {
	return `${props.room.data.color.at(0)}`
})
</script>

<style scoped>
.display {
	--border-style: 12px solid black;

	position: relative;
	height: 100%;
	width: 100%;
}

.overlay {
	position: absolute;
	background: #00000040;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
}

.door-grid {
	display: grid;
	grid-template-columns: auto auto auto;
}

.door-grid div {
	height: 32px;
	width: 32px;
}

.top-left {
	border-left: var(--border-style);
	border-top: var(--border-style);
}

.top-right {
	border-right: var(--border-style);
	border-top: var(--border-style);
}

.bottom-left {
	border-left: var(--border-style);
	border-bottom: var(--border-style);
}

.bottom-right {
	border-right: var(--border-style);
	border-bottom: var(--border-style);
}

.top {
	border-top: var(--border-style);
}

.right {
	border-right: var(--border-style);
}

.left {
	border-left: var(--border-style);
}

.bottom {
	border-bottom: var(--border-style);
}
</style>
