const express = require("express");
const router = express.Router();
const {
  showProducts,
  showaddProduct,
  addProduct,
  deleteProduct,
  showApiProject,
} = require("./controller");
router.get("/list", showProducts);
router.get("/add", showaddProduct);
router.post("/add/submit", addProduct);
router.post("/delete/:id", deleteProduct);
router.get("/api/list", showApiProject);
module.exports = router;
