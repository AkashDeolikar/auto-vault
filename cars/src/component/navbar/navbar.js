// src/component/CarNavbar.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes} from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import './navbar.css';
import { auth } from "../../firebase";

const CarNavbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`car-navbar ${theme}`}>
      <div className="car-navbar-container">
        <div className="car-navbar-logo">
          <IoCarSportSharp /> MotoMart
        </div>

        {/* <div className="car-navbar-links">
          <Link to="/Home" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/cardetails" className={location.pathname === "/cardetails" ? "active" : ""}>Cars</Link>
          {user?.email === "admin@gmail.com" && (
            <Link to="/add-car" className={location.pathname === "/add-car" ? "active" : ""}>Add Car</Link>
          )}
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>

          {!user && (
            <>
              <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
              <Link to="/register" className={location.pathname === "/register" ? "active" : ""}>Register</Link>
            </>
          )}

          {user && (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          )}

          {user && (
            <div className="user-info">
              👋 {user.displayName || user.email.split('@')[0]}
            </div>
          )}

          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </div>
        </div> */}

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`car-navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/Home" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/cardetails" className={location.pathname === "/cardetails" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Cars</Link>
          {user?.email === "admin@gmail.com" && (
            <Link to="/add-car" className={location.pathname === "/add-car" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Add Car</Link>
          )}
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

          {!user && (
            <>
              <Link to="/login" className={location.pathname === "/login" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              <Link to="/register" className={location.pathname === "/register" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
            </>
          )}

          {user && (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          )}

          {user && (
            <div className="user-info">
              👋 {user.displayName || user.email.split('@')[0]}
            </div>
          )}

          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CarNavbar;
