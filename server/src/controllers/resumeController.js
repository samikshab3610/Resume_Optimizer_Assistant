const ResumeAnalysis = require("../models/ResumeAnalysis");
const { extractResumeText } = require("../services/resumeParser");
const { analyzeResumeWithAI } = require("../services/geminiService");

//analyze resume    
const analyzeResume = async (req, res) => {
    try {
        const { resumeText, jobTitle, company, jobDescription } = req.body;

        if (!jobDescription) {
            return res.status(400).json({ message: "Job description is required" });
        }

        const extractedResumeText = await extractResumeText({
            file: req.file,
            resumeText,
        });

        if (!extractedResumeText) {
            return res.status(400).json({ message: "Resume file or resume text is required" });
        }

        const aiResult = await analyzeResumeWithAI({
            resumeText: extractedResumeText,
            jobDescription,
            jobTitle,
        });

        const analysis = await ResumeAnalysis.create({
            user: req.user._id,
            jobTitle,
            company,
            resumeText: extractedResumeText,
            jobDescription,
            fileName: req.file ? req.file.originalname : null,
            score: aiResult.score,
            scoreBreakdown: aiResult.scoreBreakdown,
            missingKeywords: aiResult.missingKeywords,
            matchedKeywords: aiResult.matchedKeywords,
            suggestions: aiResult.suggestions,
        });

        res.status(201).json({
            id: analysis._id,
            score: analysis.score,
            scoreBreakdown: analysis.scoreBreakdown,
            missingKeywords: analysis.missingKeywords,
            matchedKeywords: analysis.matchedKeywords,
            suggestions: analysis.suggestions,
        });
    } catch (error) {
        console.error("Resume analysis failed:", error);
        res.status(500).json({
            message: error.message || "Resume analysis failed",
        });
    }
};



const getResumeHistory = async (req, res) => {
    try {
        const analyses = await ResumeAnalysis.find({ user: req.user._id })
            .sort({ createdAt: -1 })
            .lean();


        //resume history
        const resumeHistory = analyses.map((item) => ({
            id: item._id,
            atsScore: item.score,
            jobTitle: item.jobTitle,
            company: item.company,
            fileName: item.fileName,
            matchedKeywords: item.matchedKeywords,
            missingKeywords: item.missingKeywords,
            date: new Date(item.createdAt).toLocaleDateString(),
            time: new Date(item.createdAt).toLocaleTimeString(),
        }));

        res.json({ resumeHistory });
    } catch (error) {
        res.status(500).json({ message: "Failed to load resume history" });
    }
};

module.exports = {
    analyzeResume,
    getResumeHistory,
};
