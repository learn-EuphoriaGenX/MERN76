let express = require("express")
let router = express.Router()
let { register, login, profile, sendOtp, verifyOtp, updateProfile } = require("../controllers/user.controllers")
const { auth } = require("../middlewares/auth.middleware")



router.post("/send-otp", sendOtp)
router.post("/verify-otp", verifyOtp)


router.post("/register", register)
router.post("/login", login)

router.get("/profile", auth(['user', 'admin']), profile)
router.patch("/profile", auth(['user', 'admin']), updateProfile)


module.exports = router