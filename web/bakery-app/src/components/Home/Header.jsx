import React, { useState, useEffect } from "react";
import axios from "axios";
import "./headerStyle.css"; // Assuming you have a CSS file for styling

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/api/users/register", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsLoggedIn(true);
          setIsAdmin(response.data.role === "admin");
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <header className="header">
      <div className="logo">BakeryApp</div>
      <nav className="nav">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          {isAdmin && <li><a href="/dashboard">Dashboard</a></li>}
        </ul>
        {isLoggedIn && (
          <>
            <a href="/login" className="btn">Login</a>
            <a href="/signup" className="btn">Sign Up</a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;