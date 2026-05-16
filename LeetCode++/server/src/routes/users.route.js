let express = require("express")
let router = express.Router()
let { register, login, profile } = require("../controllers/user.controllers")

router.post("/register", register)
router.post("/login", login)

router.get("/profile", profile)


module.exports = router