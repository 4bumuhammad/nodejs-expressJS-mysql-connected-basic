const express = require('express');
const mysql = require('mysql');

const app = express();

// Konfigurasi koneksi database MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'ujimysqlkudb',
  port: 3309,
  insecureAuth: true
});

// Membuat koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ', err);
    return;
  }
  console.log('Terhubung ke database MySQL');
});

// Contoh route untuk mendapatkan data dari database
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Gagal mendapatkan data dari database: ', error);
      res.status(500).json({ error: 'Gagal mendapatkan data dari database' });
      return;
    }
    res.json(results);
  });
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
