import React from "react";

function Heading() {
  return <>
    <nav>
    <div className="navbar">
      <div className="nav-links">
        <div className="sidebar-logo">
          <span className="logo-name">CARDS</span>
        </div>
        <ul className="links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JAVASCRIPT</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
      <div className="search-box">
        <div className="input-box">
          <input type="text" placeholder="Search..."></input>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default Heading