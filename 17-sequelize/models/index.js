// 느슨한 모드를 해제하고 엄격 모드를 사용하는 방법 - 구글에 'use strict';검색
'use strict';

// sequelize패키지 불러와서 저장
// sequelize 모듈 호출
const Sequelize = require('sequelize');
// config.json파일 읽어와서 development를 읽어들임
// config.json 파일을 불러와서 development 환경의 db 설정
// config : db 접근 가능한 설정 값 저장
const config = require(__dirname + '/../config/config.json')['development'];

// 빈 db 객체 생성
const db = {};

// Sequelize 객체 생성해서 sequelize 변수에 저장
const sequelize = new Sequelize(
  config.database, // sesac
  config.username, // user
  config.password, // 1234
  config // {}
);

// db = { sequelize: sequelize, Sequelize: Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// !! models/ 폴더에 정의되는 model(테이블)은 db 객체에 저장
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: 모델(테이블)}
db.Visitor = require('./Visitor')(sequelize, Sequelize);

// db 객체 내보냄 (모듈화 내보냄. 다른 곳에서 db 객체 사용가능)
module.exports = db;
