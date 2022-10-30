import React from "react";

const Work = () => {
  return (
    <>
      <section id="works">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h1>
                <span>Projects</span>
              </h1>
            </div>
            <div className="col-12">
              <div className="col-lg-4 col-md-6 col-sm-12" style={{cursor: "pointer"}}>
                <div className="project">
                  <div>
                    <img src="images/projects/plando/4pics1.png" alt="projectImages"/>
                    <p className="project-title mt-3">Plan & Do</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{cursor: "pointer"}}></div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{cursor: "pointer"}}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
