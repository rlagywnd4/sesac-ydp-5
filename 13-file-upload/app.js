const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); //경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    // done: callback(콜백함수)
    // done(null, xx) 여기서  null은 error를 의미하는 매개변수
    // 에러가 없으므로 "null"이라고 전달하여 콜백 함수를 호출!
    // done안의 첫번째 인수에는 에러가 있다면 에러를, 두번째 인수에는 실제 경로나, 파일이름을 넣는다.
    destination(req, file, done) {
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // basename: 원본 파일에서 확장자를 제외한 파일 이름만 추출
      // 파일명 결과에 왜 Date.now를 추가해서 저장할까?
      // 1. 파일 이름 중복을 막기 위해
      // 2. 파일 이름만 보고 파일이 저장된 시점 유추 가능
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, //5MB
});

app.set('view engine', 'ejs');
app.set('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userfile'): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input태그의 name 속성과 일치시켜야 함
// app.post('/upload', upload.single('form태그의 input태그(type='file')의 name'), (req, res) => {
// app.post('/upload', upload.single('userfile'), (req, res) => {
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보들
  console.log(req.file);
  console.log(req.body);
  res.send('파일 업로드 완료!');
});

// req.file 객체 자세히 보기
// {
//     fieldname: 'userfile', // 폼에 정의한 name 값
//     originalname: 'apple.png', // 원본 파일병
//     encoding: '7bit', // 파일 인코딩 차입
//     mimetype: 'image/png', // 파일 타입
//     destination: 'uploads/', // 파일 저장 경로
//     filename: '157d0a48203e59605bdc66b58f817e6a', // destination에 저장된 파일명
//     path: 'uploads\\157d0a48203e59605bdc66b58f817e6a', // 업로드된 파일 전체 경로
//     size: 1087 // 파일 크기
//   }
