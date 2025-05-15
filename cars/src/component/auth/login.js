import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { provider } from "../../firebase";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user);

      localStorage.setItem('authToken', user.accessToken);
      navigate('/cardetails');

      alert(`Welcome, ${user.displayName}`);
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCred.user);
      localStorage.setItem("authToken", userCred.user.accessToken);
      localStorage.setItem('authToken', 'example-token');
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      let errorMessage = "Invalid email or password";
      if (err.code === "auth/user-not-found") {
        errorMessage = "User not found. Please check your email.";
      } else if (err.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bgimage">
        {/* <div class="overlay"></div> */}
        <div className="wrapper">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
              <span
                onClick={togglePassword}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password">Forgot Password</a>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="register-link">
              <p>
                Don't have an Account? <Link to="/register">Register Now</Link>
              </p>
            </div>

            <div className="gsign">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  backgroundColor: "#4285F2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "40px",
                  padding: "12px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;