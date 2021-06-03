const fs = require('fs');

const writeableStream = fs.createWriteStream('output.txt');

writeableStream.write('Ini merupakan teks baris 1!\n');
writeableStream.write('Ini merupakan teks baris 2!\n');
writeableStream.write('Ini merupakan teks baris 3!\n');
writeableStream.end('Akir dari writeable stream!');

const readableStream = fs.createReadStream('output.txt', {
    highWaterMark: 5
});

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