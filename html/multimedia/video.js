function getVideo() {
	return document.getElementById('video');
}

//code for play, pause, stop and volume, mute and full screen buttons

function play() {
	var video = getVideo();
	video.play();
}

function pause() {
	var video = getVideo();
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function stop() {
	var video = getVideo();
	// video.pause();
	// video.currentTime = 0;

	var objVideo = getStorage('video');
	objVideo.desc.push('The video has been aborted');
	objVideo.time.push(video.currentTime);
	objVideo.volume.push(video.volume);
	setStorage('video', objVideo);

	video.load();
}

function volume() {
	var volume = document.getElementById('volume').value;
	if (volume === '100') {
		volume = 1;
	} else {
		volume = parseFloat('0.' + volume).toFixed(1);
	}
	var video = getVideo();
	video.volume = volume;
}

function muted() {
	var video = getVideo();
	var mut = document.getElementById('muted');
	if (video.muted) {
		video.muted = false;
		mut.style.color = 'black';
	} else {
		video.muted = true;
		mut.style.color = 'red';
	}
}

function full() {
	var video = getVideo();
	video.webkitEnterFullScreen();
}

// events from the users

getVideo().oncanplay = function () {
	var list = getStorage('listVideo');
	setTable(list);
};

getVideo().onplay = function () {
	console.log('The video has been started.');
	if (getVideo().currentTime === 0) {
		setStorage('video', {
			desc: ['The video has been started.'],
			time: [0],
			volume: [getVideo().volume],
		});
	} else {
		var objVideo = getStorage('video');
		objVideo.desc.push('The video has been started');
		objVideo.time.push(getVideo().currentTime);
		objVideo.volume.push(getVideo().volume);
		setStorage('video', objVideo);
	}
};

getVideo().onpause = function () {
	console.log('The video has been paused.');

	var objVideo = getStorage('video');
	objVideo.desc.push('The video has been pauseed');
	objVideo.time.push(getVideo().currentTime);
	objVideo.volume.push(getVideo().volume);
	setStorage('video', objVideo);
};

getVideo().onabort = function () {
	console.log('The video load aborted.');

	var objVideo = getStorage('video');

	setStorage('video', {});

	var listVideo = getStorage('listVideo');

	if (!listVideo.length) {
		listVideo = [];
	}
	listVideo.push(objVideo);
	setStorage('listVideo', listVideo);
};

getVideo().onvolumechange = function () {
	console.log('The volume has been changed.');

	var objVideo = getStorage('video');
	objVideo.desc.push('The volume has been changed');
	objVideo.time.push(getVideo().currentTime);
	objVideo.volume.push(getVideo().volume);
	setStorage('video', objVideo);
};

// traking users actions

function setStorage(id, list) {
	localStorage.setItem(id, JSON.stringify(list));
}

function getStorage(id) {
	var storage = localStorage.getItem(id);
	if (storage) {
		return JSON.parse(storage);
	} else {
		return {};
	}
}

// adding table content

function setTable(list) {
	var table =
		'<thead><tr><td>...</td><td>Desc</td><td>Time</td><td>Volume</td></tr></thead><tbody>';
	for (var k in list) {
		table += '<tr><td>' + k + '</td>';
		var desc = '';
		var time = '';
		var volume = '';
		for (var j in list[k].desc) {
			desc += '<p>' + list[k].desc[j] + '</p>';
			time += '<p>' + formatTime(list[k].time[j]) + '</p>';
			volume += '<p>' + list[k].volume[j] + '</p>';
		}
		table += '<td>' + desc + '</td>';
		table += '<td>' + time + '</td>';
		table += '<td>' + volume + '</td>';
		table += '</tr></tbody>';
	}

	document.getElementById('tableList').innerHTML = table;
}

// function to fomat time

function formatTime(time) {
	var second = parseInt(time % 60);
	var minAux = time / 60;
	var minute = parseInt(minAux % 60);
	var hour = parseInt(minAux / 60);

	if (second < 10) {
		second = '0' + second;
	}
	if (minute < 10) {
		minute = '0' + minute;
	}
	if (hour < 10) {
		hour = '0' + hour;
	}

	return hour + ':' + minute + ':' + second;
}
