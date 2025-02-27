const mongoose = require("mongoose");
const db = require("../../db");
const furnitureSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});
const furniture = mongoose.model("furniture", furnitureSchema);
async function initalizeFurniture() {
  const furnitureData = [
    {
      name: "Chair",
      price: 100,
      description: "A chair",
    },
    {
      name: "Table",
      price: 50,
      description: "A table",
    },
    {
      name: "Sofa",
      price: 200,
      description: "A sofa",
    },
    {
      name: "Bed",
      price: 150,
      description: "A bed",
    },
  ];
  await furniture.insertMany(furnitureData);
}
async function getAllFurniture() {
  await db.connectDB();
  return await furniture.find({});
}
async function addFurniture(name, price, description) {
  await db.connectDB();
  let newFurniture = new furniture({
    name: name,
    price: price,
    description: description,
  });
  let result = await newFurniture.save();
  console.log(result);
}
async function deleteFurniture(id) {
  await db.connectDB();
  let result = await furniture.deleteOne({ _id: id });
  console.log(result);
}
module.exports = {
  initalizeFurniture,
  getAllFurniture,
  addFurniture,
  deleteFurniture,
};
