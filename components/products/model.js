const mongoose = require("mongoose");
const db = require("../../db");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});
const Product = mongoose.model("Product", ProductSchema);
async function initalizeProducts() {
  const productData = [
    {
      name: "Syttherine",
      price: 19.99,
      description: "Stylish Cafe Chair",
    },
    { name: "Syttherine", price: 19.99, description: "Stylish Cafe Chair" },
    { name: "LuxeSofa", price: 299.99, description: "Comfortable modern sofa" },
    { name: "WoodCraft", price: 149.99, description: "Elegant wooden table" },
  ];
  await Product.insertMany(productData);
}
async function getAllProducts() {
  await db.connectDB();
  return await Product.find({});
}
async function addProduct(name, price, description) {
  await db.connectDB();
  let newProduct = new Product({
    name: name,
    price: price,
    description: description,
  });
  let result = await newProduct.save();
  console.log(result);
}
async function deleteProduct(id) {
  await db.connectDB();
  let result = await Product.deleteOne({ _id: id });
  console.log(result);
}
module.exports = {
  initalizeProducts,
  getAllProducts,
  addProduct,
  deleteProduct,
};
