const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controllers");

router.post("/data", userController.postData);

router.get("/data", userController.getData);

module.exports = router;
