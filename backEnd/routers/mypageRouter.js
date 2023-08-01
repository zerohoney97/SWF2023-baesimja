const router = require("express").Router();
const { getUser } = require("../controllers/mypageController");

// 유저 정보 조회
router.get("/", getUser);

module.exports = router;