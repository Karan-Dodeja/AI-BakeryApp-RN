import React from "react";
import "./headerStyle.css"; // Assuming you have a CSS file for styling

const Header = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <header className="header">
      <div className="logo">BakeryApp</div>
      <nav className="nav">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {!isLoggedIn && (
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