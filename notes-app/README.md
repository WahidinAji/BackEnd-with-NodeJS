```bash
$ npm init --y
```
```bash
$ npm install nodemon --save-dev
```
## nodemon
  - dengan tools ini kita tak perlu menjalankan ulang server ketika terjadi perubahan pada berkas JavaScript. Nodemon akan mendeteksi perubahan kode JavaScript dan mengeksekusi ulang secara otomatis.
```bash 
$ npm install eslint --save-dev
```
## ESLint
  - ESLint dapat mengevaluasi kode yang dituliskan berdasarkan aturan yang Anda terapkan. Anda bisa menuliskan aturannya secara mandiri atau menggunakan gaya penulisan yang sudah ada seperti AirBnb JavaScript Code Style, Google JavaScript Code Style, dan StandardJS Code Style.
  # setelah install eslint
  ```bash
  npx eslint --init
  ```
  Kemudian Anda akan diberikan beberapa pertanyaan, silakan jawab pertanyaan yang ada dengan jawaban berikut:

    * How would you like to use ESLint? -> To check, find problems, and enforce code style.
    * What type of modules does your project use? -> CommonJS (require/exports).
    * Which framework did you use? -> None of these. 
    * Does your project use TypeScript? -> N.
    * Where does your code run? -> Node (pilih menggunakan spasi).
    * How would you like to define a style for your project? -> Use a popular style guide.
    * Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh pilih AirBnB).
    * What format do you want your config file to be in? -> JSON.
    * Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.

# Kriteria Proyek
   - menyimpan catatan pada memory server dalam bentuk array javascript
   ```js
   {
       id: string,
       title: string,
       createdAt: string,
       updatedAt: string,
       tags: array of string,
       body: string,
   },
   // contoh nyatanya
   {
        id: 'notes-V1StGXR8_Z5jdHi6B-myT',
        title: 'Sejarah JavaScript',
        createdAt: '2020-12-23T23:00:09.686Z',
        updatedAt: '2020-12-23T23:00:09.686Z',
        tags: ['NodeJS', 'JavaScript'],
        body: 'JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para pemrogram yang non-Java.',
    },
   ```
   - menyediakan rote dengan path `/notes` dan method `POST` untuk menyimpan catatan yang dikirim oleh client
   - client menyimpan dan mengirimkan permintaan ke path dan method dengan membawa data JSON pada req body:
   ```js
   {
       "title": "Judul Catatan",
       "tags": ["Tag 1", "Tag 2"],
       "body": "Konten catatan"
   }
   ```
   - jika client berhasil, respons dari sever 201 (created) status code
   ```json
   {
       "status": "success",
        "messsage": "Catatan berhasil ditambahkan",
        "data": {
            "noteId": "V09YExygSUYogwWJ"
        }
   }
   ```
   - bila permintaan gagal, respons dari server 500 status code, dan kembalikan data JSON dengan format :
   ```json
   {
       "status": "error",
       "message": "Catatann gagal untuk ditambahkan"
   }
   ```

   - ketika clien melalukan permintaan pada path `/notes` dengan method `GET`, respons server 200 (ok) status code
   ```json
   {
        "status": "success",
        "data": {
            "notes": [
            {
                "id":"notes-V1StGXR8_Z5jdHi6B-myT",
                "title":"Catatan 1",
                "createdAt":"2020-12-23T23:00:09.686Z",
                "updatedAt":"2020-12-23T23:00:09.686Z",
                "tags":[
                "Tag 1",
                "Tag 2"
                ],
                "body":"Isi dari catatan 1"
            },
            {
                "id":"notes-V1StGXR8_98apmLk3mm1",
                "title":"Catatan 2",
                "createdAt":"2020-12-23T23:00:09.686Z",
                "updatedAt":"2020-12-23T23:00:09.686Z",
                "tags":[
                "Tag 1",
                "Tag 2"
                ],
                "body":"Isi dari catatan 2"
            }
            ]
        }
    }
    ```
    - jika belum ada catatan
    ```json
    {
        "status": "success",
        "data": {
            "notes": []
        }
    }
    ```
    - client mendapatkan id secara spesifik, respons dari sercer 200 (ok) status code
    ```json
    {
        "status": "success",
        "data": {
            "note": {
            "id":"notes-V1StGXR8_Z5jdHi6B-myT",
            "title":"Catatan 1",
            "createdAt":"2020-12-23T23:00:09.686Z",
            "updatedAt":"2020-12-23T23:00:09.686Z",
            "tags":[
                "Tag 1",
                "Tag 2"
            ],
            "body":"Isi dari catatan 1"
            }
        }
    }
    ```
    - jika id tidak ditemukan
    ```json
    {
        "status": "fail",
        "message": "Catatan tidak ditemukan"
    }
    ```
    - client mengubah catatan, membuat permintaan ke path `/notes/{id}` dengan method `PUT`
    ```json
    {
        "title":"Judul Catatan Revisi",
        "tags":[
            "Tag 1",
            "Tag 2"
        ],
        "body":"Konten catatan"
    }
    ```
    - jika perubahan berhasil, respons server 200 (ok) status code
    ```json
    {
        "status": "success",
        "message": "Catatan berhasil diperbaharui"
    }
    ```
    - Bila id catatan tidak ditemukan, maka server harus merespons dengan status code 404 (not found)
    ```json
    {
        "status": "fail",
        "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
    }
    ```
    - client delete notes, path `/notes/{id}` dengan method `DELETE`, respons server 200 (ok) status code
    ```json
    {
        "status": "success",
        "message": "Catatan berhasil dihapus"
    }
    ```
    - Bila id catatan tidak ditemukan, maka server harus mengembalikan respons dengan status code 404 (not found)
    ```json
    {
        "status": "success",
        "message": "Catatan gagal dihapus. ID catatan tidak ditemukan"
    }
    ```
 # Struktu Proyek
   * server.js: memuat kode untuk konfigurasi dan menjalankan server HTTP menggunakan Hapi.
   * route.js: memuat kode konfigurasi routing server seperti path, method dan handler.
   * handler.js: memuat seluruh fungsi2 handler yang digunakan pada berkas routes.
   * notes.js: memuat data notes yang disimpan dalam bentuk array objek.

   - semua berkas js harus disimpan di folder src. 
   > Folder Structure notes-app-back-end
    ├── node_modules
    ├── src
    │ ├── handler.js
    │ ├── notes.js
    │ ├── routes.js
    │ └── server.js
    ├── .eslintrc.json
    ├── package-lock.json
    └── package.json

## libray ke-3 untuk membuat id string dan harus unik
```bash
$ npm install nanoid
```

## Same-Origin Policy
  Origin terdiri dari tiga hal: protokol, host, dan port number. Origin dari aplikasi client kita adalah
  `http://notesapp-v1.dicodingacademy.com`
  Di mana protokolnya adalah `http://`, host-nya adalah `notesapp-v1.dicodingacademy.com`, dan port-nya adalah :`80` (implisit).
  Selama aplikasi client mengakses data dari origin yang sama, hal itu dapat dilakukan. Namun bila ada salah satu saja yang berbeda contohnya port 8001, maka permintaan itu akan ditolak.
  
  Dengan begitu jelas yah, apa penyebab gagalnya aplikasi client ketika melakukan permintaan ke web server yang kita buat. Sudah jelas keduanya memiliki origin yang berbeda. Origin web server kita saat ini adalah http://localhost:5000/

  Lalu, apa solusi agar keduanya dapat berinteraksi? Tenang, untungnya ada mekanisme yang dapat membuat mereka saling berinteraksi. Mekanisme tersebut disebut Cross-origin resource sharing (CORS). bagaimana cara menerapkannya?
  Pada web server, kita hanya perlu memberikan nilai header ‘Access-Control-Allow-Origin’ dengan nilai origin luar yang akan mengkonsumsi datanya (aplikasi client).
  ```js
  const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
  response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
    
  return response;
  ```
  Atau Anda bisa menggunakan tanda * pada nilai origin untuk memperbolehkan data dikonsumsi oleh seluruh origin.
  ```js
  const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
  response.header('Access-Control-Allow-Origin', '*');
 
  return response;
  ```

## merapikan error dari eslint 
```bash
$ npx eslint ./src --fix
```


## Ikhtisar
Anda berada di akhir dari modul Build Web Service using Node.js. Mari kita uraikan materi yang sudah Anda pelajari untuk mempertajam pemahaman.

- Anda sudah belajar cara membangun Web Service dengan menggunakan Node.js secara native. Mulai dari membangun HTTP server hingga menanggapi permintaan dari client. 
- Anda sudah mengetahui apa itu Node.js Web Framework.
- Anda sudah belajar cara membangun web service dengan menggunakan Hapi Framework menggantikan web service yang dibangun secara native.
- Anda sudah berhasil membangun RESTful API sederhana untuk mendukung fungsionalitas aplikasi Front-End.

Dengan ringkasan tersebut, diharapkan Anda dapat memahami semua materi yang telah disampaikan. Jika belum, Anda bisa ulas kembali materi yang diberikan pada modul ini. Untuk Anda yang sudah merasa mantap, yuk lanjut ke modul berikutnya!

## login SSH AWS ES
- `ssh -i "notes-api-webserver.pem" ubuntu@ec2-54-179-255-248.ap-southeast-1.compute.amazonaws.com`