const newDevelopment = [
	{
		name: 'Miss Scarlet',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: true },
			{ 'dining room': true },
			{ 'billiard room': false },
			{ library: true },
		],
	},
	{
		name: 'Reverend Green',
		present: true,
		rooms: [
			{ kitchen: true },
			{ ballroom: false },
			{ conservatory: false },
			{ 'dining room': false },
			{ 'billiard room': true },
			{ library: false },
		],
	},
	{
		name: 'Colonel Mustard',
		present: true,
		rooms: [
			{ kitchen: false },
			{ ballroom: false },
			{ conservatory: true },
			{ 'dining room': false },
			{ 'billiard room': true },
			{ library: false },
		],
	},
];

var notInRoom = (suspect, memo) => {
	const emptyRooms = reduce(
		suspect.rooms,
		(room, memo) => {
			if (room === false) memo.push(room);
			return memo;
		},
		[]
	);
	return emptyRooms;
};

reduce(newDevelopment, notInRoom, []);

notInRooms = _.map(newDevelopmrnt, notInRoom)
