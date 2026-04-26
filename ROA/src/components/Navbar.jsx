import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i className="fas fa-file-alt"></i>
          <span>Resume Optimizer</span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={closeMenu}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => `nav-link login-btn ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              Login/Signup
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
