const express = require("express");

const router = express.Router();

const {
  registerUser,
  userLogin,
  currentUser,
} = require("../controllers/userController");

router.route("/register").post(registerUser);

router.route("/login").post(userLogin);

router.route("/current").post(currentUser);

module.exports = router;
