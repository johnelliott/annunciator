var fs = require('fs');
var http = require('http');


// load in an mp4 file
var file = fs.readFileSync('./hello.mp4');



var server = http.createServer(function (req, res) {
    console.log("something happened");
    res.writeHead("Content-Type: audio/mp4");
    res.write(file);
    res.end();
});

server.listen(6818);
console.log("server listening on port 6818");
			      
