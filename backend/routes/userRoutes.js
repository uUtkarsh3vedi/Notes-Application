const express = require("express");
const { registerUser } = require("../controllers/authController");
const {validateBody} = require("../middleware/validateMiddleware");
const { userSchema } = require("../models/validationSchema");


const router = express.Router();
router.post("/users", validateBody(userSchema), registerUser);

module.exports = router