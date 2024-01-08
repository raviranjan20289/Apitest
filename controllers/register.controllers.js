const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const generateApiKey = () => {
  return uuid.v4();
};

exports.getPublicData = async (req, res) => {
  try {
    const { name, email } = req.body;
    const apiKey = generateApiKey();
    const user = await User.create({ name, email, apiKey });

    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: "Registration failed" });
  }
};

exports.findData = async (req, res) => {
  try {
    const result = await User.find();
    console.log(result);
    res.status(200).json({ mssg: result });
  } catch (error) {
    res.status(500).json({ error: "this is wrong" });
  }
};
