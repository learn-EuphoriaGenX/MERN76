const crypto = require("crypto")
const razorpayInstance = require("../config/razorpay.config")
const Payment = require("../models/payment.model")
const User = require("../models/user.model")


// Pro 199 (30 days)
// Premium 599 (30 days)

module.exports.createOrder = async (req, res) => {
    try {

        let { plan } = req.body
        let userId = req.user._id

        let amount

        if (plan === "Pro") {
            amount = 199
        }
        else if (plan === "Premium") {
            amount = 599
        }
        else {
            return res.status(400).json({
                success: false,
                msg: "Invalid Plan"
            })
        }

        let options = {
            amount: amount * 100,
            currency: "INR",
            receipt: `order_${Date.now()}`
        }

        let order = await razorpayInstance.orders.create(options)

        await Payment.create({
            userId,
            orderId: order.id,
            amount,
            status: "created",
            plan
        })

        return res.status(200).json({
            success: true,
            msg: "Order created successfully",
            order
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}


module.exports.verifyPayment = async (req, res) => {
    try {

        let {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body

        let userId = req.user._id

        let payment = await Payment.findOne({
            orderId: razorpay_order_id
        })

        if (!payment) {
            return res.status(400).json({
                success: false,
                msg: "Payment not found"
            })
        }

        // Verify Signature

        let body = razorpay_order_id + "|" + razorpay_payment_id // ex. order_1234567890|payment_1234567890

        let expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex")

        let isValid = expectedSignature === razorpay_signature

        if (!isValid) {
            return res.status(400).json({
                success: false,
                msg: "Invalid Signature"
            })
        }

        payment.paymentId = razorpay_payment_id
        payment.razorpaySignature = razorpay_signature
        payment.status = "success"

        await payment.save()

        let user = await User.findById(userId)

        user.payment = payment._id
        user.plan = payment.plan
        user.planValidUpto =
            Date.now() + (30 * 24 * 60 * 60 * 1000)

        await user.save()

        return res.status(200).json({
            success: true,
            msg: "Payment verified successfully",
            payment
        })

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}