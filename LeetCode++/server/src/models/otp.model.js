let mongoose = require("mongoose")
let { Schema } = mongoose

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    otp: {
        type: String,
        required: true,
        trim: true,
    }
}, { timeStamp: true })

module.exports = mongoose.model("Otp", otpSchema)
