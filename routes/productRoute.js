const express = require("express");
const router =  express.Router()
const {seeAllProducts, addProduct,uppdateProduct,deleteProduct} = require("../controllers/productController");


router.get("/products", seeAllProducts)
router.post("/create/products", addProduct)
router.patch("/update/products/:id", uppdateProduct)
router.delete("/remove/:id", deleteProduct)


module.exports = router;


