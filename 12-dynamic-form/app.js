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

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
  //   res.send({name: req.body.name, gender: req.body.gender, msg: '반가워!' }); 이렇게도 사용가능
});

// app.post('/axios', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 실습1
app.get('/practice1', (req, res) => {
  console.log(req.query);
  res.render('practice1');
});

// 실습2
app.get('/practice2', (req, res) => {
  console.log(req.query);
  console.log('get이지렁~');
  res.render('practice2');
});

app.post('/axios', (req, res) => {
  console.log(req.body);
  const { userId, userPw } = req.body;
  const id = 'banana';
  const pw = '4321';
  let isSuccess = false;
  if (id === userId && pw === userPw) {
    isSuccess = true;
  } else {
    isSuccess = false;
  }
  res.send([req.body, { isSuccess: isSuccess }]);
});
