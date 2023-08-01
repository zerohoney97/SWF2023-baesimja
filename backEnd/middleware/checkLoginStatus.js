const jwt = require("jsonwebtoken");

exports.checkLoginStatus = (req, res, next) => {
    try {
        const { access_token } = req.session;

        jwt.verify(access_token, process.env.ACCESSTOKEN_KEY, (error, decoded) => {
            if (error) {
                req.isLogin = false;
            } else {
                req.isLogin = true;
                req.decoded = decoded;
            }
            next();
        });

    } catch (error) {
        console.log(error);
        return res.json({error});
    }
}