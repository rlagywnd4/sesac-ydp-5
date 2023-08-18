const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
//app.set('/views', express.static(__dirname + '/views'));

app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});

app.get('/', (req, res) => {
  res.render('dynamic');
});

app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
