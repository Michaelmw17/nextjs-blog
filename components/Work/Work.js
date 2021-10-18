import Image from 'next/image'

export default function About() {
    return (<>
        <div id='work'  className="container mt-5 ">
            <h1  className="m-2  mt-10 font-semibold text-gray-800 dark:text-white md:mt-10 text-3xl">Work Experience</h1>
            <ul className="timeline">
                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag">Entain</span>
                            <span className="time-wrapper">
                            <span className="time">July 2021 - October 2021</span></span>
                        </div>
                        <div className="desc">Full Stack Web Developer Internship<br/>
                            <ul>
                                <li>
                                Experience working with Micro-frontend Applications.
                                </li>
                                <li>
                                Worked with design team and developing solutions using Vue.js.
                                </li>
                                <li>
                                Jira sprints & Created user documentation including Confluence experience.
                                </li>
                                <li>
                                Culturally well-liked, SWAT project team member, daily stand-ups, agile development and SCRUM.
                                </li>
                                <li>
                                Quality testing and Liaised with key stakeholders and development team.
                                </li>
                                <li>
                                Training in development tools and methodologies.
                                </li>
                                <li>
                                Good communications skills, attention to detail and a great attitude towards learning.
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="direction-l">
                        <div className="flag-wrapper">
                            <span className="flag">Freelance Experience</span>
                            <span className="time-wrapper"><span className="time">2020 - 2021</span></span>
                        </div>
                    <div className="desc">JDP Electrical Services Website<br/>
                        <ul>
                            <li>
                            Developed and deployed Frontend (SPA) Single Page Application through AWS Web Services.
                            </li>
                            <li>
                            Liaised with the client to develop frontend experience.
                            </li>
                            <li>
                            Development of website from design, deploy & domain transfer.
                            </li>
                        </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag">Club York</span>
                            <span className="time-wrapper"><span className="time">February  2018 - July 2021</span></span>
                        </div>
                        <div className="desc"> Bartender<br/>
                            <ul>
                                <li>
                                Managed the beverage service and customer requests.
                                </li>
                                <li>
                                Maintained stock, managing and restocking pre-shift, reported on loss or damage.
                                </li>
                                <li>
                                Handled cash, credit card and EFT facilities.
                                </li>
                                <li>
                                Participated in team meetings and other work-related meetings. Ensured licensing laws and legislative requirements were adhered to.
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}
