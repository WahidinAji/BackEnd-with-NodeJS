## Latihan: Events
Ayo kita latihan apa yang sudah kita pelajari!

Silakan buat folder baru bernama events dan di dalamnya buat berkas JavaScript baru bernama index.js.

<img src="https://d17ivq9b7rppb3.cloudfront.net/original/academy/20210307221232d0f176667efb56cf8186999c3da3326c.png" class="fr-fic fr-dib fr-fil" alt="20210307221232d0f176667efb56cf8186999c3da3326c.png">

Tuliskan starter code berikut di dalam index.js:
```js
// TODO 1
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
// TODO 2
 
// TODO 3
 
// TODO 4
```
Wah cukup banyak juga yah TODO yang harus dikerjakan. Simak penjelasanya:

- TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
- TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
- TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
- TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.

Bila Anda selesai mengerjakan TODO yang ada, eksekusi berkas index.js dengan perintah:
```bash
$ node ./events/index.js
```
* note
jangan lupa jalanin script 
```bash
npm install events
```
untuk memasang package events

## Answer
```js
const { EventEmitter } = require('events');
const myEmitter = new EventEmitter();

const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}`);
}

myEmitter.on('birthday', birthdayEventListener);
myEmitter.emit('birthday', {name: 'Cakrawala'});
```