import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../api/authApi";
import { getToken, saveAuthData } from "../utils/storage";


function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const togglePassword = (fieldId) => {
    setVisiblePasswords((current) => ({
      ...current,
      [fieldId]: !current[fieldId],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formValues = new FormData(form);

    try {
      let data;

      if (activeTab === "login") {
        data = await loginUser({
          email: formValues.get("loginEmail"),
          password: formValues.get("loginPassword"),
        });
      } else {
        data = await signupUser({
          firstName: formValues.get("firstName"),
          lastName: formValues.get("lastName"),
          email: formValues.get("signupEmail"),
          password: formValues.get("signupPassword"),
          confirmPassword: formValues.get("confirmPassword"),
        });
      }

      saveAuthData({
        token: data.token,
        user: data.user,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Backend is not connected yet. Auth will work after the server phase."
      );
    } finally {
      setIsSubmitting(false);
    }
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
              onClick={() => {
                setActiveTab("login");
                setError("");
              }}
            >
              Login
            </button>
            <button
              className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
              type="button"
              onClick={() => {
                setActiveTab("signup");
                setError("");
              }}
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


              {error && <p className="form-error">{error}</p>}
              <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email Address</label>
                  <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
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
                      name="loginPassword"
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

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  disabled={isSubmitting}
                >
                  <i className="fas fa-sign-in-alt"></i>
                  {isSubmitting ? "Please wait..." : "Sign In"}
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

              {error && <p className="form-error">{error}</p>}
              <form id="signupForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
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
                      name="lastName"
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
                    name="signupEmail"
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
                      name="signupPassword"
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
                      name="confirmPassword"
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

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  disabled={isSubmitting}
                >
                  <i className="fas fa-user-plus"></i>
                  {isSubmitting ? "Please wait..." : "Create Account"}
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
