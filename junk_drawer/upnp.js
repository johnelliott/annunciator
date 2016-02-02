// upnp.js

var Server = require("upnpserver");

var server = new Server({ /* configuration, see below */
    log: true,
    logLevel: "DEBUG"
}, [
    { path: '/Users/johnelliott/dev/st/annunciator/sounds', mountPoint: "/" },
    { hostname: 'annunciator', mountPoint: "/" }
]);

module.exports = server;
