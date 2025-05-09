import { mod } from '@/util'

/**
 * Columns start at 1 for the west wing, ending at 5 for the east wing.
 */
export enum Column {
	ONE,
	TWO,
	THREE,
	FOUR,
	FIVE,
}

export enum Rank {
	ONE,
	TWO,
	THREE,
	FOUR,
	FIVE,
	SIX,
	SEVEN,
	EIGHT,
	NINE,
}

export type Color = 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'orange' | 'black'

export enum RoomShape {
	DEAD_END,
	CORNER,
	LINE,
	FORK,
	CROSS,
	NONE,
}

export class DoorList {
	north: boolean
	east: boolean
	south: boolean
	west: boolean

	constructor(north: boolean, east: boolean, south: boolean, west: boolean) {
		this.north = north
		this.east = east
		this.south = south
		this.west = west
	}

	toArray() {
		return [this.north, this.east, this.south, this.west]
	}

	static fromArray(arr: Array<boolean>) {
		return new DoorList(arr[0], arr[1], arr[2], arr[3])
	}

	/**
	 * Rotates the doors a number of clockwise turns
	 * @param rotation
	 * @returns
	 */
	rotated(rotation: number) {
		const r = this.toArray().map((_el, idx, doors) => doors[mod(idx - rotation, 4)])
		return DoorList.fromArray(r)
	}

	/**
	 * The default rotation for each room type is assumed to be:
	 * - Dead Ends: Door facing southwards.
	 * - Corners: 	┓
	 * - Lines: 	┃
	 * - Forks: 	┳
	 *
	 * @param shape
	 * @returns The door list for the given shape.
	 */
	static fromShape(shape: RoomShape) {
		switch (shape) {
			case RoomShape.DEAD_END:
				return new DoorList(false, false, true, false)
			case RoomShape.CORNER:
				return new DoorList(false, false, true, true)
			case RoomShape.LINE:
				return new DoorList(true, false, true, false)
			case RoomShape.FORK:
				return new DoorList(false, true, true, true)
			case RoomShape.CROSS:
				return new DoorList(true, true, true, true)
			case RoomShape.NONE:
				return new DoorList(false, false, false, false)
		}
	}
}

function posToIdx(column: Column, rank: Rank) {
	return rank * 5 + column
}

export class House {
	rooms: Array<Room>

	constructor(rooms?: Array<Room>) {
		this.rooms = rooms ?? new Array<Room>(45)
	}

	roomAt(column: Column, rank: Rank) {
		const idx = posToIdx(column, rank)
		return this.rooms[idx]
	}

	setRoom(room: Room, column: Column, rank: Rank) {
		const idx = posToIdx(column, rank)
		this.rooms[idx] = room
	}
}

export type RoomRestrictor = (column: Column, rank: Rank, rotation: number, house: House) => boolean

export class RoomData {
	name: string
	color: Color[]
	shape: RoomShape
	placementRules?: RoomRestrictor

	constructor() {
		this.name = 'NONE'
		this.color = []
		this.shape = RoomShape.NONE
	}

	static get archive(): RoomData {
		return {
			name: 'Archive',
			color: ['red'],
			shape: RoomShape.CROSS,
		}
	}

	static get chapel(): RoomData {
		return {
			name: 'Chapel',
			color: ['red'],
			shape: RoomShape.FORK,
		}
	}

	static get vestibule(): RoomData {
		return {
			name: 'Vestibule',
			color: ['orange'],
			shape: RoomShape.CROSS,
		}
	}

	static get coatCheck(): RoomData {
		return {
			name: 'Coat Check',
			color: ['blue'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get aquarium(): RoomData {
		return {
			name: 'Aquarium',
			color: ['blue', 'purple', 'green', 'red', 'yellow', 'orange', 'black'],
			shape: RoomShape.FORK,
		}
	}

	static get foyer(): RoomData {
		return {
			name: 'Foyer',
			color: ['orange'],
			shape: RoomShape.LINE,
		}
	}

	static get pool(): RoomData {
		return {
			name: 'Pool',
			color: ['blue'],
			shape: RoomShape.FORK,
		}
	}

	static get servantsQuarters(): RoomData {
		return {
			name: "Servant's Quarters",
			color: ['purple'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get pumpRoom(): RoomData {
		return {
			name: 'Pump Room',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get furnace(): RoomData {
		return {
			name: 'Furnace',
			color: ['red'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get gymnasium(): RoomData {
		return {
			name: 'Gymnasium',
			color: ['red'],
			shape: RoomShape.FORK,
		}
	}

	static get laundryRoom(): RoomData {
		return {
			name: 'Laundry Room',
			color: ['yellow'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get guestBedroom(): RoomData {
		return {
			name: 'Guest Bedroom',
			color: ['purple'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get conferenceRoom(): RoomData {
		return {
			name: 'Conference Room',
			color: ['blue'],
			shape: RoomShape.FORK,
		}
	}

	static get den(): RoomData {
		return {
			name: 'Den',
			color: ['blue'],
			shape: RoomShape.FORK,
		}
	}

	static get westWingHall(): RoomData {
		return {
			name: 'West Wing Hall',
			color: ['orange'],
			shape: RoomShape.FORK,
			placementRules: (column) => column === Column.ONE,
		}
	}

	static get passageway(): RoomData {
		return {
			name: 'Passageway',
			color: ['orange'],
			shape: RoomShape.CROSS,
		}
	}

	static get darkRoom(): RoomData {
		return {
			name: 'Dark Room',
			color: ['red'],
			shape: RoomShape.FORK,
		}
	}

	static get closet(): RoomData {
		return {
			name: 'Closet',
			color: ['blue'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get parlorRoom(): RoomData {
		return {
			name: 'Parlor Room',
			color: ['blue'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get billiardRoom(): RoomData {
		return {
			name: 'Billiard Room',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get trophyRoom(): RoomData {
		return {
			name: 'Trophy Room',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get foundation(): RoomData {
		return {
			name: 'Foundation',
			color: ['blue'],
			shape: RoomShape.FORK,
		}
	}

	static get ballroom(): RoomData {
		return {
			name: 'Ballroom',
			color: ['blue'],
			shape: RoomShape.LINE,
		}
	}

	static get spareRoom(): RoomData {
		return {
			name: 'Spare Room',
			color: ['blue'],
			shape: RoomShape.LINE,
		}
	}

	static get nook(): RoomData {
		return {
			name: 'Nook',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get kitchen(): RoomData {
		return {
			name: 'Kitchen',
			color: ['yellow'],
			shape: RoomShape.CORNER,
		}
	}

	static get corridor(): RoomData {
		return {
			name: 'Corridor',
			color: ['orange'],
			shape: RoomShape.LINE,
		}
	}

	static get musicRoom(): RoomData {
		return {
			name: 'Music Room',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get lavatory(): RoomData {
		return {
			name: 'Lavatory',
			color: ['red'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get solarium(): RoomData {
		return {
			name: 'Solarium',
			color: ['green'],
			shape: RoomShape.DEAD_END,
		}
	}

	static get hallway(): RoomData {
		return {
			name: 'Hallway',
			color: ['orange'],
			shape: RoomShape.FORK,
		}
	}

	static get diningRoom(): RoomData {
		return {
			name: 'Dining Room',
			color: ['blue'],
			shape: RoomShape.FORK,
		}
	}

	static get observatory(): RoomData {
		return {
			name: 'Observatory',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get eastWingHall(): RoomData {
		return {
			name: 'East Wing Hall',
			color: ['orange'],
			shape: RoomShape.FORK,
			placementRules: (column: Column) => column === Column.FIVE,
		}
	}

	static get bedroom(): RoomData {
		return {
			name: 'Bedroom',
			color: ['purple'],
			shape: RoomShape.CORNER,
		}
	}

	static get drawingRoom(): RoomData {
		return {
			name: 'Drawing Room',
			color: ['blue'],
			shape: RoomShape.FORK,
		}
	}

	static get gallery(): RoomData {
		return {
			name: 'Gallery',
			color: ['blue'],
			shape: RoomShape.LINE,
		}
	}

	static get library(): RoomData {
		return {
			name: 'Library',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get cloister(): RoomData {
		return {
			name: 'Cloister',
			color: ['green'],
			shape: RoomShape.CROSS,
		}
	}

	static get conservatory(): RoomData {
		return {
			name: 'Conservatory',
			color: ['green'],
			shape: RoomShape.CORNER,
			placementRules: (column: Column, rank: Rank) => {
				return (
					(column === Column.FIVE && rank === Rank.NINE) ||
					(column === Column.FIVE && rank === Rank.ONE) ||
					(column === Column.ONE && rank === Rank.ONE) ||
					(column === Column.ONE && rank === Rank.NINE)
				)
			},
		}
	}

	static get maidsChamber(): RoomData {
		return {
			name: "Maid's Chamber",
			color: ['purple', 'red'],
			shape: RoomShape.CORNER,
		}
	}

	static get entranceHall(): RoomData {
		return {
			name: 'Entrance Hall',
			color: ['blue'],
			shape: RoomShape.FORK,
		}
	}

	static get pantry(): RoomData {
		return {
			name: 'Pantry',
			color: ['blue'],
			shape: RoomShape.CORNER,
		}
	}

	static get storageRoom(): RoomData {
		return {
			name: 'Storage Room',
			color: ['blue'],
			shape: RoomShape.DEAD_END,
		}
	}
}

export class Room {
	data: RoomData
	rotation: number

	constructor(data?: RoomData, rotation: number = 0) {
		this.data = data ?? new RoomData()
		this.rotation = rotation
	}

	get doors() {
		return DoorList.fromShape(this.data.shape).rotated(this.rotation)
	}

	rotate(amount: number) {
		this.rotation += amount
	}
}

export function isLegalPlacement(house: House, room: Room, column: Column, rank: Rank) {
	const doors = room.doors
	if (
		(doors.north && rank === Rank.NINE) ||
		(doors.east && column === Column.FIVE) ||
		(doors.south && rank === Rank.ONE) ||
		(doors.west && column === Column.ONE)
	) {
		return false
	}

	if (room.data.placementRules) {
		return room.data.placementRules(column, rank, room.rotation, house)
	}

	return true
}
