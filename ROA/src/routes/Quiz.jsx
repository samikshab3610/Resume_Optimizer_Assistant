import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    category: "Resume Writing",
    question: "What is the ideal length for a professional resume?",
    options: [
      "Always one page regardless of experience",
      "1-2 pages for most professionals, 3+ for senior roles",
      "As long as needed to include everything",
      "Exactly two pages always",
    ],
    correct: 1,
  },
  {
    id: 2,
    category: "ATS Optimization",
    question: "What does ATS stand for in job applications?",
    options: [
      "Automated Tracking System",
      "Applicant Tracking System",
      "Advanced Technology Scanner",
      "Application Testing Software",
    ],
    correct: 1,
  },
  {
    id: 3,
    category: "Keywords",
    question: "Where should you primarily source keywords for your resume?",
    options: [
      "Generic industry websites",
      "The specific job description you're applying for",
      "Your previous job descriptions",
      "Popular resume templates",
    ],
    correct: 1,
  },
  {
    id: 4,
    category: "Formatting",
    question: "Which file format is generally best for ATS compatibility?",
    options: ["PDF only", "Word document only", "Both PDF and Word are usually fine", "Plain text only"],
    correct: 2,
  },
  {
    id: 5,
    category: "Resume Writing",
    question: "What should be the focus of your resume bullet points?",
    options: [
      "Job responsibilities and duties",
      "Achievements and quantifiable results",
      "Personal interests and hobbies",
      "Educational background details",
    ],
    correct: 1,
  },
  {
    id: 6,
    category: "ATS Optimization",
    question: "Which of these can negatively impact ATS readability?",
    options: [
      "Using standard fonts like Arial or Calibri",
      "Including relevant keywords",
      "Complex graphics and unusual formatting",
      "Having clear section headers",
    ],
    correct: 2,
  },
  {
    id: 7,
    category: "Job Search",
    question: "How should you customize your resume for different job applications?",
    options: [
      "Use the same resume for all applications",
      "Only change the objective statement",
      "Tailor keywords and relevant experience for each role",
      "Only change the contact information",
    ],
    correct: 2,
  },
  {
    id: 8,
    category: "Keywords",
    question: "How should you incorporate keywords into your resume?",
    options: [
      "List them all in a separate keywords section",
      "Naturally integrate them into your experience and skills",
      "Repeat them as many times as possible",
      "Only use them in the summary section",
    ],
    correct: 1,
  },
  {
    id: 9,
    category: "Formatting",
    question: "What's the best practice for resume section headers?",
    options: [
      "Use creative, unique names for sections",
      "Use standard, recognizable section names",
      "Avoid section headers altogether",
      "Use only symbols instead of text",
    ],
    correct: 1,
  },
  {
    id: 10,
    category: "Resume Writing",
    question: "Which information should NOT be included on a modern resume?",
    options: [
      "Professional email address",
      "Relevant work experience",
      "Photo, age, and marital status",
      "Key skills and achievements",
    ],
    correct: 2,
  },
];

function Quiz() {
  const [screen, setScreen] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [results, setResults] = useState(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const startQuiz = () => {
    setQuizStartTime(new Date());
    setScreen("questions");
  };

  const selectOption = (optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (userAnswers[currentQuestion] === undefined) {
      alert("Please select an answer before proceeding.");
      return;
    }

    setCurrentQuestion((current) => current + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((current) => current - 1);
  };

  const calculateResults = () => {
    let correctAnswers = 0;
    const categoryScores = {};

    questions.forEach((item, index) => {
      const isCorrect = userAnswers[index] === item.correct;

      if (isCorrect) correctAnswers++;

      if (!categoryScores[item.category]) {
        categoryScores[item.category] = { correct: 0, total: 0 };
      }

      categoryScores[item.category].total++;

      if (isCorrect) {
        categoryScores[item.category].correct++;
      }
    });

    return {
      totalScore: Math.round((correctAnswers / questions.length) * 100),
      correctAnswers,
      totalQuestions: questions.length,
      categoryScores,
      duration: Math.round((new Date() - quizStartTime) / 1000 / 60),
      timestamp: new Date().toISOString(),
    };
  };

  const submitQuiz = () => {
    if (userAnswers[currentQuestion] === undefined) {
      alert("Please select an answer before submitting.");
      return;
    }

    const calculatedResults = calculateResults();
    setResults(calculatedResults);
    setScreen("results");
  };

  const getScoreText = () => {
    if (results.totalScore >= 90) {
      return {
        message: "Excellent!",
        description: "You have outstanding knowledge of resume optimization and ATS best practices.",
      };
    }

    if (results.totalScore >= 80) {
      return {
        message: "Great Job!",
        description: "You have a solid understanding of resume optimization with room for minor improvements.",
      };
    }

    if (results.totalScore >= 70) {
      return {
        message: "Good Work!",
        description: "You have good basic knowledge but could benefit from learning more about ATS optimization.",
      };
    }

    if (results.totalScore >= 60) {
      return {
        message: "Keep Learning!",
        description: "You have some understanding but should focus on improving your resume optimization knowledge.",
      };
    }

    return {
      message: "Room for Improvement",
      description: "Consider studying resume best practices and ATS optimization techniques.",
    };
  };

  const generateRecommendations = () => {
    const recommendations = [];

    Object.entries(results.categoryScores).forEach(([category, scores]) => {
      const percentage = (scores.correct / scores.total) * 100;

      if (percentage < 80) {
        const recommendationsByCategory = {
          "Resume Writing": {
            icon: "fas fa-edit",
            title: "Improve Resume Writing Skills",
            description: "Focus on writing achievement-based bullet points and structuring your resume effectively.",
          },
          "ATS Optimization": {
            icon: "fas fa-robot",
            title: "Learn ATS Best Practices",
            description: "Study how Applicant Tracking Systems work and optimize your resume format accordingly.",
          },
          Keywords: {
            icon: "fas fa-key",
            title: "Master Keyword Strategy",
            description: "Learn how to identify and naturally incorporate relevant keywords from job descriptions.",
          },
          Formatting: {
            icon: "fas fa-align-left",
            title: "Optimize Resume Format",
            description: "Use ATS-friendly formatting with clear sections and standard fonts.",
          },
          "Job Search": {
            icon: "fas fa-search",
            title: "Enhance Job Search Strategy",
            description: "Learn effective job search techniques and how to tailor applications for specific roles.",
          },
        };

        recommendations.push(recommendationsByCategory[category]);
      }
    });

    if (results.totalScore < 70) {
      recommendations.push({
        icon: "fas fa-book",
        title: "Study Resume Best Practices",
        description: "Consider taking a comprehensive course on modern resume writing and job search strategies.",
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        icon: "fas fa-star",
        title: "Maintain Your Excellence",
        description: "Keep up with the latest trends in resume optimization and continue refining your approach.",
      });
    }

    return recommendations;
  };

  const saveResults = () => {
    const quizHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");

    quizHistory.push({
      ...results,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });

    localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
    alert("Results saved to your dashboard!");
  };

  const retakeQuiz = () => {
    setScreen("start");
    setCurrentQuestion(0);
    setUserAnswers([]);
    setQuizStartTime(null);
    setResults(null);
  };

  return (
    <main style={{ marginTop: "70px", minHeight: "90vh", padding: "2rem" }}>
      <div className="quiz-container">
        {screen === "start" && (
          <div id="quizStart" className="quiz-start">
            <div className="quiz-header">
              <h1><i className="fas fa-brain"></i> Skills Assessment Quiz</h1>
              <p>Test your knowledge and identify areas for improvement in your resume</p>
            </div>

            <div className="quiz-info">
              <div className="info-grid">
                <div className="info-card"><i className="fas fa-clock"></i><h3>Duration</h3><p>10-15 minutes</p></div>
                <div className="info-card"><i className="fas fa-question-circle"></i><h3>Questions</h3><p>10 multiple choice</p></div>
                <div className="info-card"><i className="fas fa-chart-bar"></i><h3>Scoring</h3><p>Instant results</p></div>
              </div>

              <div className="quiz-categories">
                <h3>Topics Covered:</h3>
                <div className="category-tags">
                  <span className="category-tag">Resume Writing</span>
                  <span className="category-tag">ATS Optimization</span>
                  <span className="category-tag">Keywords</span>
                  <span className="category-tag">Formatting</span>
                  <span className="category-tag">Job Search</span>
                </div>
              </div>

              <button className="btn btn-primary btn-large" type="button" onClick={startQuiz}>
                <i className="fas fa-play"></i>
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {screen === "questions" && (
          <div id="quizQuestions" className="quiz-questions">
            <div className="quiz-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="progress-text">Question {currentQuestion + 1} of {questions.length}</span>
            </div>

            <div className="question-container">
              <div className="question-card">
                <div className="question-header">
                  <div className="question-number">Question {currentQuestion + 1}</div>
                  <div className="question-category">{question.category}</div>
                </div>

                <div className="question-text">{question.question}</div>

                <div className="options">
                  {question.options.map((option, index) => (
                    <div
                      key={option}
                      className={`option ${userAnswers[currentQuestion] === index ? "selected" : ""}`}
                      onClick={() => selectOption(index)}
                    >
                      <input
                        type="radio"
                        name={`question${question.id}`}
                        value={index}
                        checked={userAnswers[currentQuestion] === index}
                        onChange={() => selectOption(index)}
                      />
                      <div className="option-text">{option}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="quiz-navigation">
              {currentQuestion > 0 && (
                <button className="btn btn-secondary" type="button" onClick={prevQuestion}>
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
              )}

              {currentQuestion < questions.length - 1 && (
                <button className="btn btn-primary" type="button" onClick={nextQuestion}>
                  Next <i className="fas fa-arrow-right"></i>
                </button>
              )}

              {currentQuestion === questions.length - 1 && (
                <button className="btn btn-success" type="button" onClick={submitQuiz}>
                  <i className="fas fa-check"></i> Submit Quiz
                </button>
              )}
            </div>
          </div>
        )}

        {screen === "results" && results && (
          <div id="quizResults" className="quiz-results">
            <div className="results-header">
              <div className="score-circle">
                <div className="score-number">{results.totalScore}%</div>
                <div className="score-label">Score</div>
              </div>
              <h2>{getScoreText().message}</h2>
              <p>{getScoreText().description}</p>
            </div>

            <div className="results-breakdown">
              <h3>Results Breakdown</h3>
              <div className="breakdown-grid">
                {Object.entries(results.categoryScores).map(([category, scores]) => {
                  const percentage = Math.round((scores.correct / scores.total) * 100);
                  const scoreClass =
                    percentage >= 90 ? "excellent" : percentage >= 80 ? "good" : percentage >= 70 ? "fair" : "poor";

                  return (
                    <div className="breakdown-item" key={category}>
                      <h4>{category}</h4>
                      <div className={`breakdown-score ${scoreClass}`}>{percentage}%</div>
                      <div className="breakdown-label">{scores.correct}/{scores.total} correct</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="results-recommendations">
              <h3>Recommendations</h3>
              <div className="recommendations-list">
                {generateRecommendations().map((recommendation) => (
                  <div className="recommendation-item" key={recommendation.title}>
                    <h4><i className={recommendation.icon}></i> {recommendation.title}</h4>
                    <p>{recommendation.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="results-actions">
              <button className="btn btn-primary" type="button" onClick={saveResults}>
                <i className="fas fa-save"></i> Save to Dashboard
              </button>
              <button className="btn btn-secondary" type="button" onClick={retakeQuiz}>
                <i className="fas fa-redo"></i> Retake Quiz
              </button>
              <Link to="/dashboard" className="btn btn-outline">
                <i className="fas fa-tachometer-alt"></i> View Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Quiz;
