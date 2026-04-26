import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Optimize Your Resume for Success</h1>
          <p className="hero-quote">
            "Your resume is your first impression. Make it count with our AI-powered optimization tools."
          </p>

          <div className="action-buttons">
            <Link to="/quiz" className="btn btn-primary">
              <i className="fas fa-brain"></i>
              Take Skills Quiz
            </Link>
            <Link to="/upload" className="btn btn-secondary">
              <i className="fas fa-upload"></i>
              Optimize Resume
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="resume-mockup">
            <i className="fas fa-file-alt"></i>
          </div>
        </div>
      </section>

      <section className="about-preview" id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            We help job seekers optimize their resumes using advanced ATS analysis and provide skill
            assessment through interactive quizzes. Our platform ensures your resume gets noticed by
            employers.
          </p>
          <Link to="/about" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </section>

      <section className="features-preview" id="features">
        <div className="container">
          <h2>Key Features</h2>

          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-chart-line"></i>
              <h3>ATS Score Analysis</h3>
              <p>Get detailed ATS compatibility scores for your resume</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-key"></i>
              <h3>Keyword Optimization</h3>
              <p>Discover important keywords to boost your resume</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-question-circle"></i>
              <h3>Skills Assessment</h3>
              <p>Test and improve your professional skills</p>
            </div>
          </div>

          <Link to="/features" className="btn btn-outline">
            View All Features
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Improve Your Resume?</h2>
          <p>Start optimizing your resume today and increase your chances of landing interviews.</p>
          <Link to="/upload" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
