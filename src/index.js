
exports.min = function min (array) {
	if (!array || 0 === array.length) return 0
	let result = array.sort((a, b) => a - b);
	return result[0];
}

exports.max = function max (array) {
	if (!array || 0 === array.length) return 0
	let result = array.sort((a, b) => b - a);
	return result[0];
}

exports.avg = function avg (array) {
	if (!array || 0 === array.length) return 0
	let result = array.reduce((a, b) => a + b) / array.length;
	return result;
}
