var server = require ("./server");
var speakers = require("./speakers");
var say = require("./lib/say").speak;

server.listen(6818, function(){
    console.log("server listening");
    say("Hello, yes, this is dog.", "sound", function () {
         console.log("text to speech complete");
         // tell sonos to play this crap
         // todo ip
         speakers.getVolume(function(data) {
             console.log("led state", data);
        // TODO this should get your IP automatically.
	     speakers.play("http://10.0.0.9:6818/sound.m4a", function(err, playing) {
                 if (err) {
                     console.error("There was an error playing:", err);
                 }
                 else {
                     console.log("Playing:", playing);
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

