const ResumeAnalysis = require("../models/ResumeAnalysis");
const { extractResumeText } = require("../services/resumeParser");

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

        const analysis = await ResumeAnalysis.create({
            user: req.user._id,
            jobTitle,
            company,
            resumeText: extractedResumeText,
            jobDescription,
            fileName: req.file ? req.file.originalname : null,
            score: 85,
            missingKeywords: ["Python", "Machine Learning", "AWS", "Agile", "Docker", "CI/CD"],
            matchedKeywords: ["JavaScript", "React", "Node.js", "Git", "SQL", "API"],
            suggestions: [
                {
                    icon: "fas fa-plus-circle",
                    title: "Add Technical Skills",
                    description: "Include Python, Machine Learning, and AWS in your skills section to match job requirements.",
                },
                {
                    icon: "fas fa-edit",
                    title: "Enhance Experience Descriptions",
                    description: "Incorporate Agile methodology and CI/CD pipeline experience in your work history.",
                },
                {
                    icon: "fas fa-chart-bar",
                    title: "Quantify Achievements",
                    description: "Add specific metrics and numbers to demonstrate the impact of your work.",
                },
            ],
        });

        res.status(201).json({
            id: analysis._id,
            score: analysis.score,
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
