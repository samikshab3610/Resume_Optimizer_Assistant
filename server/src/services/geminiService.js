const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const withTimeout = (promise, timeoutMs = 15000) => {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("AI analysis timed out. Please try again.")), timeoutMs)
    ),
  ]);
};

const trimText = (text, maxLength) => {
  if (!text) {
    return "";
  }

  return text.length > maxLength ? text.slice(0, maxLength) : text;
};

const analyzeResumeWithAI = async ({ resumeText, jobDescription, jobTitle }) => {
  const trimmedResumeText = trimText(resumeText, 8000);
  const trimmedJobDescription = trimText(jobDescription, 5000);

  const prompt = `
You are an expert ATS resume evaluator.

Analyze the resume against the job description.

Return ONLY valid JSON with this exact shape:
{
  "score": number,
  "missingKeywords": string[],
  "matchedKeywords": string[],
  "suggestions": [
    {
      "title": string,
      "description": string,
      "icon": string
    }
  ],
  "scoreBreakdown": {
    "keywordsMatch": number,
    "formatQuality": number,
    "skillsRelevance": number,
    "experienceMatch": number
  }
}

Rules:
- score must be 0 to 100
- missingKeywords should include important job description keywords not found in resume
- matchedKeywords should include important keywords found in both
- suggestions should be practical resume improvements
- icon must be a Font Awesome class like "fas fa-key" or "fas fa-edit"
- scoreBreakdown values must be 0 to 100
- keywordsMatch measures keyword overlap with job description
- formatQuality measures ATS-readable structure and clarity
- skillsRelevance measures how relevant resume skills are
- experienceMatch measures how well experience matches the role

Job Title:
${jobTitle || "Not provided"}

Job Description:
${trimmedJobDescription}

Resume:
${trimmedResumeText}
`;

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";

  let response;

  try {
    response = await withTimeout(
      ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      })
    );
  } catch (error) {
    response = await withTimeout(
      ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      })
    );
  }


  return JSON.parse(response.text);
};

module.exports = {
  analyzeResumeWithAI,
};
