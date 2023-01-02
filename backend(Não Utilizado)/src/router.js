const express = require("express");
const usersController = require("./controllers/usersControllers");
const router = express.Router();

router.get("/users", usersController.getAll);

module.exports = router;
