const express = require("express");
const { signup, login, getMe } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");
const { signupSchema, loginSchema } = require("../validators/authValidators");

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
router.get("/me", protect, getMe);

module.exports = router;