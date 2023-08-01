const router = require("express").Router();
const { isLogin } = require("../middleware/isLogin");
const { checkLoginStatus } = require("../middleware/checkLoginStatus");
const { getCaseList, searchCase, getDetailCase, getResult, addResult, setInterested, delInterested } = require("../controllers/caseController");

// 판례 목록 반환
router.get("/", getCaseList);

// 판례 검색 결과 반환
router.get("/search/:word", searchCase);

// // 판례 카테고리별 반환
// router.get("/category/:name", categoryCase)

// 특정 판례 반환
router.get("/detail/:id", checkLoginStatus, getDetailCase);

// 설문 결과 반환하기
router.get("/result/:case_id", isLogin, getResult);

// 판례 설문하기
router.post("/addResult", isLogin, addResult);

// 관심 판례 설정하기
router.post("/setInterested", isLogin, setInterested);

// 관심 판례 취소하기
router.post("/delInterested", isLogin, delInterested);


module.exports = router;