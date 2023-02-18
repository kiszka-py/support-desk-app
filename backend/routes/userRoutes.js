const {
  loginUser,
  home,
  registerUser,
  getMe,
} = require("../controllers/userController");

const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", home);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", protect, getMe);

module.exports = router;
