const fs = require('fs');

const data = fs.readFileSync('./latihan/notes.txt', 'UTF-8');
console.log(data);