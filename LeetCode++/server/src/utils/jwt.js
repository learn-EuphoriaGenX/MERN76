let jwt = require("jsonwebtoken")

module.exports.createJWT = (payload) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
    return token;
}

module.exports.verifyJWT = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return null
    }
}
