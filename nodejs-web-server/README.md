## Membangun Web Service menggunakan Node.js

- Method/Verb Request
  Sekali lagi, tidak hanya properti method, objek request kaya akan properti dan fungsi lain di dalamnya. Anda dapat mengeksplorasi properti atau fungsi lainnya pada halaman dokumentasi
  <a href="https://nodejs.org/api/http.html#http_class_http_clientrequest">Node.js tentang HTTP Client Request</a>.

- Body Request
  ```js
  const requestListener = (request, response) => {
    let body = [];
 
    request.on('data', (chunk) => {
        body.push(chunk);
    });
 
    request.on('end', () => {
        body = Buffer.concat(body).toString();
    });
  };
  ```
    - Pertama, kita deklarasikan variabel body dan inisialisasikan nilainya dengan array kosong. Ini berfungsi untuk menampung buffer pada stream.
    - Lalu, ketika event data terjadi pada request, kita isi array body dengan chunk (potongan data) yang dibawa callback function pada event tersebut.
    - Terakhir, ketika proses stream berakhir, maka event end akan terbangkitkan. Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString().