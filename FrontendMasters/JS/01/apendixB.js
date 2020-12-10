const dayStart = '07:30';
const dayEnd = '17:45';

let hourStart = Number(dayStart.slice(0, 2));
let minuteStart = Number(dayStart.slice(3, 5));

let hourEnd = Number(dayEnd.slice(0, 2));
let minuteEnd = Number(dayEnd.slice(3, 5));

function scheduleMeeting(startTime, durationMinutes) {
	let hourScheduleStarts = Number(startTime.slice(0, 2));
	let minScheduleStarts = Number(startTime.slice(3, 5));
	let durationMin = durationMinutes;

	if (isNaN(hourScheduleStarts)) {
		hourScheduleStarts = Number(startTime.slice(0, 1));
		minScheduleStarts = Number(startTime.slice(2, 4));
	}

	let minutes = minScheduleStarts + durationMin;
	let finalHour = hourScheduleStarts;
	let finalMinutes;

	if (minutes >= 60) {
		finalHour = finalHour + 1;
		finalMinutes = minutes - 60;
	} else {
		finalMinutes = minutes;
	}



	if (((hourScheduleStarts >= hourStart && minScheduleStarts >= minuteStart) ||(hourScheduleStarts > 7))&&((finalHour <= hourEnd &&
		finalMinutes <= minuteEnd )||(finalHour < 16 ))) {
		console.log('true');
		return
	} else {
		console.log(
			'false',
			hourScheduleStarts,
			minScheduleStarts,
			finalHour,
			finalMinutes,
			hourEnd,
			minuteEnd
		);
	}
}

scheduleMeeting('7:00', 15); // false
scheduleMeeting('07:15', 30); // false
scheduleMeeting('7:30', 30); // true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('17:00', 45); // true
scheduleMeeting('17:30', 30); // false
scheduleMeeting('18:00', 15); // false
