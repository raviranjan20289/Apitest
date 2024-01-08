const express = require("express");

const router = express.Router();

const registerController = require("../controllers/register.controllers");

const registerAuthentication = require("../middleware/user");

router.post("/ApiData", registerController.getPublicData);

router.get(
  "/uData",
  registerAuthentication.authenticateApiKey,
  registerController.findData
);
module.exports = router;
