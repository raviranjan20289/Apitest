const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
