function data() {
	return [1, 2, 3, 4, 5];
}

var tmp = data();

var o = [];

o[0] = tmp[0];
o[1] = tmp[1];
o[2] = tmp[2];
o[3] = tmp.slice(3);
