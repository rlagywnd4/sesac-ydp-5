const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});

// 라우팅(Routing) : 주소를 설정하는 행위
//    - [요청 방식(get, post, ...) + 요청 경로] 세트가 겹치면 안돼!
//    - GET /hello, POST /hello -> 괜찮
//    - GET /hello, GET /hello2 -> 괜찮
//    - POST /banana, POST /banana -> X
// 라우트(Route) : 주소

// GET / 경로: 요청시 main 페이지 보여주기
app.get('/', (req, res) => {
  console.log(req.query, Date());
  res.render('main');
  console.log('-------------------------------------------');
});

app.get('/practice1', (req, res) => {
  res.render('practice1');
});

app.get('/practice2', (req, res) => {
  res.render('practice2');
});

app.get('/result1', (req, res) => {
  console.log(req.query, Date());
  res.render('result', { user: req.query });
});

app.post('/result2', (req, res) => {
  console.log(req.body, Date());
  res.render('result', { user: req.body });
});
