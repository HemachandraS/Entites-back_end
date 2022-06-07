const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    car_name: { type: String, required: true },
    car_image: [{ type: String, required: true }],
    car_color: [{ type: String, required: true }],
    car_type: [{ type: String, required: true }],
    car_price: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);
const Car = mongoose.model("car", carSchema);
module.exports = Car;

// "car_name":"",
// "car_image":"",
// "car_color":"",
// "car_type":"",
// "car_price":""