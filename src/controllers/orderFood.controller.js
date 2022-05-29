const express = require('express')
const router = express.Router()

const Food = require("../models/orderedFood.model")
const crudController = require("./crud.controller")


router.post("",crudController(Food).post);
router.get("",crudController(Food).get);



module.exports = router;