/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
readableStream.on('end', () => {
    console.log('Done');
});

const createableStream = fs.createWriteStream('output.txt');
const readFile = fs.readFileSync('input.txt','UTF-8');
createableStream.write(readFile);
createableStream.end();
