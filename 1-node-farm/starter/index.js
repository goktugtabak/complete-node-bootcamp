const fs = require('fs'); //Basic import in node.js

const hello = "Hello World!";

console.log(hello);

const text = fs.readFileSync('./txt/input.txt','utf-8');

console.log(text);

const textOut = `this is what we know about the avocado!: ${text}\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt',textOut);

console.log('File written!');
