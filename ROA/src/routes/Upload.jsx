import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const [formData, setFormData] = useState({
    resumeText: "",
    jobTitle: "",
    company: "",
    jobDescription: "",
  });

  const loadingSteps = [
    "Parsing resume content",
    "Analyzing keywords",
    "Calculating ATS score",
    "Generating suggestions",
  ];

  const updateField = (event) => {
    const { id, value } = event.target;
    setFormData((current) => ({ ...current, [id]: value }));
  };

  const handleFile = (file) => {
    setSelectedFile(file);
  };

  const removeFile = (event) => {
    event.stopPropagation();
    setSelectedFile(null);
  };

  const nextStep = () => {
    if (currentStep === 1 && !selectedFile && !formData.resumeText.trim()) {
      alert("Please upload a resume file or paste resume text to continue.");
      return;
    }

    if (currentStep === 2 && !formData.jobDescription.trim()) {
      alert("Please enter the job description to continue.");
      return;
    }

    if (currentStep === 2) {
      setCurrentStep(3);
      startAnalysis();
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const startAnalysis = () => {
    setAnalysisComplete(false);
    setLoadingStep(0);

    loadingSteps.forEach((_, index) => {
      setTimeout(() => {
        setLoadingStep(index);
      }, index * 1500);
    });

    setTimeout(() => {
      setAnalysisComplete(true);
    }, loadingSteps.length * 1500 + 1000);
  };

  const viewResults = () => {
    const analysisData = {
      ...formData,
      fileName: selectedFile ? selectedFile.name : null,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("currentAnalysis", JSON.stringify(analysisData));
    navigate("/result");
  };

  const startOver = () => {
    setCurrentStep(1);
    setSelectedFile(null);
    setLoadingStep(0);
    setAnalysisComplete(false);
    setFormData({
      resumeText: "",
      jobTitle: "",
      company: "",
      jobDescription: "",
    });
  };

  return (
    <main style={{ marginTop: "70px", minHeight: "90vh", padding: "2rem" }}>
      <div className="container">
        <div className="upload-container">
          <div className="upload-header">
            <h1>Resume Optimization</h1>
            <p>Upload your resume and job description to get personalized ATS optimization suggestions</p>
          </div>

          <div className="upload-steps">
            <div className="step-indicator">
              {[1, 2, 3].map((step) => (
                <div key={step} className={`step ${currentStep >= step ? "active" : ""}`}>
                  <div className="step-number">{step}</div>
                  <span>
                    {step === 1 && "Upload Resume"}
                    {step === 2 && "Job Description"}
                    {step === 3 && "Analysis"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form id="optimizationForm" className="upload-form">
            <div className={`form-step ${currentStep === 1 ? "active" : ""}`} id="step1">
              <div className="form-section">
                <h3><i className="fas fa-file-upload"></i> Upload Your Resume</h3>
                <p>Upload your resume in PDF, DOC, DOCX, or image format</p>

                <div className="upload-options">
                  <div
                    className={`file-upload ${isDragOver ? "dragover" : ""}`}
                    id="fileUpload"
                    onClick={() => document.getElementById("resumeFile").click()}
                    onDragOver={(event) => {
                      event.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={(event) => {
                      event.preventDefault();
                      setIsDragOver(false);
                    }}
                    onDrop={(event) => {
                      event.preventDefault();
                      setIsDragOver(false);
                      if (event.dataTransfer.files.length > 0) {
                        handleFile(event.dataTransfer.files[0]);
                      }
                    }}
                  >
                    {!selectedFile && (
                      <>
                        <i className="fas fa-cloud-upload-alt"></i>
                        <h4>Drag & Drop your resume here</h4>
                        <p>or click to browse files</p>
                      </>
                    )}

                    <input
                      type="file"
                      id="resumeFile"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      hidden
                      onChange={(event) => {
                        if (event.target.files[0]) {
                          handleFile(event.target.files[0]);
                        }
                      }}
                    />

                    {selectedFile && (
                      <div className="file-info" id="fileInfo" style={{ display: "flex" }}>
                        <i className="fas fa-file"></i>
                        <span className="file-name">
                          {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                        <button type="button" className="remove-file" onClick={removeFile}>
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="upload-divider">
                    <span>OR</span>
                  </div>

                  <div className="text-input-section">
                    <label htmlFor="resumeText">Paste Resume Text</label>
                    <textarea
                      id="resumeText"
                      className="form-control"
                      rows="10"
                      placeholder="Paste your resume content here..."
                      value={formData.resumeText}
                      onChange={updateField}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  Next Step <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className={`form-step ${currentStep === 2 ? "active" : ""}`} id="step2">
              <div className="form-section">
                <h3><i className="fas fa-briefcase"></i> Job Description</h3>
                <p>Paste the job description you're applying for to get targeted optimization suggestions</p>

                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    className="form-control"
                    placeholder="e.g., Software Engineer, Marketing Manager"
                    value={formData.jobTitle}
                    onChange={updateField}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    className="form-control"
                    placeholder="e.g., Google, Microsoft"
                    value={formData.company}
                    onChange={updateField}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="jobDescription">Job Description</label>
                  <textarea
                    id="jobDescription"
                    className="form-control"
                    rows="12"
                    placeholder="Paste the complete job description here..."
                    required
                    value={formData.jobDescription}
                    onChange={updateField}
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={prevStep}>
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  Analyze Resume <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            <div className={`form-step ${currentStep === 3 ? "active" : ""}`} id="step3">
              <div className="analysis-section">
                {!analysisComplete && (
                  <div className="analysis-loading" id="analysisLoading">
                    <div className="loading-animation">
                      <div className="loading-spinner"></div>
                      <h3>Analyzing Your Resume</h3>
                      <p>Our AI is comparing your resume with the job description...</p>

                      <div className="loading-steps">
                        {loadingSteps.map((step, index) => (
                          <div
                            key={step}
                            className={`loading-step ${loadingStep === index ? "active" : ""}`}
                          >
                            <i
                              className={`fas ${
                                index === 0
                                  ? "fa-file-text"
                                  : index === 1
                                    ? "fa-search"
                                    : index === 2
                                      ? "fa-chart-bar"
                                      : "fa-lightbulb"
                              }`}
                            ></i>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {analysisComplete && (
                  <div className="analysis-complete" id="analysisComplete" style={{ display: "block" }}>
                    <div className="success-message">
                      <i className="fas fa-check-circle"></i>
                      <h3>Analysis Complete!</h3>
                      <p>Your resume has been successfully analyzed</p>
                    </div>

                    <div className="form-actions">
                      <button type="button" className="btn btn-primary" onClick={viewResults}>
                        <i className="fas fa-chart-line"></i>
                        View Results
                      </button>
                      <button type="button" className="btn btn-secondary" onClick={startOver}>
                        <i className="fas fa-redo"></i>
                        Analyze Another Resume
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Upload;
