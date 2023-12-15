const { StatusCodes } = require("http-status-codes");
const Product = require("../models/product");
const NotFoundException = require("../errors/NotFoundException");

const newProduct = async (req, resp) => {
  const productData = req.body;
  console.log(productData);
  const product = await Product.create(productData);
  resp.status(StatusCodes.CREATED).json(product);
};

const getAllProducts = async (req, resp) => {
  const products = await Product.find({});
  resp.status(StatusCodes.OK).json(products);
};

const getProductById = async (req, resp) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (product instanceof Product) {
    return resp.status(StatusCodes.OK).json(product);
  } else {
    throw new NotFoundException("Product not found");
  }
};

const updateProduct = async (req, resp) => {
  const { id } = req.params;
  const productData = req.body;

  const product = await Product.findOneAndUpdate({ _id: id }, productData, {
    new: true,
  });

  if (product instanceof Product) {
    resp.status(StatusCodes.OK).json({ message: product });
  } else {
    throw new NotFoundException("Product not found");
  }
};

const deleteProduct = async (req, resp) => {
  const { id } = req.params;
  const productData = req.body;

  const product = await Product.findByIdAndRemove({ _id: id });

  if (product instanceof Product) {
    resp.status(StatusCodes.OK).json({ message: product });
  } else {
    throw new NotFoundException("Product not found");
  }
};

module.exports = {
  newProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
