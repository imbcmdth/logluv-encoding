// I move the order of the channels from the traditional logluv encding
// from [s, L15, u8, v8] to [u8, v8, S, L15] to put the low part of the 
// exponent into the alpha channel

// Also the functions accept and outputs xyY by doing the xy-> uv conversion
// internally because reasons

function xyTou (x, y) {
	return (4 * x) / (-2 * x + 12 * y + 3);
}

function xyTov (x, y) {
	return (9 * y) / (-2 * x + 12 * y + 3);
}

function uvTox (u, v) {
	return (9 * u) / (6 * u - 16 * v + 12);
}

function uvToy (u, v) {
	return (4 * v) / (6 * u - 16 * v + 12);
}

function fromFloats (src, result) {
	result = result || [];

	var x = src[0];
	var y = src[1];
	var Y = src[2];

	var u = xyTou(x, y);
	var v = xyTov(x, y);

	var L = Math.floor(256 * (log2(Y) + 64));
	var S = 0;

	if (Y < 0) {
		S = 0x80;
	}

	result[0] = Math.floor(410 * u);
	result[1] = Math.floor(410 * v);
	result[2] = S | ((L >>> 8) & 0x7F);
	result[3] = L & 0xFF;

	return result;
}

function toFloats (src, result) {
	result = result || [];

	var u = (src[0] + 0.5) / 410;
	var v = (src[1] + 0.5) / 410;

	var L = ((src[2] & 0x7F) << 8) | src[3];
	var Y = Math.pow(2, (L + 0.5) / 256 - 64);

	result[0] = uvTox(u, v);
	result[1] = uvToy(u, v);
	result[2] = Y;

	return result;
}

module.exports = {
	fromFloats: fromFloats,
	toFloats: toFloats
}

function log2 (n) { return Math.log(n) / Math.LN2; }
