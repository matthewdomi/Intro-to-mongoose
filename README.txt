// Paths

install Mongodb as our database
install Postman
install Studio 3T for communicating with MOngodb
            Create index.js
index.js for 
const express = require("express");
const app = express();
app.listen(4000, (err) => {
        console.log("Server is running on https://localhost:4000")
    })

            Run In terminal
npm init -y
yarn add express
yarn add -D nodemon

            Folder creation
1. create routes Folder
2. create comtrollers folder

using user as file

create users.routes.js file
create users.controller.js file 
in folders above respectively.



                Start with controller file
create;
getUsers
getUsers
createUser
updateUser
deleteUser

in the form below
const updateUser = (req, res) => {
    res.status(200).send("Update User")
};

then export
module.export = {
    getUsers
    getUsers
    createUser
    updateUser
    deleteUser
}



                Continue to route file
import route from express by
const router = require("express").Router

import the controller

const userRouter = router();

productRouter.route("/")
                .get(getProducts)
                .post(createProduct)

productRouter.route("/:product")
                .get(getProduct)
                .patch(updateProduct)
                .delete(deleteProduct)

module.exports = productRouter;



                Continue to index .js
import router  
then 
 app.get
 and

 app.use

                Continue to package.json
remove test and add
Start
dev





        NOW RUN TERMINAL on yarn run dev
if successful then,






            Creating config
Create a config folder
create dbConnect.js in the config folder

create 

                Run yarn add mongoose in terminal
initiate mongoose with connect

const { connect } = require("mongoose")

async dbConnect as a function
in the function add try catch
await connect and add mongodb localhost Path
console.log database successfully

inthe catch , console.log error and exit peacefully

async function dbConnect() {
    try {
        await connect("mongodb://localhost:27017/", {
            dbName: "shop",
        })
        console.log("Database connected successfully!")
    } catch (error) {
        console.log(error);
        process.exit(1)

    }
}

module.exports = { dbConnect };


                Create models folder
create user.module .js 
import mongoose with Schma and models
const {Schema, model} = require("mongoose");

take userSchema to mongoose Schema
const productsSchema = new Schema({


add variables 
 name:{
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true,
        minLegth: 10,
    },
    price:{
        type: Number,
        required: true,
        min: 0,


    },

    quantity:{
        type: Number,
        required: true,
        min:0
    },
},

remember to add your timestamps
 {
            timestamps: true
    }

export

module.exports = model("Product", productsSchema)


                Continue at controller
import the model to controller
const Product = require("../models/products.model")

edit your get
const getProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products });
};


const createProduct = async (req, res) => {
    // version 1
    // const product = new Product({})
    // product.save()

    // version 2
    // Saving the data to our database 
    const product = await Product.create({
         name: req.body.name,
         description: req.body.description,
         price: req.body.price,
         quantity: req.body.quantity,
    })
    res.status(201).json({ product});
};



            RUN IN POSTMAN 
edit this in your body with json style
{
"name":"{{$randomProductName}}",
"description":"{{$randomLoremSentence}}",
"price":"{{$randomPrice}}",
"quantity":"{{$randomInt}}"
}



