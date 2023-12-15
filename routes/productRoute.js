const express = require("express");

const {
  newProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoute = express.Router();

productRoute.route("/").post(newProduct).get(getAllProducts);

productRoute
  .route("/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productRoute;
