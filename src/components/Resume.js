import React from "react";
import {
  SiCsharp,
  SiDotnet,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaClinicMedical,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Resume = () => {
  return (
    <>
      <section id="resume">
        <div className="container">
          <div className="row education">
            <div className="col-sm-12 col-md-4 mb-5">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="col-sm-12 col-md-8">
              <h3>Southern Luzon State University</h3>
              <p>Computer Engineering</p>
              <p>
                <i>December 2019</i>
              </p>
            </div>
          </div>
          <div className="row skills">
            <div className="col-sm-12 col-md-4 mb-5">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="col-sm-12 col-md-8">
              <ul className="list-inline mx-auto">
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <SiFlutter color="white" size="32px" />
                      <p>Flutter</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <FaHtml5 color="white" size="32px" />
                      <p>HTML5</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <FaCss3Alt color="white" size="32px" />
                      <p>CSS3</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <SiJavascript color="white" size="32px" />
                      <p>JavaScript</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <FaBootstrap color="white" size="32px" />
                      <p>Bootstrap</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <FaReact color="white" size="32px" />
                      <p>React</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <FaNodeJs color="white" size="32px" />
                      <p>Node.js</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <SiDotnet color="white" size="32px" />
                      <p>.Net Core</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <SiCsharp color="white" size="32px" />
                      <p>C#</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <SiPhp color="white" size="32px" />
                      <p>PHP</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <SiMysql color="white" size="32px" />
                      <p>MySQL</p>
                    </div>
                  </span>
                </li>
                <li className="list-inline-item mx-3">
                  <span>
                    <div className="text-center skills-tile">
                      <SiMongodb color="white" size="32px" />
                      <p>MongoDB</p>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row experience">
            <div className="col-sm-12 col-md-12 mb-5 text-center">
              <h1>
                <span>Experience</span>
              </h1>
            </div>
            <div className="col-sm-12 col-md-12">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgba(248,245,244, .05)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(248,245,244, .05)",
                  }}
                  date="2022-10 - Present"
                  iconStyle={{ background: "rgb(230, 156, 36)", color: "#fff" }}
                  icon={<FaClinicMedical />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Application Specialist
                  </h3>
                  <h6 className="vertical-timeline-element-subtitle">
                    Signant Health
                  </h6>
                  <div className="badge-tile">
                    <span className="badge rounded-pill mb-2">
                      <i>TrialMax</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Trial Studio</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>SmartSignals eCOA Designer</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Jira</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Confluence</i>
                    </span>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgba(248,245,244, .05)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(248,245,244, .05)",
                  }}
                  date="2021-11 - 2022 - 10"
                  iconStyle={{ background: "rgb(230, 156, 36)", color: "#fff" }}
                  icon={<FaClinicMedical />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Software Developer 1
                  </h3>
                  <h6 className="vertical-timeline-element-subtitle">
                    -Signant Health
                  </h6>
                  <div className="badge-tile">
                    <span className="badge rounded-pill mb-2">
                      <i>TrialMax</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Trial Studio</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>SmartSignals eCOA Designer</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Jira</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Confluence</i>
                    </span>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgba(248,245,244, .05)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(248,245,244, .05)",
                  }}
                  date="2021-01 - 2021 - 10"
                  iconStyle={{ background: "rgb(230, 156, 36)", color: "#fff" }}
                  icon={<SiCsharp />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Software Engineer
                  </h3>
                  <h6 className="vertical-timeline-element-subtitle">
                    -Virtual Champs Global, Inc / Placester
                  </h6>
                  <div className="badge-tile">
                    <span className="badge rounded-pill mb-2">
                      <i>C#</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>ASP.NET Core</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>ASP.NET Boilerplate</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>GraphQL</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Flutter</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Postman</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Jira</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>CI/CD</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Git</i>
                    </span>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgba(248,245,244, .05)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(248,245,244, .05)",
                  }}
                  date="2020-09 - 2021 - 02"
                  iconStyle={{ background: "rgb(230, 156, 36)", color: "#fff" }}
                  icon={<SiFlutter />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Flutter Mobile Developer
                  </h3>
                  <h6 className="vertical-timeline-element-subtitle">
                    -Justlearn
                  </h6>
                  <div className="badge-tile">
                    <span className="badge rounded-pill mb-2">
                      <i>Flutter</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Firebase</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>RESTful API</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Stripe</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Play Store / App Store</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>CI/CD</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Postman</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Git</i>
                    </span>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgba(248,245,244, .05)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(248,245,244, .05)",
                  }}
                  date="2019-01 - 2020 - 08"
                  iconStyle={{ background: "rgb(230, 156, 36)", color: "#fff" }}
                  icon={<FaHtml5 />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Junior Full-Stack Developer
                  </h3>
                  <h6 className="vertical-timeline-element-subtitle">
                    -Corinthdev Web/Software Solutions & Tech Support Services
                  </h6>
                  <div className="badge-tile">
                    <span className="badge rounded-pill mb-2">
                      <i>C#</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>ASP.NET Core / MVC</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>ASP.NET Boilerplate</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>HTML5</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>CSS3</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Bootstrap</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>JavaScript</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>MySQL</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Visual Studio 2019</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Git</i>
                    </span>
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgba(248,245,244, .05)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgba(248,245,244, .05)",
                  }}
                  date="2019-07 - 2019 - 11"
                  iconStyle={{ background: "rgb(230, 156, 36)", color: "#fff" }}
                  icon={<MdSchool />}
                >
                  <h3 className="vertical-timeline-element-title">
                    React-Native Developer
                  </h3>
                  <h6 className="vertical-timeline-element-subtitle">
                    -Research paper requirement
                  </h6>
                  <div className="badge-tile">
                    <span className="badge rounded-pill mb-2">
                      <i>React Native</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>JSON</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Android Studio</i>
                    </span>
                    <span className="badge rounded-pill mb-2">
                      <i>Visual Studio Code</i>
                    </span>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
