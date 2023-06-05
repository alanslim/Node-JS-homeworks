const log = console.log;

const cow = require('cowsay');

let message = cow.say({text: "Trust me, Node is cool!"});

log(message);