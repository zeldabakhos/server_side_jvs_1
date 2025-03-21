const jwt = require("jsonwebtoken")

exports.verifyToken = (req, res, next) =>{
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "No token provided!" });
    }

    const token = req.headers.authorization.split(" ")[1];
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
        req.userId = decodedToken.userId;
        next();
    } catch (err) {
        return res.status(401).send({ message: "Unauthorized!" });
    }
}