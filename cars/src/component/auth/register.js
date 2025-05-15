// src/component/auth/Register.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./login.css"; // reuse same styling
import { signInWithPopup } from "firebase/auth";
import { provider } from "../../firebase";

function Register({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user);
      alert(`Welcome, ${user.displayName}`);
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Try again.");
    }
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCred.user);
      alert("Registration successful! Please log in.");
      // navigate("/login");
      navigate("/");
      if (typeof closeModal === "function") closeModal();

    } catch (err) {
      console.error(err);
      let message = "Something went wrong! /n **Password should be 1 uppercase, 1Special Char, Number Required "
      if (err.code === "auth/email-already-in-use") {
        message = "Email already in use.";
      } else if (err.code === "auth/weak-password") {
        message = "Password should be at least 6 characters.";
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <section className="bgimageregister">
      {/* <div class="overlay"></div> */}
      <div className="wrapper">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {confirmPassword && password !== confirmPassword && (
            <p className="error-message">Passwords do not match</p>
          )}

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="register-link">
            <p>Already have an account? <a href="/login">Login</a></p>
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

export default Register;
