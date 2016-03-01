var http = require("http");
var ecstatic = require('ecstatic')({ root: __dirname + '/sounds', handleError: false });
var Sonos = require('sonos').Sonos;
var say = require("./lib/say").speak;

var host = process.env.SONOS_HOST || '10.28.63.170';
var sonosPort = process.env.SONOS_PORT || 1400;
var localIp = '10.28.63.122';
// create sonos speaker
var speakers = new Sonos(host, sonosPort);
console.log("speakers created", speakers);

// use ARP to find local sonos by MAC address
// arp -a |grep b8:e9:37:8b:c7:c8

// sonos.play('https://archive.org/download/testmp3testfile/mpthreetest.mp3', function(err, playing) {
//   console.log([err, playing]);
// });

var server = http.createServer(function (request, response) {
	request.addListener('end', function () {
		ecstatic(request, response);
	}).resume();
});

server.listen(6818, function(){
	console.log("server listening");
	say("Hello Social Tables", "sound", function () {
		console.log("text to speech complete");
		// TODO ip
		//speakers.currentTrack(function(err, info) {
		//	console.log("current track", info);
		//});

		//TODO this should get your IP automatically.
		// tell sonos to play this crap
		speakers.play("http://10.28.63.122/sound.m4a", function(err, playing) {
		    if (err) {
		   	 console.error("There was an error playing:", err);
		    }
		    else {
		   	 console.log("Playing:", playing);
		    }
		});
	});
});
