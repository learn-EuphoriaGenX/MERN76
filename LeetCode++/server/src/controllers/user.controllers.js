let User = require("../models/user.model");
let Otp = require("../models/otp.model");
const { sendMail } = require("../utils/sendmail");
const bcrypt = require("bcryptjs");


module.exports.sendOtp = async (req, res) => {
    try {

        let { email } = req.body

        if (!email) {
            return res.status(400).json({ success: false, msg: "email is required" })
        }

        // generate otp
        const otp = Math.floor(100000 + Math.random() * 900000)
        let subject = "OTP for LeetCode++"
        if (await sendMail(subject, email, otp)) {

            let isOtp = await Otp.findOne({ email: email })
            if (isOtp) {
                await Otp.deleteOne({ email: email })
            }

            await Otp.create({
                email: email,
                otp: otp
            })

            return res.status(200).json({ success: true, msg: "OTP sent successfully" })
        }

        return res.status(400).json({ success: false, msg: "Failed to send OTP" })

    }
    catch (err) {
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports.verifyOtp = async (req, res) => {
    try {
        let { email, otp } = req.body
        if (!email || !otp) {
            return res.status(400).json({ success: false, msg: "email and otp are required" })
        }

        let otpData = await Otp.findOne({ email: email, otp: otp })
        if (!otpData) {
            return res.status(400).json({ success: false, msg: "Invalid OTP" })
        }
        if (Date.now() - otpData.createdAt >= 180000) { // 3 minute 
            await Otp.deleteOne({ email: email, otp: otp })
            return res.status(400).json({ success: false, msg: "OTP is expired" })
        }
        await Otp.deleteOne({ email: email, otp: otp })
        return res.status(200).json({ success: true, msg: "OTP verified successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports.register = async (req, res) => {
    try {
        let { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, msg: "username, email and password are required" })
        }

        let user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({ success: false, msg: "user already exists" })
        }

        password = await bcrypt.hash(password, 10)

        let newUser = await User.create({
            username: username,
            email: email,
            password: password
        })

        newUser.password = undefined
        return res.status(200).json({ success: true, msg: "User registered successfully", user: newUser })

    }
    catch (err) {
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }
}

module.exports.login = async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ success: false, msg: "email and password are required" })
        }

        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ success: false, msg: "user not found" })
        }

        let isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, msg: "Invalid password" })
        }

        user.password = undefined
        return res.status(200).json({ success: true, msg: "Login successfully", user: user })

    } catch (error) {
        return res.status(500).json({ success: false, msg: "Internal Server Error" })
    }

}

module.exports.profile = (req, res) => {
    res.send("profile")
}