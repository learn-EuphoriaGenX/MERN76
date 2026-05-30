let mongoose = require("mongoose");
let { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 20
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    subscription: {
        type: String,
        enum: ["Free", "Pro", "Premium"],
        default: "Free"
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    },
    planValidUpto: {
        type: Date,
        default: null
    },
    profileImg: {
        type: String,
        default: "",
    }
}, { timeStamp: true })

module.exports = mongoose.model("User", userSchema)
