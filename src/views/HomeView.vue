<template>
	<div class="grid-container">
		<div
			class="room-container"
			draggable="true"
			v-for="(room, index) in house.rooms"
			@dragstart="(e) => handleStartDrag(e, index)"
			@dragover="(e) => handleDragOver(e, index)"
			@drop="(e) => handleDrop(e, index)"
			@wheel="(e) => handleScroll(e, index)"
		>
			<RoomDisplay :room="room"></RoomDisplay>
		</div>
	</div>
</template>

<script setup lang="ts">
import RoomDisplay from '@/components/RoomDisplay.vue'
import { TEST_DRAFT } from '@/game/atelier'
import { reactive } from 'vue'

let house = reactive(TEST_DRAFT)
let lastIndex = -1

function swap(index: number, otherIndex: number) {
	const temp = house.rooms[index]
	house.rooms[index] = house.rooms[otherIndex]
	house.rooms[otherIndex] = temp
}

function handleStartDrag(event: DragEvent, index: number) {
	if (event.dataTransfer && event.target) {
		event.dataTransfer.clearData()
		event.dataTransfer.setData('text/plain', `${index}`)
		lastIndex = index
	}
}

function handleDragOver(event: DragEvent, index: number) {
	event.preventDefault()
	if (event.dataTransfer && event.target) {
		const otherIndex = Number.parseInt(event.dataTransfer.getData('text/plain'))
		swap(lastIndex, otherIndex)
		swap(index, otherIndex)
		lastIndex = index
	}
}

function handleDrop(event: DragEvent, index: number) {
	event.preventDefault()
}

function handleScroll(event: WheelEvent, index: number) {
	house.rooms[index].rotate(Math.sign(event.deltaY))
}
</script>

<style scoped>
.grid-container {
	display: grid;
	grid-template-columns: auto auto auto auto auto;
	column-gap: 4px;
	row-gap: 4px;
}

.room-container {
	height: 96px;
	width: 96px;
}
</style>
