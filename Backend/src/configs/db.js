const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://jani_instrive:instrive123@cluster0.cq7szcl.mongodb.net/?retryWrites=true&w=majority");
};
