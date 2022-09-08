const express = require("express");
const {dbConnect} = require("./config/db.Connect")
const userRouter = require("./routes/users.route")


const app = express();

app.get("/" , (req ,res) => {
    res.status(200).send("Welcome to my server. Please use /users ")
})

app.use("/users", userRouter)

async function start(){
    await dbConnect();

app.listen(4000, (err) =>{
    console.log("Server is running on https://localhost:4000")
})
}

start();