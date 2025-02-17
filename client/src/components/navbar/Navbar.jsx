import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Real Estate App" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="/pet.png" alt="" />
            <span>John Doe</span>
            <Link to={`/profile`} className="profile">
              <div className="notfication">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/register" className="register">
              Sign Up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="menu icon" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
