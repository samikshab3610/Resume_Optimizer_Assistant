import { Link } from "react-router-dom";

function Features() {
  return (
    <main style={{ marginTop: "70px" }}>
      <section className="hero-features">
        <div className="container">
          <div className="features-hero-content">
            <h1>Powerful Features for Career Success</h1>
            <p className="lead">
              Discover all the tools and capabilities that make Resume Optimizer the ultimate platform
              for job seekers.
            </p>
          </div>
        </div>
      </section>

      <section className="features-overview">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card-large">
              <div className="feature-icon"><i className="fas fa-robot"></i></div>
              <h3>AI-Powered Analysis</h3>
              <p>
                Our advanced AI algorithms analyze your resume against job descriptions, providing
                detailed insights and optimization suggestions.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Keyword matching and optimization</li>
                <li><i className="fas fa-check"></i> ATS compatibility scoring</li>
                <li><i className="fas fa-check"></i> Content relevance analysis</li>
                <li><i className="fas fa-check"></i> Format optimization recommendations</li>
              </ul>
            </div>

            <div className="feature-card-large">
              <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Comprehensive Scoring</h3>
              <p>
                Get detailed ATS scores and breakdowns to understand exactly how your resume performs
                against modern recruitment systems.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Overall ATS compatibility score</li>
                <li><i className="fas fa-check"></i> Keyword density analysis</li>
                <li><i className="fas fa-check"></i> Skills relevance scoring</li>
                <li><i className="fas fa-check"></i> Experience match rating</li>
              </ul>
            </div>

            <div className="feature-card-large">
              <div className="feature-icon"><i className="fas fa-brain"></i></div>
              <h3>Skills Assessment</h3>
              <p>
                Test your knowledge with interactive quizzes covering resume writing, ATS optimization,
                and job search strategies.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Multiple choice questions</li>
                <li><i className="fas fa-check"></i> Instant feedback and explanations</li>
                <li><i className="fas fa-check"></i> Progress tracking</li>
                <li><i className="fas fa-check"></i> Personalized recommendations</li>
              </ul>
            </div>

            <div className="feature-card-large">
              <div className="feature-icon"><i className="fas fa-tachometer-alt"></i></div>
              <h3>Personal Dashboard</h3>
              <p>
                Track your progress, view analysis history, and monitor your improvement over time with
                our comprehensive dashboard.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Analysis history tracking</li>
                <li><i className="fas fa-check"></i> Quiz performance metrics</li>
                <li><i className="fas fa-check"></i> Progress visualization</li>
                <li><i className="fas fa-check"></i> Data export capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-features">
        <div className="container">
          <h2>Feature Deep Dive</h2>

          <div className="feature-detail">
            <div className="feature-detail-content">
              <div className="feature-detail-text">
                <h3><i className="fas fa-upload"></i> Multiple Upload Formats</h3>
                <p>
                  Upload your resume in various formats including PDF, DOC, DOCX, or even paste text
                  directly. Our system handles all major file types and extracts content accurately.
                </p>
                <div className="feature-benefits">
                  <div className="benefit-item"><i className="fas fa-file-pdf"></i><span>PDF Support</span></div>
                  <div className="benefit-item"><i className="fas fa-file-word"></i><span>Word Documents</span></div>
                  <div className="benefit-item"><i className="fas fa-image"></i><span>Image Files</span></div>
                  <div className="benefit-item"><i className="fas fa-keyboard"></i><span>Text Input</span></div>
                </div>
              </div>

              <div className="feature-detail-visual">
                <div className="upload-demo">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Drag & Drop Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-detail reverse">
            <div className="feature-detail-content">
              <div className="feature-detail-text">
                <h3><i className="fas fa-key"></i> Smart Keyword Analysis</h3>
                <p>
                  Our AI identifies the most important keywords from job descriptions and compares them
                  with your resume, highlighting missing opportunities and successful matches.
                </p>

                <div className="keyword-example">
                  <div className="keyword-section">
                    <h4>Missing Keywords</h4>
                    <div className="keyword-tags">
                      <span className="keyword-tag missing">Python</span>
                      <span className="keyword-tag missing">Machine Learning</span>
                      <span className="keyword-tag missing">AWS</span>
                    </div>
                  </div>

                  <div className="keyword-section">
                    <h4>Matched Keywords</h4>
                    <div className="keyword-tags">
                      <span className="keyword-tag matched">JavaScript</span>
                      <span className="keyword-tag matched">React</span>
                      <span className="keyword-tag matched">Node.js</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-detail-visual">
                <div className="analysis-demo">
                  <div className="score-circle-demo">
                    <div className="score-number">85%</div>
                    <div className="score-label">Match Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-detail">
            <div className="feature-detail-content">
              <div className="feature-detail-text">
                <h3><i className="fas fa-lightbulb"></i> Actionable Recommendations</h3>
                <p>
                  Receive specific, actionable suggestions to improve your resume's ATS compatibility
                  and overall effectiveness. Each recommendation includes clear explanations and
                  implementation guidance.
                </p>

                <div className="recommendations-preview">
                  <div className="recommendation-item-preview">
                    <i className="fas fa-plus-circle"></i>
                    <div>
                      <h4>Add Technical Skills</h4>
                      <p>Include Python and AWS in your skills section</p>
                    </div>
                  </div>

                  <div className="recommendation-item-preview">
                    <i className="fas fa-edit"></i>
                    <div>
                      <h4>Enhance Descriptions</h4>
                      <p>Add quantifiable metrics to your achievements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-detail-visual">
                <div className="suggestions-demo">
                  <i className="fas fa-magic"></i>
                  <p>Smart Suggestions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quiz-features">
        <div className="container">
          <h2>Skills Assessment Features</h2>

          <div className="quiz-features-grid">
            <div className="quiz-feature">
              <div className="quiz-feature-icon"><i className="fas fa-question-circle"></i></div>
              <h3>Comprehensive Questions</h3>
              <p>
                10 carefully crafted multiple-choice questions covering resume writing, ATS
                optimization, formatting, and job search strategies.
              </p>
            </div>

            <div className="quiz-feature">
              <div className="quiz-feature-icon"><i className="fas fa-clock"></i></div>
              <h3>Timed Assessment</h3>
              <p>
                Complete the quiz at your own pace with automatic time tracking to measure your
                efficiency and knowledge retention.
              </p>
            </div>

            <div className="quiz-feature">
              <div className="quiz-feature-icon"><i className="fas fa-chart-bar"></i></div>
              <h3>Detailed Results</h3>
              <p>
                Get comprehensive results with category breakdowns, explanations for each answer, and
                personalized improvement recommendations.
              </p>
            </div>

            <div className="quiz-feature">
              <div className="quiz-feature-icon"><i className="fas fa-redo"></i></div>
              <h3>Retake Capability</h3>
              <p>
                Retake quizzes to track your improvement over time and reinforce your learning with
                updated questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-features">
        <div className="container">
          <h2>Dashboard Capabilities</h2>

          <div className="dashboard-preview">
            <div className="dashboard-stats">
              <div className="stat-card">
                <i className="fas fa-file-alt"></i>
                <div className="stat-info">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Resumes Analyzed</div>
                </div>
              </div>

              <div className="stat-card">
                <i className="fas fa-brain"></i>
                <div className="stat-info">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Quizzes Taken</div>
                </div>
              </div>

              <div className="stat-card">
                <i className="fas fa-chart-line"></i>
                <div className="stat-info">
                  <div className="stat-number">87%</div>
                  <div className="stat-label">Avg ATS Score</div>
                </div>
              </div>
            </div>

            <div className="dashboard-features-list">
              <h3>Track Everything</h3>
              <ul>
                <li><i className="fas fa-history"></i> Complete analysis history with timestamps</li>
                <li><i className="fas fa-trophy"></i> Quiz performance tracking and improvement metrics</li>
                <li><i className="fas fa-download"></i> Export all your data for personal records</li>
                <li><i className="fas fa-chart-area"></i> Visual progress charts and trends</li>
                <li><i className="fas fa-bookmark"></i> Save and organize your best-performing resumes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="security-features">
        <div className="container">
          <h2>Security & Privacy</h2>

          <div className="security-grid">
            <div className="security-feature">
              <div className="security-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Data Protection</h3>
              <p>
                Your resume data is encrypted and stored securely. We never share your personal
                information with third parties.
              </p>
            </div>

            <div className="security-feature">
              <div className="security-icon"><i className="fas fa-user-shield"></i></div>
              <h3>Privacy First</h3>
              <p>
                All analysis is performed with strict privacy controls. Your data remains confidential
                and is never used for training purposes.
              </p>
            </div>

            <div className="security-feature">
              <div className="security-icon"><i className="fas fa-trash-alt"></i></div>
              <h3>Data Control</h3>
              <p>
                You have full control over your data. Delete your information at any time or export it
                for your records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-features">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience These Features?</h2>
            <p>Start optimizing your resume today and take advantage of all our powerful features.</p>

            <div className="cta-buttons">
              <Link to="/upload" className="btn btn-primary">
                <i className="fas fa-upload"></i>
                Analyze Your Resume
              </Link>
              <Link to="/quiz" className="btn btn-secondary">
                <i className="fas fa-brain"></i>
                Take Skills Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Features;
