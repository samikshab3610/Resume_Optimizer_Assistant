import { Link } from "react-router-dom";

function Result() {
  const currentAnalysis = JSON.parse(localStorage.getItem("currentAnalysis") || "{}");
  const currentAnalysisResult = JSON.parse(localStorage.getItem("currentAnalysisResult") || "null");

  // ats score variable
  const atsScore = Number(currentAnalysisResult?.score || currentAnalysisResult?.atsScore || 85);

  //score interpretation
  const getScoreInterpretation = (score) => {
    if (score >= 85) {
      return {
        title: "Excellent Match!",
        description: "Your resume is strongly aligned with the job requirements.",
      };
    }

    if (score >= 70) {
      return {
        title: "Good Match!",
        description: "Your resume shows solid alignment with the job requirements.",
      };
    }

    if (score >= 50) {
      return {
        title: "Needs Improvement",
        description: "Your resume matches some requirements but needs stronger keyword and experience alignment.",
      };
    }

    return {
      title: "Low Match",
      description: "Your resume needs significant improvements to align with this job description.",
    };
  };

  //score interpretaion variable
  const scoreInterpretation = getScoreInterpretation(atsScore);

  //score breakdown variable
  const scoreBreakdown = currentAnalysisResult?.scoreBreakdown || {
    keywordsMatch: atsScore,
    formatQuality: atsScore,
    skillsRelevance: atsScore,
    experienceMatch: atsScore,
  };

  //hardcoded missing keywords
  const missingKeywords = currentAnalysisResult?.missingKeywords || [
    "Python",
    "Machine Learning",
    "AWS",
    "Agile",
    "Docker",
    "CI/CD",
  ];

  //hardcoded matched keywords
  const matchedKeywords = currentAnalysisResult?.matchedKeywords || [
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "SQL",
    "API",
  ];


  // dynamic keyword matching
  const totalKeywords = matchedKeywords.length + missingKeywords.length;
  const keywordsFoundText =
    totalKeywords > 0 ? `${matchedKeywords.length} of ${totalKeywords}` : "0 of 0";

  const matchRate =
    totalKeywords > 0 ? Math.round((matchedKeywords.length / totalKeywords) * 100) : 0;


  // hardcoded suggestions  
  const suggestions = currentAnalysisResult?.suggestions || [
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
  ];


  const analysisDate = currentAnalysis.timestamp
    ? new Date(currentAnalysis.timestamp).toLocaleDateString()
    : "January 15, 2025";

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
              <div className="ats-score" id="atsScore">{atsScore}</div>
              <div className="score-label">ATS Score</div>
            </div>
            <div className="score-interpretation" id="scoreInterpretation">
              <h3>{scoreInterpretation.title}</h3>
              <p>{scoreInterpretation.description}</p>
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


              {suggestions.map((suggestion) => (
                <div className="suggestion-item" key={suggestion.title}>
                  <div className="suggestion-icon">
                    <i className={suggestion.icon || "fas fa-lightbulb"}></i>
                  </div>
                  <div className="suggestion-content">
                    <h4>{suggestion.title}</h4>
                    <p>{suggestion.description}</p>
                  </div>
                </div>
              ))}
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
                  <span id="keywordsFound">{keywordsFoundText}</span>
                </div>
                <div className="detail-item">
                  <strong>Match Rate:</strong>
                  <span id="matchRate">{matchRate}%</span>
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
                  <div className="score-fill" style={{ width: `${scoreBreakdown.keywordsMatch}%` }}></div>
                </div>
                <span className="score-text">{scoreBreakdown.keywordsMatch}%</span>
              </div>
            </div>

            <div className="breakdown-item">
              <div className="breakdown-header">
                <i className="fas fa-align-left"></i>
                <span>Format Quality</span>
              </div>
              <div className="breakdown-score">
                <div className="score-bar">
                  <div className="score-fill" style={{ width: `${scoreBreakdown.formatQuality}%` }}></div>
                </div>
                <span className="score-text">{scoreBreakdown.formatQuality}%</span>
              </div>
            </div>

            <div className="breakdown-item">
              <div className="breakdown-header">
                <i className="fas fa-graduation-cap"></i>
                <span>Skills Relevance</span>
              </div>
              <div className="breakdown-score">
                <div className="score-bar">
                  <div className="score-fill" style={{ width: `${scoreBreakdown.skillsRelevance}%` }}></div>
                </div>
                <span className="score-text">{scoreBreakdown.skillsRelevance}%</span>
              </div>
            </div>

            <div className="breakdown-item">
              <div className="breakdown-header">
                <i className="fas fa-briefcase"></i>
                <span>Experience Match</span>
              </div>
              <div className="breakdown-score">
                <div className="score-bar">
                  <div className="score-fill" style={{ width: `${scoreBreakdown.experienceMatch}%` }}></div>
                </div>
                <span className="score-text">{scoreBreakdown.experienceMatch}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="result-actions">
          <Link to="/dashboard" className="btn btn-primary">
            <i className="fas fa-tachometer-alt"></i> View Dashboard
          </Link>
          <button className="btn btn-secondary" type="button" onClick={downloadReport}>
            <i className="fas fa-download"></i> Download Report
          </button>
          <Link to="/upload" className="btn btn-outline">
            <i className="fas fa-upload"></i> Analyze Another Resume
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Result;
