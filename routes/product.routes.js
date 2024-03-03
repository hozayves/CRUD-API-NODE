const express = require("express");
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getProducts); // Get all products

router.post("/", addProduct); // Add a product

router.get("/:id", getProduct); // Get a product based on Id

router.put("/:id", updateProduct); // Update a product based on Id

router.delete("/:id", deleteProduct); // Delete a product

module.exports = router;
