const router = require("express").Router();
const { login, signup, dupChk, logout } = require("../controllers/authController");

// 로그인
router.post("/login", login);

// 회원가입
router.post("/signup", signup);

// 아이디 중복체크(회원가입)
router.post("/dupChk", dupChk);

// 로그아웃
router.get("/logout", logout);

module.exports = router;