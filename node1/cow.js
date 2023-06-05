const log = console.log;

// const cow = require('cowsay');

import {say} from "cowsay";
import {think} from "cowsay";


let message = say({text: "Trust me, Node is cool!"});

log(message);