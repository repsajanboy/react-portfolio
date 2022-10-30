import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row center">
            <div className="col-md-4 center mb-5">
              <img
                src="images/profile-pic.jpg"
                alt="profile-pic"
                className="rounded-circle profile-pic"
              />
            </div>
            <div className="col-md-8">
              <h2>About Me</h2>
              <p>
                I am Jasper Janboy Monterey. I am a Junior Full Stack Web and
                Mobile Developer having experience of building web applications
                using ASP.NET Core and Flutter for mobile applications. Right
                now I am exploring JavaScript and its framework such as React
                for front-end development and Node.js for back-end development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
