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
        // const a = fs.createWriteStream('output.txt');
        // a.write(createReadStream('input.txt'));
        // a.end('last');
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
readableStream.on('end', () => {
    console.log('Done');
});

const createableStream = fs.createWriteStream('output.txt');
createableStream.write(`${readableStream.read()}\n`);
createableStream.end('last');
