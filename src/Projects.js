import React from "react";
import Project1 from "./Images/Project1.PNG"
import Burger from "./Images/Eat-Da-Burger.PNG"
import Project2 from "./Images/Project2.PNG"
import Budget from "./Images/Budget.PNG"
import Day from "./Images/Day-Schedular.PNG"
import Workout from "./Images/Workout.PNG"

function Projects() {
    return (
      <div class="container" id="pcontain">
          <h1>MY PORTFOLIO</h1>
      <section>
          <div class="row" id="projectsfolio">
              <div class="col-sm-4" id="foliocolumn">
                  <div class="content">
                      <div class="content-overlay">

                          <div class="content-details">
                              <h5>Project 1</h5>
                              <p class="hovertext">This is a multifunctional application that will help you organize your trip. 
                                With ease you are able to search for flights and also search the current currency exchange rates.
                              </p>
                              <p>JavaScript | JQuery | Flight Search: Amadeus API | Currency Exchange: ExchangeRatesAPI |</p>
                              <a href="https://github.com/phamthomas12/Project-1" class="githublink"
                                  target="_blank"><strong>GitHub</strong></a>
                              <a href="https://phamthomas12.github.io/Project-1/" class="websitelink"
                                  target="_blank"><strong>|Deployed Site</strong></a>
                          </div>
                      </div>
                      <img src= {Project1} alt="teamProject1" class="thumbnails" id="project1"></img>
              </div>
              </div>
              <div class="col-sm-4" id="foliocolumn">
                        <div class="content">
                            <div class="content-overlay">
    
                                <div class="content-details">
                                    <h5>Eat Da Burger</h5>
                                    <p class="hovertext">Users can filter or sort through the directory to find an employee
                                      and quickly access their info.
                                    </p>
                                    <p>Node | Express | MySQL | Sequelize | Materialize | Handlebars | Heroku</p>
                                    <a href="https://github.com/phamthomas12/Eat-Da_Burger" class="githublink"
                                        target="_blank"><strong>GitHub</strong></a>
                                    <a href="https://blooming-badlands-42754.herokuapp.com/" class="websitelink"
                                        target="_blank"><strong>|Deployed Site</strong></a>
                                </div>
                            </div>
                            <img src= {Burger} alt="Eat-Da-Burger" class="thumbnails" id="burger">
                        </img>
                    </div>
              </div>
              <div class="col-sm-4" id="foliocolumn">
                      <div class="content">
                          <div class="content-overlay">
  
                              <div class="content-details">
                                  <h5>Project 2</h5>
                                  <p class="hovertext">Well Me is a wellness tracker where users can track their wellness goals and find inspiration.
                                    Users can find recipes that fit into their daily intake count and also able to rate their daily performance that is saved upto 7 days.
                                  </p>
                                  <p>Node | Express | MySQL | Sequelize | Handlebars | Heroku</p>
                                  <a href="https://github.com/phamthomas12/project2" class="githublink"
                                      target="_blank"><strong>GitHub</strong></a>
                                  <a href="https://lkblt-project2.herokuapp.com/" class="websitelink"
                                      target="_blank"><strong>|Deployed Site</strong></a>
                              </div>
                          </div>
                          <img src={Project2} alt="Well-Me" class="thumbnails" id="project2"></img>
                  </div>
                  </div>
                  <div class="col-sm-4" id="foliocolumn">
                    <div class="content">
                        <div class="content-overlay">

                            <div class="content-details">
                                <h5>Budget Calculator</h5>
                                <p class="hovertext">This is a Progressive Web App where users can add expenses and deposits to their budget with or without a connection. 
                                When entering transactions offline, they populate the total when brought back online.
                                </p>
                                <p>Node | JavaScript | MongoDB | PWA | Heroku</p>
                                <a href="https://github.com/phamthomas12/budget-tracker" class="githublink"
                                    target="_blank"><strong>GitHub</strong></a>
                                <a href="https://protected-beach-40915.herokuapp.com/" class="websitelink"
                                      target="_blank"><strong>|Deployed Site</strong></a>
                            </div>
                        </div>
                        <img src={Budget} alt="EmployeeTracker" class="thumbnails" id="budget"></img>
                    </div>
                </div>
                <div class="col-sm-4" id="foliocolumn">
                      <div class="content">
                          <div class="content-overlay">
  
                              <div class="content-details">
                                  <h5>Day Schedular</h5>
                                  <p class="hovertext">Browser ran simple calendar application that allows a user to save events for each hour of the day. 
                                    
                                  </p>
                                  <p>JQuery | JavaScript | HTML | CSS | Bootstrap |</p>
                                  <a href="https://github.com/phamthomas12/DaySchedular" class="githublink"
                                      target="_blank"><strong>GitHub</strong></a>
                                  <a href="https://phamthomas12.github.io/DaySchedular/" class="websitelink"
                                      target="_blank"><strong>|Deployed Site</strong></a>
                              </div>
                          </div>
                          <img src={Day} alt="day-schedular" class="thumbnails" id="day"></img>
                      </div>
                  </div>
                <div class="col-sm-4" id="foliocolumn">
                  <div class="content">
                      <div class="content-overlay">

                          <div class="content-details">
                              <h5>Workout Tracker</h5>
                              <p class="hovertext">A Fitness Tracker that allows you to create a workout regime that is saved into Heroku database that allows you to access anytime anywhere. 
                              </p>
                              <p>MonogoDB | Mongoose | Express | Heroku</p>
                              

                              <a href="https://github.com/phamthomas12/Workout-Tracker" class="githublink"
                                  target="_blank"><strong>GitHub</strong></a>
                              <a href="https://peaceful-oasis-03491.herokuapp.com/" class="websitelink"
                                  target="_blank"><strong>|Deployed Site</strong></a>
                          </div>
                      </div>
                      <img src={Workout} alt="Workout-Tracker" class="thumbnails" id="workout"></img>
                  </div>
              </div>
             </div>
            </section>
            </div>
    );
  }

  export default Projects 