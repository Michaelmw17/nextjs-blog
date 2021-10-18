import Image from 'next/image'

export default function About() {
    return (<>
            <figure className="md:flex rounded-xl md:pb-10 p-8 m-1 mt-8 md:p-0 md:m-6 lg:m-10">
                <div className="max-w-md mt-11 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
                    <div className="mt-15 mb-0">
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
                        <h1 className="mx-auto mt-1  break-words typewriter  font-semibold  dark:text-white text-2xl">Welcome to my portfolio<br/>
                        My name is Michael</h1>
                        <div className="p-8 md:p-14 md:pt-1 leading-8 md:text-sm mt-0">
                            <p className="mt-2 p-intro">I have completed a Full Stack Web Development at the University of Sydney. My recent internship at Entain along with my Web Development study have developed my skills in JavaScript, ReactJS, NodeJS, jQuery, VueJS, HandlebarsJS, HTML5/CSS3, SASS, API's, Node, AWS, Heroku, Go, MySQL, MongoDB, Jira, Confluence and more.</p>
                            <p className="mt-2 p-intro-two">Currently completing an Internship with Entain. I have completed Certificate IV in Business Studies and have experience in customer service. I would describe my self as a driven, organised and open-minded person with creative ideas, who is motivated to use my skills and knowledge in a Web Development team. I hope for an exciting career and am always up for a challenge.</p>
                            <div className="mt-2 mb-0 md:flex-shrink-0 md:pt-5">
                            <Image 
                            className="w-32 h-32 md:w-48 md:h-auto  rounded-full mx-auto" 
                            src="/images/circle_cropped_xqZusntQvdP_-Y1oAejgs.jpg" alt="Profile" width="300" height="300"/>
                            </div>
                            <div className="flex">
                                <button  id='projects' 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-3 px-8 rounded-full"
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.getElementById('projects').offsetTop,
                                        behavior: 'smooth'
                                    });
                                }}>
                                <i className="fas fa-arrow-alt-circle-down" aria-label="Arrow Down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>  
        </>
    )
}
