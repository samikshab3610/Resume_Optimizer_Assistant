import { Link } from "react-router-dom";
import { useState } from "react";
import { sendContactMessage } from "../api/contactApi";

function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("");
  const [contactError, setContactError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const updateContactField = (event) => {
    const { name, value } = event.target;
    setContactForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setContactStatus("");
    setContactError("");
    setIsSending(true);

    try {
      const data = await sendContactMessage(contactForm);
      setContactStatus(data.message);
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setContactError(error.response?.data?.message || "Unable to send message right now.");
    } finally {
      setIsSending(false);
    }
  };

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


      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-copy">
              <h2>Contact Us</h2>
              <p>
                Have feedback, questions, or an issue with resume analysis? Send us a message and
                we will review it.
              </p>
              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <span>Support for resume optimization and account questions</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              {contactStatus && <p className="form-success">{contactStatus}</p>}
              {contactError && <p className="form-error">{contactError}</p>}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Name</label>
                  <input
                    id="contactName"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={updateContactField}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactEmail">Email</label>
                  <input
                    id="contactEmail"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={contactForm.email}
                    onChange={updateContactField}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contactSubject">Subject</label>
                <input
                  id="contactSubject"
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="How can we help?"
                  value={contactForm.subject}
                  onChange={updateContactField}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message..."
                  value={contactForm.message}
                  onChange={updateContactField}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSending}>
                <i className="fas fa-paper-plane"></i>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
