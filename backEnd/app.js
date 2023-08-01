const express = require("express");
const dot = require("dotenv").config();
const cors = require("cors");

const session = require("express-session");
const { sequelize } = require("./models");
const { authRouter, caseRouter, mypageRouter } = require("./routers")
const { isLogin } = require("./middleware/isLogin")

const {addDummyData} = require("./models/dummyDataSeeder");

const app = express();
const PORT = 8080;

app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));

app.use(express.json())
app.use(express.urlencoded({extended : false}));

app.use(session({
    secret : process.env.SESSION_KEY,
    saveUninitialized : false,
    resave : false
}))

sequelize
    .sync({force : false})
    .then((e)=>{console.log("sequelize 실행")})
    .catch((err)=>{console.log(err)});


app.use("/auth", authRouter);
app.use("/case", caseRouter);
app.use("/mypage", isLogin, mypageRouter);
// addDummyData();

app.listen(PORT, ()=>{
    console.log("서버 열림");
});