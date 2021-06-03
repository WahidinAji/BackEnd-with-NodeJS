## Latihan: Process Object
Anda sudah mengenal process object yang ada di Node.js. Agar lebih paham lagi, sekarang giliran Anda untuk coba sendiri penggunaan dari beberapa global object yang ada di Node.js.

Untuk latihan kali ini, buatlah berkas index.js baru di dalam folder baru process-object pada proyek nodejs-basic.
Kemudian, tuliskan starter code berikut pada index.js.
```js
const initialMemoryUsage = // TODO 1
const yourName = // TODO 2
const environment = // TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = // TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
```

Selesaikan kode yang ditandai TODO dengan ketentuan berikut:

- TODO 1 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
- TODO 2 : Isi dengan nilai index ke-2 dari process.argv.
- TODO 3 : Isi dengan nilai NODE_ENV dari process.env.
- TODO 4 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
Setelah mengerjakan seluruh TODO, eksekusi berkas JavaScript dengan perintah: 

- Linux & macOS Terminal
```bash
$ NODE_ENV=development node index.js <Nama Anda>
```
- Windows
```bash
$ SET NODE_ENV=development && node index.js <Nama Anda> 
```

## Answer
```js
const initialMemoryUsage = process.memoryUsage().heapUsed; //TODO `
const yourName = process.argv[2]; //TODO 1
const environment = process.env.NODE_ENV !== 'production' ? 'development' : 'aji.wahidin'; //TOOD 3

for(let i = 0; i <= 10000; i++){

}
const currentMemoryUsage = process.memoryUsage().heapUsed; ///TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
```