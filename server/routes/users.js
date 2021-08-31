var express = require('express');
var router = express.Router();
const dataController = require("../controller/data")

router.get("/show", dataController.getAllData)
router.post("/create", dataController.create)
router.put("/edit/:dataId", dataController.updateDataById)
router.delete("/delete/:dataId", dataController.deleteDataById)

module.exports = router