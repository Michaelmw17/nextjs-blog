import React from "react";
import Particles from 'react-particles-js';

const Hero = () => {
    return (
            <div className="head">
        <Particles
         canvasClassName="example"
    params={{
        
	  particles: {
            line_linked: {
                shadow: {
                    enable: true,
                    color: "#000000",
                },
            },
            "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
        },
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 100
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
            <div className={(`max-w-4xl mx-auto mt-16 py-16 px-14 sm:px-6 lg:px-8`)}>
            <h1 className={(`font-bold  text-2xl mt-16 md:mt-36 mb:0  md:text-4xl text-center text-gray-800`)}>
            Welcome to my portfolio<br/>
                My name is Michael
            </h1>
            <div className={(`max-w-xl mx-auto`)}>
                <p className={(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
                Full Stack Web Developer
                </p>
            </div>
            <div className={(`mt-10 flex flex-wrap justify-center items-center w-full mx-auto space-x-2 md:space-x-4`)}>
                <a href="#projects">
                <button className="flex bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 my-4 border border-blue-500 rounded inline-flex items-center">
                    <span>See my Projects</span>
                    <svg className="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
                </a>
                <a href="#about">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 my-4 border border-blue-500 rounded inline-flex items-center">
                    <span>Read about me</span>
                    <svg className="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
