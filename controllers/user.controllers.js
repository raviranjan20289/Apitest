const Data = require("../models/data.models");
exports.postData = async (req, res) => {
  try {
    const { name, email, school } = req.body;

    const result = await Data.create({ name, email, school });
    console.log(result);
    res.status(201).json({ mssg: result });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getData = async (req, res) => {
  try {
    const result = await Data.find();
    console.log(result);
    res.status(200).json({ mssg: result });
  } catch (error) {
    res.status(500).send(error);
  }
};
