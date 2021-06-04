/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');

const createableStream = fs.createWriteStream('output.txt');
const readFile = fs.readFileSync('input.txt','UTF-8');
createableStream.write(readFile);
createableStream.end();
const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});

// console.log('from input.txt\n');
readableStream.on('readable', () => {
    try {
        process.stdout.write(`${readableStream.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
readableStream.on('end', () => {});
