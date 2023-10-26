//const express = require("express");
import express from "express";
//const productController = require("../controllers/productController");
import * as productController from "../controllers/productController.js";
const router = express.Router();

router.get("/api/products/get", productController.getProducts);
router.post("/api/products/create", productController.createProduct);
router.put("/api/products/update/:idProduct", productController.updateProduct);
router.delete("/api/products/delete/:id", productController.deleteProduct);
router.get("/api/products/getOne/:idProduct", productController.getOneProduct);

//module.exports = router;
export {router};