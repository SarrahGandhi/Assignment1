const projectModel = require("./model");
const showProducts = async (request, response) => {
  if (request.session.loggedIn) {
    let productsList = await projectModel.getAllProducts();
    if (!productsList.length) {
      await projectModel.initalizeProducts();
      productsList = await projectModel.getAllProducts();
    }
    response.render("products/list", { products: productsList });
  } else {
    response.redirect("/admin/login");
  }
};
const showApiProject = async (request, response) => {
  let productsList = await projectModel.getAllProducts();
  response.json(productsList);
};
const showaddProduct = async (request, response) => {
  if (request.session.loggedIn) {
    response.render("products/add");
  } else {
    response.redirect("/admin/login");
  }
};
const addProduct = async (request, response) => {
  let result = await projectModel.addProduct(
    request.body.name,
    request.body.price,
    request.body.description
  );
  console.log(result);
  response.redirect("../list");
};
const deleteProduct = async (request, response) => {
  let result = await projectModel.deleteProduct(request.body.id);
  console.log(result);

  response.redirect("../list");
};
module.exports = {
  showProducts,
  showaddProduct,
  addProduct,
  deleteProduct,
  showApiProject,
};
