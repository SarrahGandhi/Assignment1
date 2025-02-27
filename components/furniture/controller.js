const furnitureModel = require("./model");
const showFurniture = async (request, response) => {
  if (request.session.loggedIn) {
    let furnitureList = await furnitureModel.getAllFurniture();
    if (!furnitureList.length) {
      await furnitureModel.initalizeFurniture();
      furnitureList = await furnitureModel.getAllFurniture();
    }
    response.render("furniture/furniturelist", { furnitures: furnitureList });
  } else {
    response.redirect("/admin/login");
  }
};
const showApiFurniture = async (request, response) => {
  let furnitureList = await furnitureModel.getAllFurniture();
  response.json(furnitureList);
};
const showaddFurniture = async (request, response) => {
  if (request.session.loggedIn) {
    response.render("furniture/furnitureadd");
  } else {
    response.redirect("/admin/login");
  }
};
const addFurniture = async (request, response) => {
  let result = await furnitureModel.addFurniture(
    request.body.name,
    request.body.price,
    request.body.description
  );
  console.log(result);
  response.redirect("../furniturelist");
};
const deleteFurniture = async (request, response) => {
  let result = await furnitureModel.deleteFurniture(request.body.id);
  console.log(result);

  response.redirect("../furniturelist");
};
module.exports = {
  showFurniture,
  showaddFurniture,
  addFurniture,
  deleteFurniture,
  showApiFurniture,
};
