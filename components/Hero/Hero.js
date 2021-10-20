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
            <h1 className={(`font-bold text-4xl md:text-5xl text-center leading-snug text-gray-800`)}>
            Welcome to my portfolio<br/>
                        My name is Michael
            </h1>
            <div className={(`max-w-xl mx-auto`)}>
                <p className={(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
                Full Stack Web Developer
                </p>
            </div>
            <div className={(`mt-10 flex justify-center items-center w-full mx-auto`)}>
                {/* <Button primary>Get started</Button> */}
                <button id="work"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-3 px-8 rounded-full"
                onClick={() => {
                    window.scrollTo({
                        top: document.getElementById('work').offsetTop - 90,
                        behavior: 'smooth'
                    });
                }}>
                <i className="fas fa-arrow-alt-circle-down" aria-label="Arrow Down"></i>
                </button>
                <span className={(`mx-2`)}>or</span>
                <button id="work"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-3 px-8 rounded-full"
                    onClick={() => {
                        window.scrollTo({
                            top: document.getElementById('work').offsetTop - 90,
                            behavior: 'smooth'
                        });
                    }}>
                    <i className="fas fa-arrow-alt-circle-down" aria-label="Arrow Down"></i>
                    </button>
                </div>
            </div>
            {/* <div className={(`flex justify-center w-full`)}>
            <div className={(`mt-4 w-full`)}>
                <p className={(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>These folks get it</p>
                <div className={(`flex items-center justify-center mx-auto flex-wrap`)}> */}
                {/* <Aws className={(`m-12 mb-8`)} width={120} />
                <Netlify className={(`m-12`)} width={140} />
                <Nike className={(`m-12`)} width={140} />
                <Figma className={(`m-12`)} width={140} /> */}
                {/* </div>
            </div>
            </div> */}
        </div>
    );
};

export default Hero;
