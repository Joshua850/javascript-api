const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },

  breed: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  }
});

const Dog = mongoose.model("Dog", DogSchema);
module.exports = { Dog };
