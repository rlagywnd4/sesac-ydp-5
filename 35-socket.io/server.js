const express = require('express');
const { copyFileSync } = require('fs');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

/// 사용자 닉네임 모음 객체
const nickObjs = {}; // {socket.id: nick1, socket.id: nick2, ...}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
}

// io.on() : socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공
  socket.emit('notice', socket.id);

  console.log('서버 연결 완료 :: ', socket.id);
  // socket.id: 소켓 고유 아이디 (브라우저 탭 단위)

  // [실습1] : 내 코드
  //   socket.on('Message', (data) => {
  //     console.log(data.who, ':', data.msg);
  //   });
  // [실습1] : 수업 코드
  //   socket.on('hello', (data) => {
  //     console.count(`${data.who} : ${data.msg}`);
  //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!!' });
  //   });

  //   socket.on('study', (data) => {
  //     socket.emit('studyKr', { who: 'study', msg: '공부해' });
  //   });
  //   socket.on('bye', (data) => {
  //     socket.emit('byeKr', { who: 'bye', msg: '잘가~' });
  //   });

  // [실습3] 채팅창 입장 안내
  //   io.emit('notice', `${socket.id}님이 입장하셨습니다.`);
  // [실습3-2] 채팅창 입장 문구
  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick} 님 입장`);

    console.log(nickObjs);
    // 프론트에서 입력한 nick이 nickObjs 객체에 존재하는지 검사
    // if (nickObjs[`${nick}`]) {
    if (Object.values(nickObjs).indexOf(nick) > -1) {
      // 이미 존재; error이벤트 + '이미 존재하는 닉네임 입니다.'
      console.log('닉네임 목록 : ', nickObjs);
      socket.emit('error', '이미 존재하는 닉네임 입니다.');
    } else {
      // 새 닉네임; notice 이벤트 + ${nick} 님이 입장하셨습니다.
      nickObjs[socket.id] = nick;
      io.emit('notice', `${nick}님이 입장하셨습니다.`); // 전체 공지
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      updateList();
    }
  });

  // [실습3-3] 클라이언트 퇴장시
  // "notice" 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김 :: ', socket.id);

    io.emit('notice', `${nickObjs[socket.id]}님이 퇴당하셨습니다.`);
    delete nickObjs[socket.id];
  });

  socket.on('send', (data) => {
    // 내 코드
    if (data.to === 'all') {
      io.emit('newMsg', data, 'all');
    } else {
      socket.emit('newMsg', data, 'me', nickObjs[data.to]);
      io.to(data.to).emit('newMsg', data, 'personal'); // 상대방한테만 보내고 나한테는 보내지않아 자신이 쓴 채팅이 안보임
    }

    // 수업 코드
    // console.log('send 이벤트로 받은 data :: ', data);
    // [실습5]
    // 디엠인지 아닌지 구분해서
    // io.to(소켓아이디).emit(event_name, data)

    // io.emit('newMessage', { nick: data.myNick, msg: data.msg });
  });
});

// [실습4] 채팅창 메세지 전송 step1
// send 이벤트를 받아서
// 모두에게 newMessage 이벤트로 {닉네임, 입력창 내용} 데이터를 전송

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
