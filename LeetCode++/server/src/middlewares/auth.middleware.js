const { verifyJWT } = require("../utils/jwt")


module.exports.auth = (role = []) => {
    return (req, res, next) => {

        try {

            let token = req.headers.authorization
            if (!token) {
                return res.status(400).json({ success: false, msg: "token is not present" })
            }

            let isValidUser = verifyJWT(token)
            if (!isValidUser) {
                return res.status(400).json({ success: false, msg: "token is invalid" })
            }

            if (!role.includes(isValidUser.role)) {
                return res.status(400).json({ success: false, msg: "you don't have access to this route" })
            }

            req.user = isValidUser
            next()

        } catch (err) {
            return res.status(500).json({ success: false, msg: "Internal Server Error" })
        }


    }
}
