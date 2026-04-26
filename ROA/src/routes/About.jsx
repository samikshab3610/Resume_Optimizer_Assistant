import { Link } from "react-router-dom";

function About() {
  return (
    <main style={{ marginTop: "70px" }}>
      <section className="hero-about">
        <div className="container">
          <div className="about-content">
            <h1>About Resume Optimizer</h1>
            <p className="lead">
              Empowering job seekers with AI-powered resume optimization and skills assessment tools
              to land their dream jobs.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                We believe that everyone deserves a fair chance at their dream job. Our mission is to
                level the playing field by providing cutting-edge resume optimization tools that help
                job seekers navigate the complex world of Applicant Tracking Systems (ATS) and modern
                recruitment processes.
              </p>
              <p>
                Through advanced AI analysis and comprehensive skills assessments, we empower
                individuals to present their best professional selves and increase their chances of
                landing interviews.
              </p>
            </div>

            <div className="mission-visual">
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <h2>Our Story</h2>

          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="timeline-content">
                <h3>The Problem</h3>
                <p>
                  We noticed that talented professionals were struggling to get past ATS systems,
                  despite having excellent qualifications. Traditional resume advice wasn't keeping
                  up with modern recruitment technology.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="timeline-content">
                <h3>The Solution</h3>
                <p>
                  We developed an AI-powered platform that analyzes resumes against job descriptions,
                  providing specific, actionable feedback to improve ATS compatibility and keyword
                  optimization.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="timeline-content">
                <h3>The Impact</h3>
                <p>
                  Today, thousands of job seekers use our platform to optimize their resumes and
                  improve their job search success rates. We're proud to be part of their career
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Accessibility</h3>
              <p>
                We believe career advancement tools should be accessible to everyone, regardless of
                their background or experience level.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously improve our algorithms and features to stay ahead of evolving
                recruitment technologies and practices.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Privacy</h3>
              <p>
                Your resume data and personal information are secure with us. We prioritize user
                privacy and data protection.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Empowerment</h3>
              <p>
                We're passionate about empowering individuals to take control of their career journey
                and achieve their professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Resumes Analyzed</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">25,000+</div>
              <div className="stat-label">Active Users</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Success Rate</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Resume?</h2>
            <p>
              Join thousands of job seekers who have improved their career prospects with our
              AI-powered tools.
            </p>

            <div className="cta-buttons">
              <Link to="/upload" className="btn btn-primary">
                <i className="fas fa-upload"></i>
                Start Optimizing
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

export default About;
