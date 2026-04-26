import { useState } from "react";

function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePassword = (fieldId) => {
    setVisiblePasswords((current) => ({
      ...current,
      [fieldId]: !current[fieldId],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Auth API connection will be added in backend/auth phase.
  };

  return (
    <main
      style={{
        marginTop: "70px",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div className="container">
        <div className="auth-container">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
              type="button"
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
              type="button"
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          <div id="login-form" className={`auth-form ${activeTab === "login" ? "active" : ""}`}>
            <div className="form-container">
              <div className="auth-header">
                <h2>Welcome Back</h2>
                <p>Sign in to access your dashboard and resume optimization tools</p>
              </div>

              <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email Address</label>
                  <input
                    type="email"
                    id="loginEmail"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <div className="password-input">
                    <input
                      type={visiblePasswords.loginPassword ? "text" : "password"}
                      id="loginPassword"
                      className="form-control"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePassword("loginPassword")}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" id="rememberMe" />
                      <span className="checkmark"></span>
                      Remember me
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  <i className="fas fa-sign-in-alt"></i>
                  Sign In
                </button>
              </form>

              <div className="auth-divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button className="btn btn-secondary social-btn" type="button">
                  <i className="fab fa-google"></i>
                  Google
                </button>
                <button className="btn btn-secondary social-btn" type="button">
                  <i className="fab fa-github"></i>
                  GitHub
                </button>
              </div>
            </div>
          </div>

          <div id="signup-form" className={`auth-form ${activeTab === "signup" ? "active" : ""}`}>
            <div className="form-container">
              <div className="auth-header">
                <h2>Create Account</h2>
                <p>Join us to optimize your resume and boost your career prospects</p>
              </div>

              <form id="signupForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="signupEmail">Email Address</label>
                  <input
                    type="email"
                    id="signupEmail"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="signupPassword">Password</label>
                  <div className="password-input">
                    <input
                      type={visiblePasswords.signupPassword ? "text" : "password"}
                      id="signupPassword"
                      className="form-control"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePassword("signupPassword")}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>

                  <div className="password-strength">
                    <div className="strength-bar">
                      <div className="strength-fill"></div>
                    </div>
                    <span className="strength-text">Password strength</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="password-input">
                    <input
                      type={visiblePasswords.confirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePassword("confirmPassword")}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="agreeTerms" required />
                    <span className="checkmark"></span>
                    I agree to the <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  <i className="fas fa-user-plus"></i>
                  Create Account
                </button>
              </form>

              <div className="auth-divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">
                <button className="btn btn-secondary social-btn" type="button">
                  <i className="fab fa-google"></i>
                  Google
                </button>
                <button className="btn btn-secondary social-btn" type="button">
                  <i className="fab fa-github"></i>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
