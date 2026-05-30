let express = require("express")
const { auth } = require("../middlewares/auth.middleware")
const { createOrder, verifyPayment } = require("../controllers/payment.controllers")
let router = express.Router()


router.post('/createOrder', auth(['user', 'admin']), createOrder)
router.post('verifyPayment', auth(['user', 'admin']), verifyPayment)




module.exports = router