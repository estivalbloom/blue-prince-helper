<template>
	<div class="page-container">
		<div class="grid-container">
			<div
				class="room-container"
				draggable="true"
				v-for="(roomData, index) in data.rooms"
				@dragstart="(e) => handleStartDrag(e, index)"
				@dragover="(e) => handleDragOver(e, index)"
				@drop="(e) => handleDrop(e, index)"
				@wheel="(e) => handleScroll(e, index)"
			>
				<RoomDisplay
					:room="roomData.room"
					:overlay="showOverlay"
				>
					<div class="overlay">
						<div :class="{ hidden: !showNames }">
							{{ roomData.data.data.name }}
						</div>
						<div :class="{ hidden: !showMora }">
							{{ roomData.data.mora }}
						</div>
					</div>
				</RoomDisplay>
			</div>
		</div>
		<div class="control-panel">
			<h1>Atelier Helper</h1>
			<h2>Instructions:</h2>
			<div class="sub-panel">
				<p>
					A tool for rearranging the Atelier rooms to see what phrases you get from the
					Mora Jai boxes. Drag and drop rooms to rearrange them. Mouse over a room and
					scroll to rotate.
				</p>
			</div>
			<h2>Mora Jai result:</h2>
			<div class="sub-panel">
				{{ moraJai }}
			</div>
			<h2>Options:</h2>
			<div class="sub-panel option-panel">
				<div>
					<input
						id="check-overlay"
						type="checkbox"
						v-model="showOverlay"
					/>
					<label for="check-overlay">Show overlay</label>
				</div>
				<div>
					<input
						id="check-name"
						type="checkbox"
						v-model="showNames"
					/>
					<label for="check-name">Show name on overlay</label>
				</div>
				<div>
					<input
						id="check-mora-jai"
						type="checkbox"
						v-model="showMora"
					/>
					<label for="check-mora-jai">Show Mora Jai text on overlay</label>
				</div>
				<div>
					<input
						id="button-reset"
						type="button"
						@click="reset"
						value="Reset layout"
					/>
				</div>
				<div class="data-button-panel">
					<div>Save/Load layout:</div>
					<input
						id="button-export"
						type="button"
						value="Export"
						@click="exportData"
					/>
					<input
						id="button-import"
						type="button"
						value="Import"
						@click="importData"
					/>
				</div>
				<textarea ref="text-data"></textarea>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import RoomDisplay from '@/components/RoomDisplay.vue'
import { getAtelierData } from '@/game/atelier'
import { Room } from '@/game/structures'
import { computed, reactive, ref, useTemplateRef } from 'vue'

function init() {
	return getAtelierData().map((data) => {
		return {
			room: new Room(data.data, data.rotation),
			data,
		}
	})
}

const textArea = useTemplateRef('text-data')

let data = reactive({ rooms: init() })

const showOverlay = ref(true)
const showNames = ref(true)
const showMora = ref(true)

let lastIndex = -1
function swap(index: number, otherIndex: number) {
	const temp = data.rooms[index]
	data.rooms[index] = data.rooms[otherIndex]
	data.rooms[otherIndex] = temp
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

let id: number | undefined
function handleScroll(event: WheelEvent, index: number) {
	if (id) {
		clearTimeout(id)
	}
	id = setTimeout(() => {
		data.rooms[index].room.rotate(Math.sign(event.deltaY))
	}, 35)
}

function reset() {
	data.rooms = init()
}

const moraJai = computed(() => {
	return data.rooms.map((r) => r.data.mora).join(' ')
})

type SaveData = {
	n: string // Name
	r: number // Rotation
}

function exportData() {
	if (textArea.value) {
		textArea.value.value = btoa(
			JSON.stringify(
				data.rooms.map((e): SaveData => {
					return {
						n: e.room.data.name,
						r: e.room.rotation,
					}
				}),
			),
		)
	}
}

function importData() {
	if (textArea.value) {
		const ateRoomList = getAtelierData()

		try {
			const saveData: SaveData[] = JSON.parse(atob(textArea.value.value))
			data.rooms = saveData.map((d) => {
				const ateRoom = ateRoomList.find((r) => r.data.name === d.n)
				if (!ateRoom) {
					throw new Error('Need rinsed vote')
				}
				return {
					room: new Room(ateRoom.data, d.r),
					data: ateRoom,
				}
			})
		} catch (e) {
			alert(`Invalid save data: ${e}`)
		}
	}
}
</script>

<style scoped>
.page-container {
	display: flex;
	gap: 12px;
}

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

.overlay {
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 16px;
	font-size: 12px;
	justify-content: space-between;
	height: 100%;
	color: white;
}

.control-panel {
	display: flex;
	flex-direction: column;
	width: 496px;
	background-color: #ffffff60;
	padding: 12px;
	border-radius: 4px;
	gap: 12px;
}

.sub-panel {
	background-color: #ffffff60;
	padding: 8px;
	border-radius: 4px;
}

.option-panel {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

input[type='checkbox'] {
	margin-right: 4px;
}

.data-button-panel {
	display: flex;
	gap: 4px;
}

textarea {
	resize: none;
	height: 128px;
}
</style>
