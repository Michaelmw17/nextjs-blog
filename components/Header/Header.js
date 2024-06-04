import React from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <div className="Container-nav fixed w-screen top-0 z-10 ">
      <header className="lg:px-16 px-8 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex justify-between items-center">
          <Image
            src="/images/android-chrome-192x192-removebg-preview.svg"
            height="60px"
            width="70px"
            alt="MW"
          />
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#work">
                  Work Experience
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#projects">
                  Projects
                </a>
              </li>
              {/* <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" 
                href="#contact">
                Contact Us</a></li> */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
