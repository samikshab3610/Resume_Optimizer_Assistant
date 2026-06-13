const express = require("express");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const { analyzeResume, getResumeHistory, clearResumeHistory } = require("../controllers/resumeController");

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
router.delete("/history", protect, clearResumeHistory);

module.exports = router;
