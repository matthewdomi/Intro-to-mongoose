const Product = require("../models/products.model")

const getProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products });
};


const getProduct = (req, res) => {
    res.status(200).send("Get single Product")
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


const updateProduct = (req, res) => {
    res.status(200).send("Update Product")
};


const deleteProduct = (req, res) => {
    res.status(200).send("Delete Product")
};

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};

