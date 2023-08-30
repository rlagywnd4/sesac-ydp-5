// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

// db 연결 설정
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac',
});
