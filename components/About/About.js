import Image from 'next/image'

export default function About() {
    return (<>
            <figure className="about-section md:flex rounded-xl p-8  mt-0 md:p-6 md:m-6 md:mb-0 md:mt-36 lg:mt-36 lg:m-10 lg:mb-0">
                <div id="about"  className="max-w-md mt-11 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  mb-5 mt-40">
                    <div className="mb-0">
                    <div>
                            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                                <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                </defs>
                                <g className="parallax">
                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                        <div className="p-8 md:p-14 md:pt-1 leading-8 md:text-md mt-0">
                        <h2 className={(`font-medium mt-0 m-3 text-4xl md:text-5xl  text-center`)}>
                            About
                            </h2>
                            <p className="mt-2 p-intro">I achieved my Certificate in Full Stack Web Development  at the University of Sydney. During my recent internship along with my Web Development study I have developed my skills in JavaScript, ReactJS, NodeJS, VueJS, jQuery, HandlebarsJS, HTML5/CSS3, SASS, API's, Node, AWS, Heroku, Go, MySQL, MongoDB, Jira, Confluence and more.</p>
                            <p className="mt-2 p-intro-two">Completed Internship with Entain, Certificate IV in Business Studies and have experience in customer service. I would describe my self as a driven, organised and open-minded person with creative ideas, who is motivated to use my skills and knowledge in a Web Development team. I hope for an exciting career and am always up for a challenge.</p>
                            <div className="mt-2 mb-0 md:flex-shrink-0 md:pt-5">
                            <Image 
                            className="w-32 h-32 md:w-48 md:h-auto  rounded-full mx-auto" 
                            src="/images/circle_cropped_xqZusntQvdP_-Y1oAejgs.jpg" alt="Profile" width="300" height="300"/>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>  
        </>
    )
}
