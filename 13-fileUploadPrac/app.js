const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8080;

// TODO: multer 관련 설정

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
app.use('/uploads', express.static(__dirname + '/uploads'));
// 2. static/ 폴더 접근 가능하도록
app.use('/static', express.static(__dirname + '/static'));

const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
      done(null, req.body.id + ext); // basename: 원본 파일에서 확장자를 제외한 파일 이름만 추출
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, //5MB
});

// TODO: 라우터 정의
// 1. GET /: index.ejs render
app.get('/', (req, res) => {
  console.log('index.ejs open');
  res.render('index');
});
// 2. POST /result: result.ejs render
app.post('/result', uploadDetail.single('dynamicUserfile'), (req, res) => {
  console.log('open result');
  console.log(req.body, 'body입니다.');
  console.log(req.file, 'file입니다.');
  res.render('result', {
    path: req.file.path,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
