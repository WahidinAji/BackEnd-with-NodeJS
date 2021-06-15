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