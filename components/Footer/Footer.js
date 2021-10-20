import Image from 'next/image'

export default function Footer() {
    return (<>
    <footer id="contact" className="footer bg-white relative pt-1 border-b-2 border-blue-700">
        <div className="container mx-auto px-12">
            <div className="sm:flex sm:mt-8">
                <div className="mt-8  sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col">
                        <h6 className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                        Contact
                        </h6>
                        <span className="my-2">
                        <a href="mailto:michaelmw17@outlook.com" className="text-blue-700  text-md hover:text-blue-500">
                        <i className="fas fa-envelope-square  fa-2x" alt="Email">
                        </i>
                        </a>
                        </span>
                        <span className="my-2">
                        <a href="https://github.com/Michaelmw17/" className="text-blue-700  text-md hover:text-blue-500">
                        <i className="fab fa-github  fa-2x"></i>
                        </a>
                        </span>
                        <span className="my-2">
                        <a href="tel:+61449620082"className="text-blue-700 text-md hover:text-blue-500">
                        <i className="fas fa-phone  fa-2x"></i>
                        </a>
                        </span>
                        <span className="my-2">
                        <a  href="https://www.google.com/maps/place/Sydney+NSW/data=!4m2!3m1!1s0x6b129838f39a743f:0x3017d681632a850?sa=X&ved=2ahUKEwj56oj83KzsAhWBA3IKHZFTBkAQ8gEwH3oECDAQBA"
                        className="text-blue-700  text-md hover:text-blue-500">
                        <i className="fas fa-search-location  fa-2x"></i>
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-blue-700 font-bold mb-2">
                            ©2021 by Michael Watt
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
