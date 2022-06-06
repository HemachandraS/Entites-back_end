const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    car_title: { type: String, required: true },
    car_image: [{ type: String, required: true }],
    car_color: [{ type: String, required: true }],
    car_size: [{ type: String, required: true }],
    car_price: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);
const car = mongoose.model("car", carSchema);
module.exports = Car;