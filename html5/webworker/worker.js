(function (global) {
	global.addEventListener('message', function (e) {
		console.log('worker received msg from the host');
	}, false);
})((this || 0).self || global);
