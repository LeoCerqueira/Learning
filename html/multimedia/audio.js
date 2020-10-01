function getAudio() {
	return document.getElementById('audio');
}

//play, pause and vlume change events test with console log

getAudio().onplay = function () {
	console.log('Audio has started.');
};

getAudio().onpause = function () {
	console.log('Audio has been paused.');
};

getAudio().onvolumechange = function () {
	console.log('The volume has been changed.');
};
