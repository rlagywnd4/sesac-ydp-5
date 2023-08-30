// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 기본주소: localhost:PORT
router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);

module.exports = router;
