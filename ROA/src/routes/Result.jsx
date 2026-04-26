import { Link } from "react-router-dom";

const missingKeywords = ["Python", "Machine Learning", "AWS", "Agile", "Docker", "CI/CD"];
const matchedKeywords = ["JavaScript", "React", "Node.js", "Git", "SQL", "API"];

function Result() {
  const currentAnalysis = JSON.parse(localStorage.getItem("currentAnalysis") || "{}");

  const analysisDate = currentAnalysis.timestamp
    ? new Date(currentAnalysis.timestamp).toLocaleDateString()
    : "January 15, 2025";

  const saveToHistory = () => {
    const resumeHistory = JSON.parse(localStorage.getItem("resumeHistory") || "[]");

    resumeHistory.push({
      id: Date.now(),
      atsScore: 85,
      jobTitle: currentAnalysis.jobTitle || "Software Engineer",
      company: currentAnalysis.company || "Tech Corp",
      fileName: currentAnalysis.fileName || "Pasted Resume Text",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      matchedKeywords,
      missingKeywords,
    });

    localStorage.setItem("resumeHistory", JSON.stringify(resumeHistory));
    alert("Analysis saved to dashboard!");
  };

  const downloadReport = () => {
    alert("Report download will be added in a later phase.");
  };

  return (
    <main style={{ marginTop: "70px", minHeight: "90vh", padding: "2rem" }}>
      <div className="result-container">
        <div className="result-header">
          <h1><i className="fas fa-chart-line"></i> Resume Analysis Results</h1>
          <p>Here's how your resume performs against the job description</p>

          <div className="ats-score-display">
            <div className="score-circle-large">
              <div className="ats-score" id="atsScore">85</div>
              <div className="score-label">ATS Score</div>
            </div>
            <div className="score-interpretation" id="scoreInterpretation">
              <h3>Good Match!</h3>
              <p>Your resume shows strong alignment with the job requirements.</p>
            </div>
          </div>
        </div>

        <div className="result-grid">
          <div className="result-section">
            <h3><i className="fas fa-key"></i> Missing Keywords</h3>
            <p>Important keywords from the job description that should be added to your resume:</p>
            <div className="keyword-list" id="missingKeywords">
              {missingKeywords.map((keyword) => (
                <span className="keyword-tag missing" key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>

          <div className="result-section">
            <h3><i className="fas fa-check-circle"></i> Matched Keywords</h3>
            <p>Keywords from the job description that are already in your resume:</p>
            <div className="keyword-list" id="matchedKeywords">
              {matchedKeywords.map((keyword) => (
                <span className="keyword-tag matched" key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="analysis-details">
          <div className="detail-section">
            <h3><i className="fas fa-lightbulb"></i> Optimization Suggestions</h3>
            <div className="suggestions-list" id="suggestionsList">
              <div className="suggestion-item">
                <div className="suggestion-icon">
                  <i className="fas fa-plus-circle"></i>
                </div>
                <div className="suggestion-content">
                  <h4>Add Technical Skills</h4>
                  <p>Include Python, Machine Learning, and AWS in your skills section to match job requirements.</p>
                </div>
              </div>

              <div className="suggestion-item">
                <div className="suggestion-icon">
                  <i className="fas fa-edit"></i>
                </div>
                <div className="suggestion-content">
                  <h4>Enhance Experience Descriptions</h4>
                  <p>Incorporate Agile methodology and CI/CD pipeline experience in your work history.</p>
                </div>
              </div>

              <div className="suggestion-item">
                <div className="suggestion-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="suggestion-content">
                  <h4>Quantify Achievements</h4>
                  <p>Add specific metrics and numbers to demonstrate the impact of your work.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3><i className="fas fa-file-alt"></i> Resume & Job Details</h3>
            <div className="details-grid">
              <div className="detail-card">
                <h4><i className="fas fa-briefcase"></i> Job Information</h4>
                <div className="detail-item">
                  <strong>Position:</strong>
                  <span id="jobTitle">{currentAnalysis.jobTitle || "Software Engineer"}</span>
                </div>
                <div className="detail-item">
                  <strong>Company:</strong>
                  <span id="companyName">{currentAnalysis.company || "Tech Corp"}</span>
                </div>
                <div className="detail-item">
                  <strong>Analysis Date:</strong>
                  <span id="analysisDate">{analysisDate}</span>
                </div>
              </div>

              <div className="detail-card">
                <h4><i className="fas fa-file"></i> Resume Information</h4>
                <div className="detail-item">
                  <strong>File Name:</strong>
                  <span id="resumeFileName">{currentAnalysis.fileName || "Pasted Resume Text"}</span>
                </div>
                <div className="detail-item">
                  <strong>Keywords Found:</strong>
                  <span id="keywordsFound">6 of 12</span>
                </div>
                <div className="detail-item">
                  <strong>Match Rate:</strong>
                  <span id="matchRate">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="score-breakdown">
          <h3><i className="fas fa-analytics"></i> Score Breakdown</h3>
          <div className="breakdown-grid">
            <div className="breakdown-item">
              <div className="breakdown-header">
                <i className="fas fa-key"></i>
                <span>Keywords Match</span>
              </div>
              <div className="breakdown-score">
                <div className="score-bar">
                  <div className="score-fill" style={{ width: "50%" }}></div>
                </div>
                <span className="score-text">50%</span>
              </div>
            </div>

            <div className="breakdown-item">
              <div className="breakdown-header">
                <i className="fas fa-align-left"></i>
                <span>Format Quality</span>
              </div>
              <div className="breakdown-score">
                <div className="score-bar">
                  <div className="score-fill" style={{ width: "95%" }}></div>
                </div>
                <span className="score-text">95%</span>
              </div>
            </div>

            <div className="breakdown-item">
              <div className="breakdown-header">
                <i className="fas fa-graduation-cap"></i>
                <span>Skills Relevance</span>
              </div>
              <div className="breakdown-score">
                <div className="score-bar">
                  <div className="score-fill" style={{ width: "75%" }}></div>
                </div>
                <span className="score-text">75%</span>
              </div>
            </div>

            <div className="breakdown-item">
              <div className="breakdown-header">
                <i className="fas fa-briefcase"></i>
                <span>Experience Match</span>
              </div>
              <div className="breakdown-score">
                <div className="score-bar">
                  <div className="score-fill" style={{ width: "80%" }}></div>
                </div>
                <span className="score-text">80%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn btn-primary" type="button" onClick={saveToHistory}>
            <i className="fas fa-save"></i> Save to Dashboard
          </button>
          <button className="btn btn-secondary" type="button" onClick={downloadReport}>
            <i className="fas fa-download"></i> Download Report
          </button>
          <Link to="/upload" className="btn btn-outline">
            <i className="fas fa-upload"></i> Analyze Another Resume
          </Link>
          <Link to="/dashboard" className="btn btn-outline">
            <i className="fas fa-tachometer-alt"></i> View Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Result;
