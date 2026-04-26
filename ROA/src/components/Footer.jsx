import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <i className="fas fa-file-alt"></i>
            <span>Resume Optimizer</span>
          </div>
          <p>Helping job seekers optimize their resumes for better opportunities.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tools</h3>
          <ul>
            <li><Link to="/upload">Resume Optimizer</Link></li>
            <li><Link to="/quiz">Skills Quiz</Link></li>
            <li><Link to="/result">Results</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/login">Sign Up</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Resume Optimizer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
