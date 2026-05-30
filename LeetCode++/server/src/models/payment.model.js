
let mongoose = require("mongoose")
let { Schema } = mongoose

const paymentModel = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    razorpaySignature: {
        type: String,
        trim: true,
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
    },
    status: {
        type: String
    },
    plan: {
        type: String,
        enum: ["Free", "Pro", "Premium"],
        default: "Free",
        trim: true,
    }
}, { timeStamp: true })

module.exports = mongoose.model("Payment", paymentModel)
