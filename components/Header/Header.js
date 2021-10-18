import React from "react";
import Image from 'next/image'
const Header = () => {
    return (
    <div className="Container">
        <nav className="navbar">
        <div className="navbar-container container">
            <Image src="/images/android-chrome-192x192-removebg-preview.svg" 
                height="60px" width="70px" alt="MW"/>
                <input type="checkbox" 
                name="HamburgerMenu" 
                id="Ham" 
                aria-label="HamburgerMenu" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                <li>
                    <button onClick={() => {
                                    window.scrollTo({
                                        top: document.getElementById('about').offsetTop,
                                        behavior: 'smooth'
                                    });
                                }}>About</button>
                </li>
                    <li>
                        <button onClick={() => {
                            window.scrollTo({
                                top: document.getElementById('work').offsetTop - 90,
                                behavior: 'smooth'
                            });
                        }}>Work Experience</button></li>
                <li>
                    <button onClick={() => {
                            window.scrollTo({
                                top: document.getElementById('projects').offsetTop - 90,
                                behavior: 'smooth',
                                paddingBottom: '10px'
                            });
                        }}>Projects</button></li>
                    <li>
                        <button onClick={() => {
                            window.scrollTo({
                                top: document.getElementById('contact').offsetTop,
                                behavior: 'smooth'
                            });
                        }}>
                        Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Header;
