const express = require("express");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { analyzeResume, getResumeHistory } = require("../controllers/resumeController");

const router = express.Router();

router.post("/analyze", protect, upload.single("resume"), analyzeResume);
router.get("/history", protect, getResumeHistory);

module.exports = router;
