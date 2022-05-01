import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="bg-gray-50 text-gray-600 px-6 lg:px-8 py-12"
      >
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid grid-cols-8 md:grid-cols-9  lg:grid-cols-8  divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
            <div className="col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-semibold text-gray-700">Contact</h5>
              <nav className="mt-4">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:michaelmw17@outlook.com"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      <i
                        className="fas fa-envelope-square  fa-2x"
                        alt="Email"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="linkedin.com/in/michael-watt-6a76961b3/"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      <i className="fab fa-linkedin  fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-semibold text-gray-700">Location</h5>
              <nav className="mt-4">
                <ul className="grid lg:grid-cols-2">
                  <li className="mb-2">
                    <a
                      href="#"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Sydney, NSW
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.google.com/maps/place/Sydney+NSW/data=!4m2!3m1!1s0x6b129838f39a743f:0x3017d681632a850?sa=X&ved=2ahUKEwj56oj83KzsAhWBA3IKHZFTBkAQ8gEwH3oECDAQBA"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      <i className="fas fa-search-location  fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-8 md:col-span-2 lg:col-span-2 md:px-16 py-4 md:py-0">
              <h5 className="text-xl font-semibold text-gray-700">Follow us</h5>
              <nav className="mt-6">
                <ul className="grid lg:grid-cols-3">
                  <li className="mb-2">
                    <a
                      href="https://github.com/Michaelmw17/"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      <i className="fab fa-github  fa-2x"></i>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="linkedin.com/in/michael-watt-6a76961b3/"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      <i className="fab fa-linkedin  fa-2x"></i>
                    </a>
                  </li>
                  {/* <li className="mb-2">
                    <a
                      href="https://twitter.com/michaelDaleyOne"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      <i className="fab fa-twitter  fa-2x"></i>
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12 border-t-2 border-gray-200 pt-8">
          <nav className="flex flex-wrap justify-center space-x-6">
            <div className="max-w-screen-xl mx-auto  mt-4 ">
              <img
                className="h-8"
                src="/images/android-chrome-192x192-removebg-preview.svg"
                alt="UptimeMate logo"
              />
            </div>
          </nav>
          <p className="text-sm text-center md:text-right">
            &copy; 2021 by Michael Watt | All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
