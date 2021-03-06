const express = require("express");
const router = express.Router();

const {
  handleCreateBank,
  handleGetBank,
  handleUpdateBank,
  handleDeleteBank,
} = require("../controller/appsolController.js");

router.get("/bank", handleGetBank);
router.post("/bank", handleCreateBank);
router.put("/bank", handleUpdateBank);
router.delete("/bank", handleDeleteBank);

module.exports = router;
