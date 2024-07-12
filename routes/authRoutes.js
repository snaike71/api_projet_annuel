const express = require("express");
const { body } = require("express-validator");

// middleware
const { checkValidationErrors } = require("../middleware/validators");

// controllers

const authController = require("../controllers/authController");

// router
const router = express.Router();


router.post(
  "/login",
  body("email").isEmail(),
  body("password").isString(),
  checkValidationErrors,
  authController.login
);

module.exports = router;
