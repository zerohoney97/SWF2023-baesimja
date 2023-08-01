const router = require("express").Router();
const { getUser } = require("../controllers/mypageController");

router.get("/", getUser);

module.exports = router;