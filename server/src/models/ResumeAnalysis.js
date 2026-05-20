const mongoose = require("mongoose");

const resumeAnalysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobTitle: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    resumeText: {
      type: String,
      default: "",
    },
    jobDescription: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      default: null,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    scoreBreakdown: {
      keywordsMatch: {
        type: Number,
        default: 0,
      },
      formatQuality: {
        type: Number,
        default: 0,
      },
      skillsRelevance: {
        type: Number,
        default: 0,
      },
      experienceMatch: {
        type: Number,
        default: 0,
      },
    },
    missingKeywords: {
      type: [String],
      default: [],
    },
    matchedKeywords: {
      type: [String],
      default: [],
    },
    suggestions: {
      type: [
        {
          title: String,
          description: String,
          icon: {
            type: String,
            default: "fas fa-lightbulb",
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ResumeAnalysis", resumeAnalysisSchema);
