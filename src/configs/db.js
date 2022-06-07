const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://hema:5221@cluster0.vsmqa.mongodb.net/car_collection?retryWrites=true&w=majority"
  );
};
module.exports = connect;