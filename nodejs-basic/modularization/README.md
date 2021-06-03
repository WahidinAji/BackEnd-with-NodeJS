## Latihan: Modularization

ekarang Anda sudah tahu bagaimana cara menerapkan modularisasi pada JavaScript. Namun rasanya tidak afdal bila Anda tidak mempraktikannya sendiri. Untuk menguji pemahaman Anda tentang modularisasi, silakan lakukan latihan berikut.

Buat folder baru dengan nama modularization pada proyek nodejs-basic dan di dalamnya buat tiga berkas JavaScript baru yakni Tiger.js, Wolf.js, dan index.js.

Di dalam masing-masing berkas JavaScript, tuliskan starter code berikut: 

- Tiger.js
```js
class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }
 
  growl() {
    console.log('grrrrr!')
  }
}
 
// TODO 1
```
- Wolf.js
```js
class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }
 
  howl() {
    console.log('owooooo!')
  }
}
 
// TODO 2
```
- index.js
```js
const Tiger = // TODO 3
const Wolf = // TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);
```

Selesaikan kode yang ditandai TODO dengan ketentuan berikut:

- TODO 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain.
- TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.
- TODO 3 : Import class Tiger dari berkas Tiger.js.
- TODO 4 : Import class Wolf dari berkas Wolf.js.

Setelah selesai mengerjakan TODO, eksekusi berkas index.js dengan perintah:
```bash
$ node index.js
```


## Answer
- Tiger.js
```js
module.exports = Tiger; //TODO 1
```
- Wolf.js
```js
module.exports = Wolf; //TODO 2
```
- index.js
```js
const Tiger = require('./Tiger'); //TODO 3
const Wolf = require('./Wolf'); //TODO 4
```