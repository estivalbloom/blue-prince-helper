import { House, Room, RoomData } from './structures'

export type AtelierRoom = {
	data: RoomData
	paintings: string
	mora: string
	rotation: number
}

export function getAtelierData(): AtelierRoom[] {
	return [
		{
			data: RoomData.archive,
			paintings: 'Trot/Rot',
			mora: 'THROUGH',
			rotation: 0,
		},

		{
			data: RoomData.chapel,
			paintings: 'Three/Tree',
			mora: 'LANTERN',
			rotation: 3,
		},

		{
			data: RoomData.vestibule,
			paintings: 'Wine/Win',
			mora: 'LIGHT',
			rotation: 0,
		},

		{
			data: RoomData.coatCheck,
			paintings: 'Spear/Pear',
			mora: 'IN',
			rotation: 3,
		},

		{
			data: RoomData.aquarium,
			paintings: 'Leash/Lash',
			mora: 'SHADOWS',
			rotation: 2,
		},

		{
			data: RoomData.foyer,
			paintings: 'Novel/Noel',
			mora: 'CAST',
			rotation: 1,
		},

		{
			data: RoomData.pool,
			paintings: 'Year/Ear',
			mora: 'A',
			rotation: 2,
		},

		{
			data: RoomData.servantsQuarters,
			paintings: 'Bait/Bat',
			mora: 'TINT',
			rotation: 0,
		},

		{
			data: RoomData.pumpRoom,
			paintings: 'Pin/Pi',
			mora: 'OF',
			rotation: 2,
		},

		{
			data: RoomData.furnace,
			paintings: 'Globe/Lobe',
			mora: 'TRUTH',
			rotation: 1,
		},

		{
			data: RoomData.gymnasium,
			paintings: 'Place/Lace',
			mora: 'TO',
			rotation: 2,
		},

		{
			data: RoomData.laundryRoom,
			paintings: 'Pliers/Piers',
			mora: 'FIND',
			rotation: 3,
		},

		{
			data: RoomData.guestBedroom,
			paintings: 'Steam/Stem',
			mora: 'OUR',
			rotation: 0,
		},

		{
			data: RoomData.conferenceRoom,
			paintings: 'Barn/Bar',
			mora: 'PATH',
			rotation: 0,
		},

		{
			data: RoomData.den,
			paintings: 'Spike/Pike',
			mora: 'A',
			rotation: 0,
		},

		{
			data: RoomData.westWingHall,
			paintings: 'Farm/Arm',
			mora: 'HUE',
			rotation: 3,
		},

		{
			data: RoomData.passageway,
			paintings: 'Open/Pen',
			mora: 'OF',
			rotation: 0,
		},

		{
			data: RoomData.darkRoom,
			paintings: 'Brook/Book',
			mora: 'WISDOM',
			rotation: 2,
		},

		{
			data: RoomData.closet,
			paintings: 'Pig/Pi',
			mora: 'TO',
			rotation: 2,
		},

		{
			data: RoomData.parlorRoom,
			paintings: 'Rate/Rat',
			mora: 'TURN',
			rotation: 3,
		},

		{
			data: RoomData.billiardRoom,
			paintings: 'Bone/One',
			mora: 'US',
			rotation: 3,
		},

		{
			data: RoomData.trophyRoom,
			paintings: 'Launch/Lunch',
			mora: 'RIGHT',
			rotation: 0,
		},

		{
			data: RoomData.foundation,
			paintings: 'Stream/Steam',
			mora: 'A',
			rotation: 0,
		},

		{
			data: RoomData.ballroom,
			paintings: 'Boar/Bar',
			mora: 'SHADE',
			rotation: 1,
		},

		{
			data: RoomData.spareRoom,
			paintings: 'Snail/Sail',
			mora: 'OF',
			rotation: 1,
		},

		{
			data: RoomData.nook,
			paintings: 'Crook/Rook',
			mora: 'RAIN',
			rotation: 1,
		},

		{
			data: RoomData.kitchen,
			paintings: 'Pier/Pie',
			mora: 'TO',
			rotation: 0,
		},

		{
			data: RoomData.corridor,
			paintings: 'Spear/Spar',
			mora: 'PASS',
			rotation: 1,
		},

		{
			data: RoomData.musicRoom,
			paintings: 'Post/Pot',
			mora: 'THE',
			rotation: 0,
		},

		{
			data: RoomData.lavatory,
			paintings: 'Steed/Seed',
			mora: 'LIGHT',
			rotation: 0,
		},

		{
			data: RoomData.solarium,
			paintings: 'Tarot/Trot',
			mora: 'THROUGH',
			rotation: 1,
		},

		{
			data: RoomData.hallway,
			paintings: 'Lamb/Lab',
			mora: 'LANTERN',
			rotation: 0,
		},

		{
			data: RoomData.diningRoom,
			paintings: 'Orange/Range',
			mora: 'LIGHT',
			rotation: 2,
		},

		{
			data: RoomData.observatory,
			paintings: 'Lance/Lace',
			mora: 'IN',
			rotation: 2,
		},

		{
			data: RoomData.eastWingHall,
			paintings: 'Ear/Gear',
			mora: 'SHADOWS',
			rotation: 1,
		},

		{
			data: RoomData.bedroom,
			paintings: 'Harbor/Arbor',
			mora: 'PAST',
			rotation: 2,
		},

		{
			data: RoomData.drawingRoom,
			paintings: 'Pie/Pi',
			mora: 'WE',
			rotation: 3,
		},

		{
			data: RoomData.gallery,
			paintings: 'Weight/Eight',
			mora: 'SEEK',
			rotation: 0,
		},

		{
			data: RoomData.library,
			paintings: 'Beads/Beds',
			mora: "WHAT'S",
			rotation: 2,
		},

		{
			data: RoomData.cloister,
			paintings: 'Comb/Cob',
			mora: 'LEFT',
			rotation: 0,
		},

		{
			data: RoomData.conservatory,
			paintings: 'Bear/Ear',
			mora: 'OF',
			rotation: 2,
		},

		{
			data: RoomData.maidsChamber,
			paintings: 'Clog/Cog',
			mora: 'THE',
			rotation: 1,
		},

		{
			data: RoomData.entranceHall,
			paintings: 'Cane/Can',
			mora: 'LIES',
			rotation: 2,
		},

		{
			data: RoomData.pantry,
			paintings: 'Sharp/Harp',
			mora: 'WE',
			rotation: 2,
		},

		{
			data: RoomData.storageRoom,
			paintings: 'Thorns/Horns',
			mora: 'CAST',
			rotation: 3,
		},
	]
}

const ROOM_LIST = getAtelierData().map(
	(atelierRoom) => new Room(atelierRoom.data, atelierRoom.rotation),
)

export const TEST_DRAFT = new House(ROOM_LIST)
