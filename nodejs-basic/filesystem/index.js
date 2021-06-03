const fs = require('fs');

//versi asynchronous
const fileReadCallback = (error, data) => {
    if(error){
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// versi synchronoue
const data2 = fs.readFileSync('todo.txt', 'utf-8');
console.log(data2);