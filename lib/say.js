/*

Copyright (c) 2015 Social Tables http://github.com/socialtables/annunciator/
Copyright (c) 2010 Marak Squires http://github.com/marak/say.js/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

var spawn = require('child_process').spawn,
child;

var say = exports;

// say stuff, speak
exports.speak = function(text, file, callback) {
    var commands;

    if (arguments.length < 2) {
        console.log('invalid amount of arguments sent to speak()');
        return;
    }

    if (!file) {
        commands = [ "-v", "Fred", text ];
    } else {
        commands = [ "-v", "Fred", text, "-o", "./sounds/"+file+".m4a", "--file-format=m4af" ];
    }

    var childD = spawn("say", commands);

    childD.stdin.setEncoding('ascii');
    childD.stderr.setEncoding('ascii');

    childD.stderr.on('data', function(data){ console.log(data); });
    childD.stdout.on('data', function(data){ console.log(data); });


    childD.addListener('exit', function (code, signal) {
        if (code === null || signal !== null) {
            console.log('couldnt talk, had an error ' + '[code: '+ code + '] ' + '[signal: ' + signal + ']');
        }

        // we could do better than a try / catch here
        try {
            callback();
        } catch(err) {
            // noop
        }
    });
};
