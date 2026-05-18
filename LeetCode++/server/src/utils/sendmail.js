let nodemailer = require("nodemailer");

module.exports.sendMail = async(subject, email, otp) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const options = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: `OTP is ${otp}`
    }

    try {
        await transporter.sendMail(options)
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}
