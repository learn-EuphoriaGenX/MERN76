let mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Error");
        process.exit(1);
    }
}

module.exports = dbConnect
