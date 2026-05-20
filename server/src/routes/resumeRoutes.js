const express = require("express");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { analyzeResume, getResumeHistory } = require("../controllers/resumeController");

const router = express.Router();

router.post("/analyze", protect, (req, res, next) => {
  upload.single("resume")(req, res, (error) => {
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    next();
  });
}, analyzeResume);
router.get("/history", protect, getResumeHistory);

module.exports = router;
