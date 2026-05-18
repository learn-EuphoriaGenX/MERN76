let express = require("express")
let router = express.Router()
let { register, login, profile, sendOtp, verifyOtp } = require("../controllers/user.controllers")



router.post("/send-otp", sendOtp)
router.post("/verify-otp", verifyOtp)


router.post("/register", register)
router.post("/login", login)

router.get("/profile", profile)


module.exports = router