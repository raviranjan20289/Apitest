const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controllers");

const userAuthentication = require("../middleware/auth");

router.post("/data", userController.postData);

router.get(
  "/data",
  userAuthentication.authenticateApiKey,
  userController.getData
);

module.exports = router;
