var speakers = require('./speakers');

speakers.play('http://172.16.1.103:10293/temp.mp3', callback);
speakers.getVolume(callback);
speakers.getLEDState(callback);

//speakers.play('https://ia902508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3', callback);

//speakers.play(callback);
//speakers.previous(callback);


function callback (err, data) {
    if (err) {
	console.log(err, data);
	return;
    }
    console.log(data);
}
