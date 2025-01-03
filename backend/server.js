const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const {notfound, errorHandler} = require("./middleware/errorMiddleware")

dotenv.config()
connectDB()


const app = express()

app.use(express.json()) // to accept json data

app.get('/', (req, res) => {
    res.send("API is Running Successfully");
})

app.use('/api/user', userRoutes)

app.use(notfound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server started on PORT ${PORT}`));