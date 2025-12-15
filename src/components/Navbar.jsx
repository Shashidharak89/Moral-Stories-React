import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="navbar">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="navbar-title">Moral Stories</h1>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <a href="/" className="sidebar-link">Home</a>
          <a href="/stories" className="sidebar-link">Stories</a>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
