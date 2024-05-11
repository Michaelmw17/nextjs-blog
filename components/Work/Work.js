export default function Work() {
  return (
    <>
      <div className="wrapper" id="work">
        <h3
          id="work-h1"
          className="m-2 mt-10 font-semibold text-gray-800 dark:text-white md:mt-10 text-3xl"
        >
          Work Experience
        </h3>
      </div>

      <div className="container mt-5">
        <ul className="timeline">
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Greenstone</span>
                <span className="time-wrapper">
                  <span className="time">Nov 2022 - Current</span>
                </span>
              </div>
              <div className="desc">
                Frontend Developer
                <br />
                <li>
                  Meeting deadlines on time: I consistently deliver projects
                  within specified deadlines, ensuring timely completion.
                </li>
                <li>
                  Experience with new frameworks for C# MVC applications: I am
                  proficient in utilising the latest frameworks for C# MVC
                  applications, staying up to date with emerging technologies.
                </li>
                <li>
                  Implementing best practices for coding readability and
                  maintainability: I prioritise clean and well-structured code,
                  adhering to coding conventions and employing design patterns
                  for easier maintenance.
                </li>
                <li>
                  Collaborating with Marketing members for feature developments
                  and projects: I actively engage with Marketing team members to
                  incorporate their requirements and ensure the successful
                  implementation of new UI/UX features.
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Forexco</span>
                <span className="time-wrapper">
                  <span className="time">Nov 2021 - Jan 2022</span>
                </span>
              </div>
              <div className="desc">
                Junior Full Stack Web Developer
                <br />
                <ul>
                  <li>Meet Deadlines on-time.</li>
                  <li>
                    Implemented Mobile design features and reusable React
                    components.
                  </li>
                  <li>
                    Worked with design team and developing solutions using
                    React.js.
                  </li>
                  <li>Good communications skills, attention to detail.</li>
                  <li>Trello sprints & Created user documentation.</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Entain</span>
                <span className="time-wrapper">
                  <span className="time">July 2021 - October 2021</span>
                </span>
              </div>
              <div className="desc">
                Full Stack Web Developer Internship
                <br />
                <ul>
                  <li>Experience working with Micro-frontend Applications.</li>
                  <li>
                    Worked with design team and developing solutions using
                    Vue.js.
                  </li>
                  <li>
                    Jira sprints & Created user documentation including
                    Confluence experience.
                  </li>
                  <li>
                    Culturally well-liked, SWAT project team member, daily
                    stand-ups, agile development and SCRUM.
                  </li>
                  <li>
                    Quality testing and Liaised with key stakeholders and
                    development team.
                  </li>
                  <li>Training in development tools and methodologies.</li>
                  <li>
                    Good communications skills, attention to detail and a great
                    attitude towards learning.
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Freelance Experience</span>
                <span className="time-wrapper">
                  <span className="time">2020 - 2021</span>
                </span>
              </div>
              <div className="desc">
                JDP Electrical Services Website
                <br />
                <ul>
                  <li>
                    Developed and deployed (SPA) Single Page Application &
                    Landing page through AWS Web Services.
                  </li>
                  <li>
                    Liaised weekly with the client to develop frontend
                    experience.
                  </li>
                  <li id="projects">
                    Development of website from design, deploy & domain
                    transfer.
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
