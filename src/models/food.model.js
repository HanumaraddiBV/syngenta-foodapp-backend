const mongoose = require("mongoose");

const FoodDataSchema = new mongoose.Schema(
  {
    
    dish_name: { type: String, required: false },
    restaurant_name: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


module.exports = mongoose.model("dish",FoodDataSchema)