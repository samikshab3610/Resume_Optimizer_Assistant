import axiosInstance from "./axiosInstance";

export const analyzeResume = async ({ resumeFile, resumeText, jobTitle, company, jobDescription }) => {
  const formData = new FormData();

  if (resumeFile) {
    formData.append("resume", resumeFile);
  }

  formData.append("resumeText", resumeText || "");
  formData.append("jobTitle", jobTitle || "");
  formData.append("company", company || "");
  formData.append("jobDescription", jobDescription);

  const response = await axiosInstance.post("/resumes/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getResumeHistory = async () => {
  const response = await axiosInstance.get("/resumes/history");
  return response.data;
};

export const getResumeAnalysisById = async (analysisId) => {
  const response = await axiosInstance.get(`/resumes/${analysisId}`);
  return response.data;
};

export const deleteResumeAnalysis = async (analysisId) => {
  const response = await axiosInstance.delete(`/resumes/${analysisId}`);
  return response.data;
};
