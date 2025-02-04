import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Preferences from "./components/Profile/Preferences";
import ProductList from "./components/Products/ProductsList";
import Recommendations from "./components/Products/Recommendations";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Preferences />} />
      </Routes>
    </Router>
  );
}

export default App;
