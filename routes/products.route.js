const router = require("express").Router

const {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/products.controller")


const productRouter = router() ;

productRouter.route("/")
                .get(getProducts)
                .post(createProduct)

productRouter.route("/:product")
                .get(getProduct)
                .patch(updateProduct)
                .delete(deleteProduct)

module.exports = productRouter;