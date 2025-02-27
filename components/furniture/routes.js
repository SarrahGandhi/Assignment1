const express = require("express");
const router = express.Router();
const {
  showFurniture,
  showaddFurniture,
  addFurniture,
  deleteFurniture,
  showApiFurniture,
} = require("./controller");
router.get("/furniturelist", showFurniture);
router.get("/addfurniture", showaddFurniture);
router.post("/addfurniture/submit", addFurniture);
router.post("/deletefurniture/:id", deleteFurniture);
router.get("/api/furniturelist", showApiFurniture);
module.exports = router;
