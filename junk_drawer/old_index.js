var server = require('./upnp');
var say = require('./lib/say').speak;
var speakers = require('./speakers');

server.on('waiting', function() {
    console.log("server waiting");
    say('Hello World, this is a samply TTS file.', 'index', function () {
         console.log('text to speech complete');
         // tell sonos to play this crap
         speakers.getLEDState(function(data) {
             console.log("led state", data);
	     speakers.play('http://172.16.1.103:10293/', function(err, playing) {
                 if (err) {
                     console.error("SADFACE", err);
                 }
                 else {
                     console.log("we're playing?", playing);
                 }
             });
         });

         function callback (err, data) {
             if (err) {
         	console.log(err, data);
         	return;
             }
             console.log(data);
         }
    });
});

server.on("error", function(err) {
    console.error("BAD THINGS!", err);
    throw err;
})

server.start();
