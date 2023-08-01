const jwt = require("jsonwebtoken");

exports.isLogin = (req, res, next) => {
    try {
        const { access_token } = req.session;

        jwt.verify(access_token, process.env.ACCESSTOKEN_KEY, (error, decoded) => {
            if (error) {
                return res.json({error});
            }
            req.decoded = decoded;
            next();
        });

    } catch (error) {
        console.log(error);
        return res.json({error});
    }
}