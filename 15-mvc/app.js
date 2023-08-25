const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', express.static(__dirname + '/views'));
app.set('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// indexRouter에서는 localhost:PORT/ 기본 경로
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
// // indexRouter에서는 localhost:PORT/player 기본 경로 => 이런 식으로 바뀔 수 있음
// const indexRouter = require('./routes/index');
// app.use('/player', indexRouter);

// 404 error처리
// 반드시 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  console.log('error발생!!!!!!!!!!!');
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
