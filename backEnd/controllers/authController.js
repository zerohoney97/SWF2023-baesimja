const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

// 로그인
exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.json({ message: "아이디 없음" });
    }

    const same = bcrypt.compareSync(password, user.password);
    if (!same) {
      return res.json({ message: "비밀번호 틀림" });
    }

    // 로그인 성공
    const token = jwt.sign(
        { id: user.id },
        process.env.ACCESSTOKEN_KEY,
        { expiresIn: "1d" }
        );

    req.session.access_token = token;

    return res.json({ message: "성공" });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

// 회원가입 (유저 추가)
exports.signup = async (req, res) => {
  try {
    const { name, password } = req.body;
    const hashPw = bcrypt.hashSync(password, 10);

    await User.create({ name, password: hashPw });

    return res.json({ message: "성공" });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

// 유저 아이디 중복체크
exports.dupChk = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ where: { name } });

    if (user) {
      return res.json({ message: "중복" });
    } else {
      return res.json({ message: "중복 아님" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

// 로그아웃
exports.logout = async (req, res) => {
  try {
    req.session.destroy();
    return res.json({ message: "성공" });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};
