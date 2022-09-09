const express = require("express");
const productsRouter = require("./routes/products.route")
const { dbConnect } = require("./config/dbConnect")


const app = express();

app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("Welcome to my products server, Please use /products ")
})

app.use(("/products"), productsRouter);

async function start() {
    await dbConnect();



    app.listen(4000, (err) => {
        console.log("Server is running on https://localhost:4000")
    })

}

start();