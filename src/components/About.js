import React from "react";
import ProfilePicture from "../Images/Profile-Picture.png"

function About() {
    return (


    <div className="App">
        <div className="App-header">
        <span className="about-container">
          <div className="row">
            <div className="col-sm-3">
        <img src={ProfilePicture} className="Profile-Picture" alt="Thomas Profile" />
        </div>
        <div className="col-sm-9">
              <div className="about-container-text">
                <h2 id="about-header">Hello!</h2>
                <p id="about-text">
                My name is Thomas Pham and I’m a <strong>Full Stack Web Developer</strong> leveraging a successful career in Business Information System Operations and Business Analysis. I have a certificate in Full Stack Web Development from the University of Monash University, with skills in HTML, CSS, JavaScript, MySQL, React.js, and responsive web design.</p>
            
                <p id="about-text">
                My curiosity for web development began in 2019 when I began working as the System Administrator for AQR, a 3PL Warehousing and Distribution Service Provider. We currently use a lot of web application in order to process and track orders coming and leaving the premises, slowly with my team tweaking and adding new functions to an already built web app.</p>
              
                <p id="about-text">
                I am passionate about creating seamless user experiences that delight customers and elevate a business. I am well positioned to provide unique perspectives on how a business can implement new technology into their business to allow sommoter business operations.</p>

                <p id="about-text">
                Feel free to browse my page to see some of the projects I've worked on as well as my skills and work history. 
                </p>
              </div>
            </div>

          </div>
        </span>
      </div>
    </div>
  );
}

export default About 