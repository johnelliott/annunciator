Annunciator
---
A text-to-speech public address system for Sonos speakers

###Commands

`$ npm start`: Start the server

`$ npm run dbg`: Start the server in debug mode

###Implementation Details

The server:
- http
- streaming
- AAC format [as described by sonos](https://sonos.custhelp.com/app/answers/detail/a_id/80/~/supported-audio-formats#var_c)

The goal of the UI is to  command line "$ anu hello this is dog" will say "hello this is dog"

Text to speech using the `say` command on Mac OS, linux support may be possible if text-to-speech can get a format Sonos can .
