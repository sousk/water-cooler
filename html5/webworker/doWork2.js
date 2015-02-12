(function (global) {
	global.addEventListener('message', function (e) {
		var data = e.data;
		switch (data.cmd) {
		case 'start':
			global.postMessage('STARTED: ' + data.msg);
			break;
		case 'stop':
			global.postMessage('STOPPED: '+ data.msg);
			global.close();
			break;
		default:
			global.postMessage('unknown cmd'+ data.msg);
		}
	}, false);
})((this || 0).self || global);
