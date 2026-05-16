let express = require('express')
const dbConnect = require('./config/db.config')
let app = express()


app.use("/api/users", require("./routes/users.route"))
app.use("/api/problems", require("./routes/problems.route"))
app.use("/api/payments", require("./routes/payments.route"))


const port = process.env.PORT || 5500

dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})

