var Sonos = require('sonos').Sonos;

// arp -a |grep b8:e9:37:8b:c7:c8
// create sonos speaker
var speakers = new Sonos(process.env.SONOS_HOST || '172.16.1.28', process.env.SONOS_PORT || 1400);
console.log("speakers created", speakers);

// sonos.play('https://archive.org/download/testmp3testfile/mpthreetest.mp3', function(err, playing) {
//   console.log([err, playing]);
// });

module.exports = speakers;
