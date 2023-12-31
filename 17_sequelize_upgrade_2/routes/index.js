const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의
// localhost:PORT/ 기본 주소

router.get('/', controller.index);

// get /players - 전체 선수 조회
router.get('/players', controller.getPlayers);

// get /players/:player_id  - 특정 선수 조회
router.get('/players/:player_id', controller.getPlayer);

// post /players - 선수 추가
router.post('/players', controller.postPlayer);

// patch /players/:player_id/team - 특정 선수의 소속 팀 변경
router.patch('/players/:player_id/team', controller.patchPlayer);

// delete /players/:player_id - 특정 선수 삭제
router.delete('/players/:player_id', controller.deletePlayer);

// ~~~~~~~~~ 팀 관련 API ~~~~~~~~~
// get /teams - 전체 팀 조회
router.get('/teams', controller.getTeams);

module.exports = router;
