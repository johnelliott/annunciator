var speakers = require('./speakers');

speakers.getLEDState(callback);

function callback (err, data) {
    if (err) {
	console.log(err);
	return;
    }
    console.log(data);
}
