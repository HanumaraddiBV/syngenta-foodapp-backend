const express = require('express')

const app = express();
const foodController = require("./controllers/food.controller")
const cartController = require("./controllers/cart.controller")
const orderFoodController = require("./controllers/orderFood.controller")
app.use(express.json())

app.use("/dishes",foodController)
app.use("/cart",cartController)
app.use("/order",orderFoodController)

module.exports = app;