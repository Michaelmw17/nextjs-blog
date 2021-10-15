import React from "react";
import Image from 'next/Image'
const Header = () => {
  return (
    <div className="Container">
      <nav className="navbar">
        <div className="navbar-container container">
          <Image src="/images/android-chrome-192x192-removebg-preview.svg" 
                height="60px" width="70px" alt="MW"/>
                <input type="checkbox" name="" id=""/>
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#work">Work Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Header;
