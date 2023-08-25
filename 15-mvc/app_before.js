const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', express.static(__dirname + '/views'));
app.set('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
  {
    id: 5,
    userid: 'apple',
    date: '2022-11-02',
    comment: 'dndhkdkdkd',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

app.get('/comments/:id', (req, res) => {
  // req.params: 라우트 매개변수에 대한 정보가 담겨 있음
  console.log('req.params', req.params); // { id: 1}
  const cmtId = Number(req.params.id); // 댓글의 고유 아이디

  //   // :id 변수에 0, 7같은 존재하지 않는 id로 접근시 404 페이지
  //   if (cmtId > comments.length || cmtId < 1) {
  //     console.log('잘못된 숫자가 들어옴');
  //     return res.render('404');
  //   }

  //   // :id 변수에 숫자가 아닌 문자가 온다면 404 페이지
  //   if (isNaN(cmtId)) {
  //     console.log('문자가 들어옴');
  //     return res.render('404');
  //   }

  if (!comments[cmtId - 1]) {
    return res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] }); // id가 1부터 시작해서 1을 빼줌
});

// param 여러개 사용 가능
app.get(`/test/:id:name`, (req, res) => {
  console.log('req.params', req.params);
  res.send('test res success!');
});

// 404 error처리
// 반드시 맨 마지막 라우트로 선언
// 위에 경로를 다 지나고 없을때 모든 경로를 의미
//   => 처음에 선언시 모든 경로가 해당되어 제대로된 경로로 들어가도 404로 들어가게 됨
app.get('*', (req, res) => {
  console.log('error발생!!!!!!!!!!!');
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
