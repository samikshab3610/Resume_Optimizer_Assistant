import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [resumeHistory, setResumeHistory] = useState(
    JSON.parse(localStorage.getItem("resumeHistory") || "[]")
  );

  const [quizHistory, setQuizHistory] = useState(
    JSON.parse(localStorage.getItem("quizHistory") || "[]")
  );

  const totalAnalyses = resumeHistory.length;
  const totalQuizzes = quizHistory.length;

  const averageScore =
    totalAnalyses > 0
      ? Math.round(
          resumeHistory.reduce((sum, item) => sum + Number(item.atsScore || 0), 0) /
            totalAnalyses
        )
      : "--";

  const bestQuizScore =
    totalQuizzes > 0
      ? `${Math.max(...quizHistory.map((item) => Number(item.totalScore || 0)))}%`
      : "--";

  const exportData = () => {
    const data = {
      resumeHistory,
      quizHistory,
    };

    console.log("Export data:", data);
    alert("Export logic will be added later.");
  };

  const clearResumeHistory = () => {
    localStorage.removeItem("resumeHistory");
    setResumeHistory([]);
  };

  const clearQuizHistory = () => {
    localStorage.removeItem("quizHistory");
    setQuizHistory([]);
  };

  return (
    <main style={{ marginTop: "70px", minHeight: "90vh", padding: "2rem" }}>
      <div className="container">
        <div className="dashboard-header">
          <h1>
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </h1>
          <p>Track your resume optimization progress and quiz performance</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3><i className="fas fa-file-alt"></i> Resume Analyses</h3>
            <div className="stat-number">{totalAnalyses}</div>
            <p>Total resumes analyzed</p>
          </div>

          <div className="dashboard-card">
            <h3><i className="fas fa-brain"></i> Quizzes Taken</h3>
            <div className="stat-number">{totalQuizzes}</div>
            <p>Skills assessments completed</p>
          </div>

          <div className="dashboard-card">
            <h3><i className="fas fa-chart-line"></i> Average ATS Score</h3>
            <div className="stat-number">{averageScore}</div>
            <p>Across all analyses</p>
          </div>

          <div className="dashboard-card">
            <h3><i className="fas fa-trophy"></i> Best Quiz Score</h3>
            <div className="stat-number">{bestQuizScore}</div>
            <p>Highest quiz performance</p>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/upload" className="btn btn-primary">
              <i className="fas fa-upload"></i>
              Analyze New Resume
            </Link>
            <Link to="/quiz" className="btn btn-secondary">
              <i className="fas fa-brain"></i>
              Take Skills Quiz
            </Link>
            <button className="btn btn-outline" onClick={exportData}>
              <i className="fas fa-download"></i>
              Export Data
            </button>
          </div>
        </div>

        <div className="history-section">
          <div className="section-header">
            <h2><i className="fas fa-history"></i> Resume Analysis History</h2>
            <button className="btn btn-outline btn-sm" onClick={clearResumeHistory}>
              <i className="fas fa-trash"></i> Clear History
            </button>
          </div>

          <div className="history-container">
            {resumeHistory.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-file-alt"></i>
                <h3>No Resume Analyses Yet</h3>
                <p>Start by analyzing your first resume to see results here.</p>
                <Link to="/upload" className="btn btn-primary">
                  <i className="fas fa-upload"></i>
                  Analyze Resume
                </Link>
              </div>
            ) : (
              resumeHistory.map((item) => (
                <div className="history-item" key={item.id}>
                  <h3>{item.jobTitle}</h3>
                  <p>{item.company}</p>
                  <p>ATS Score: {item.atsScore}</p>
                  <p>{item.date} {item.time}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="history-section">
          <div className="section-header">
            <h2><i className="fas fa-brain"></i> Quiz History</h2>
            <button className="btn btn-outline btn-sm" onClick={clearQuizHistory}>
              <i className="fas fa-trash"></i> Clear History
            </button>
          </div>

          <div className="history-container">
            {quizHistory.length === 0 ? (
              <div className="empty-state">
                <i className="fas fa-brain"></i>
                <h3>No Quizzes Taken Yet</h3>
                <p>Take your first skills assessment to track your progress.</p>
                <Link to="/quiz" className="btn btn-primary">
                  <i className="fas fa-brain"></i>
                  Take Quiz
                </Link>
              </div>
            ) : (
              quizHistory.map((item) => (
                <div className="history-item" key={item.id}>
                  <h3>Skills Quiz</h3>
                  <p>Score: {item.totalScore}%</p>
                  <p>Correct: {item.correctAnswers}/{item.totalQuestions}</p>
                  <p>{item.date} {item.time}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
