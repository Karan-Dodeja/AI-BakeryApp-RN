import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signupError, setSignupError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkEmailExists = async (email) => {
    const checkEmailUrl = `http://localhost:5000/api/users/register`;
    try {
      const response = await axios.get(checkEmailUrl);
      return response.data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailExists = await checkEmailExists(formData.email);
    if (emailExists) {
      setSignupError("Email already registered. Please use a different email.");
      return;
    }

    const registerUser = "http://localhost:5000/api/users/register"; // Ensure this is a valid URL string
    try {
      const response = await axios.post(registerUser, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.token) {
        setSignupSuccess(true);
        // Store token and role in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        // Redirect to login page after successful signup
        navigate("/login", { replace: false });
      } else {
        setSignupError("Registration failed. Please try again.");
      }
    } catch (error) {
      setSignupError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {signupError && <p className="error">{signupError}</p>}
      {signupSuccess && <p className="success">Signup successful! Redirecting...</p>}
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;