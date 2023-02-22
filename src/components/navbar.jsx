import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-collapse">
        <div className="navbar-nav">
      <Link to="/my-images" className="nav-item nav-link">My images</Link>
      <Link to="/upload" className="nav-item nav-link">Upload images</Link>
      <Link to="/public-images" className="nav-item nav-link">Public images</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
