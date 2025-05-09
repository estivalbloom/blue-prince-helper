import { House, Room, RoomData } from './structures'

export type AtelierRoom = {
	data: RoomData
	paintings: string
	letter: string
	mora: string
	rotation: number
	onBoard?: boolean
	isEnd?: boolean
}

export function getAtelierData(): AtelierRoom[] {
	return [
		{
			data: RoomData.archive,
			paintings: 'Trot/Rot',
			letter: 'T',
			mora: 'THROUGH',
			rotation: 0,
		},

		{
			data: RoomData.chapel,
			paintings: 'Three/Tree',
			letter: 'H',
			mora: 'LANTERN',
			rotation: 3,
		},

		{
			data: RoomData.vestibule,
			paintings: 'Wine/Win',
			letter: 'E',
			mora: 'LIGHT',
			rotation: 0,
			isEnd: true,
		},

		{
			data: RoomData.coatCheck,
			paintings: 'Spear/Pear',
			letter: 'S',
			mora: 'IN',
			rotation: 3,
		},

		{
			data: RoomData.aquarium,
			paintings: 'Leash/Lash',
			letter: 'E',
			mora: 'SHADOWS',
			rotation: 2,
		},

		{
			data: RoomData.foyer,
			paintings: '?',
			letter: '?',
			mora: 'CAST',
			rotation: 1,
		},

		{
			data: RoomData.pool,
			paintings: 'Year/Ear',
			letter: 'Y',
			mora: 'A',
			rotation: 2,
			onBoard: true,
		},

		{
			data: RoomData.servantsQuarters,
			paintings: 'Bait/Bat',
			letter: 'I',
			mora: 'TINT',
			rotation: 0,
		},

		{
			data: RoomData.pumpRoom,
			paintings: 'Pin/Pi',
			letter: 'N',
			mora: 'OF',
			rotation: 2,
		},

		{
			data: RoomData.furnace,
			paintings: 'Globe/Lobe',
			letter: 'G',
			mora: 'TRUTH',
			rotation: 1,
		},

		{
			data: RoomData.gymnasium,
			paintings: 'Place/Lace',
			letter: 'P',
			mora: 'TO',
			rotation: 2,
		},

		{
			data: RoomData.laundryRoom,
			paintings: 'Pliers/Piers',
			letter: 'L',
			mora: 'FIND',
			rotation: 3,
		},

		{
			data: RoomData.guestBedroom,
			paintings: 'Steam/Stem',
			letter: 'A',
			mora: 'OUR',
			rotation: 0,
		},

		{
			data: RoomData.conferenceRoom,
			paintings: 'Barn/Bar',
			letter: 'N',
			mora: 'PATH',
			rotation: 0,
		},

		{
			data: RoomData.den,
			paintings: 'Spike/Pike',
			letter: 'S',
			mora: 'A',
			rotation: 0,
		},

		{
			data: RoomData.westWingHall,
			paintings: 'Farm/Arm',
			letter: 'F',
			mora: 'HUE',
			rotation: 3,
		},

		{
			data: RoomData.passageway,
			paintings: 'Open/Pen',
			letter: 'O',
			mora: 'OF',
			rotation: 0,
		},

		{
			data: RoomData.darkRoom,
			paintings: 'Brook/Book',
			letter: 'R',
			mora: 'WISDOM',
			rotation: 2,
		},

		{
			data: RoomData.closet,
			paintings: 'Pig/Pi',
			letter: 'G',
			mora: 'TO',
			rotation: 2,
		},

		{
			data: RoomData.parlorRoom,
			paintings: 'Rate/Rat',
			letter: 'E',
			mora: 'TURN',
			rotation: 3,
		},

		{
			data: RoomData.billiardRoom,
			paintings: 'Bone/One',
			letter: 'B',
			mora: 'US',
			rotation: 3,
		},

		{
			data: RoomData.trophyRoom,
			paintings: 'Launch/Lunch',
			letter: 'A',
			mora: 'RIGHT',
			rotation: 0,
		},

		{
			data: RoomData.foundation,
			paintings: 'Stream/Steam',
			letter: 'R',
			mora: 'A',
			rotation: 0,
			onBoard: true,
		},

		{
			data: RoomData.ballroom,
			paintings: 'Boar/Bar',
			letter: 'O',
			mora: 'SHADE',
			rotation: 1,
			onBoard: true,
		},

		{
			data: RoomData.spareRoom,
			paintings: 'Snail/Sail',
			letter: 'N',
			mora: 'OF',
			rotation: 1,
		},

		{
			data: RoomData.nook,
			paintings: 'Crook/Rook',
			letter: 'C',
			mora: 'RAIN',
			rotation: 1,
		},

		{
			data: RoomData.kitchen,
			paintings: 'Pier/Pie',
			letter: 'R',
			mora: 'TO',
			rotation: 0,
			onBoard: true,
		},

		{
			data: RoomData.corridor,
			paintings: 'Spear/Spar',
			letter: 'E',
			mora: 'PASS',
			rotation: 1,
			onBoard: true,
		},

		{
			data: RoomData.musicRoom,
			paintings: 'Post/Pot',
			letter: 'S',
			mora: 'THE',
			rotation: 0,
			onBoard: true,
		},

		{
			data: RoomData.lavatory,
			paintings: 'Steed/Seed',
			letter: 'T',
			mora: 'LIGHT',
			rotation: 0,
		},

		{
			data: RoomData.solarium,
			paintings: 'Tarot/Trot',
			letter: 'A',
			mora: 'THROUGH',
			rotation: 1,
			onBoard: true,
		},

		{
			data: RoomData.hallway,
			paintings: 'Lamb/Lab',
			letter: 'M',
			mora: 'LANTERN',
			rotation: 0,
		},

		{
			data: RoomData.diningRoom,
			paintings: 'Orange/Range',
			letter: 'O',
			mora: 'LIGHT',
			rotation: 2,
		},

		{
			data: RoomData.observatory,
			paintings: 'Lance/Lace',
			letter: 'N',
			mora: 'IN',
			rotation: 2,
		},

		{
			data: RoomData.eastWingHall,
			paintings: 'Ear/Gear',
			letter: 'G',
			mora: 'SHADOWS',
			rotation: 1,
		},

		{
			data: RoomData.bedroom,
			paintings: 'Harbor/Arbor',
			letter: 'H',
			mora: 'PAST',
			rotation: 2,
		},

		{
			data: RoomData.drawingRoom,
			paintings: 'Pie/Pi',
			letter: 'E',
			mora: 'WE',
			rotation: 3,
		},

		{
			data: RoomData.gallery,
			paintings: 'Weight/Eight',
			letter: 'W',
			mora: 'SEEK',
			rotation: 0,
			onBoard: true,
		},

		{
			data: RoomData.library,
			paintings: 'Beads/Beds',
			letter: 'A',
			mora: "WHAT'S",
			rotation: 2,
		},

		{
			data: RoomData.cloister,
			paintings: 'Comb/Cob',
			letter: 'M',
			mora: 'LEFT',
			rotation: 0,
		},

		{
			data: RoomData.conservatory,
			paintings: 'Bear/Ear',
			letter: 'B',
			mora: 'OF',
			rotation: 2,
		},

		{
			data: RoomData.maidsChamber,
			paintings: 'Clog/Cog',
			letter: 'L',
			mora: 'THE',
			rotation: 1,
		},

		{
			data: RoomData.entranceHall,
			paintings: 'Cane/Can',
			letter: 'E',
			mora: 'LIES',
			rotation: 2,
			isEnd: true,
		},

		{
			data: RoomData.pantry,
			paintings: 'Sharp/Harp',
			letter: 'S',
			mora: 'WE',
			rotation: 2,
		},

		{
			data: RoomData.storageRoom,
			paintings: 'Thorns/Horns',
			letter: 'T',
			mora: 'CAST',
			rotation: 3,
		},
	]
}

const ROOM_LIST = getAtelierData().map(
	(atelierRoom) => new Room(atelierRoom.data, atelierRoom.rotation),
)

export const TEST_DRAFT = new House(ROOM_LIST)
