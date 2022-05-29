const express = require('express')
const router = express.Router()

const Food = require("../models/food.model")
const crudController = require("./crud.controller")


router.post("",crudController(Food).post);
router.get("",crudController(Food).get);
router.get("/food",crudController(Food).getDatails);
router.get("/status",crudController(Food).getStatus);
router.get("/location",crudController(Food).getDataLocation)
router.get("/restaurant",crudController(Food).getRestaurant)




module.exports = router;