import React from "react";
import "../WorkforceEmployees/WorkforceEmployees.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import empimage from "../assets/empimgae.png";
import pencil from "../assets/Pencil.png";

const WorkforceEmployees = () => {
  return (
    <div className="hire__workforceemployees_wf_emp">
      <div className="hire__workforceemployees_left_wf_emp">
        <div className="hire__logo_wf_emp">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__username_wf_emp">
          <div className="hire__username_logo_wf_emp">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_wf_emp">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_wf_emp">
          <button type="button">Create Vacancy</button>
        </div>

        <div className="hire__notificationsbutton_wf_emp">
          <button type="button">Notifications</button>
        </div>

        <div className="hire__vacancies_wf_emp">
          <button type="button">vacancies</button>
        </div>

        <div className="hire__messagesbutton_wf_emp">
          <button type="button">Messages</button>
        </div>

        <div className="hire__settings_wf_emp">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_wf_emp">
          <div className="hire__feedback_text_wf_emp">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_wf_emp">
          <div className="hire__logout_logo_wf_emp">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>
      <div className="hire__workforceemployees_right_wf_emp">
        <div className="hire__workforceemployees_header_wf_emp">
          <h2>Employees</h2>
          <button type="button">Add Employees</button>
        </div>

        <div className="hire__jobrolesdescription1_wf_emp">
          <div className="hire__jobroles1_wf_emp">
            <div className="hire__empnamemessage1_wf_emp">
              <div className="hire__empname1_wf_emp">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage1_wf_emp">
                <img src={pencil} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription1_wf_emp">
              <div className="hire__rolename1_wf_emp">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription1_wf_emp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview1_wf_emp">
              <div className="hire__rolelocation1_wf_emp">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience1_wf_emp">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining1_wf_emp">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton1_wf_emp">
                <button type="button">View</button>
              </div>
            </div>
          </div>
          <div className="hire__jobroles2_wf_emp">
            <div className="hire__empnamemessage2_wf_emp">
              <div className="hire__empname2_wf_emp">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage2_wf_emp">
                <img src={pencil} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription2_wf_emp">
              <div className="hire__rolename1_wf_emp">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription2_wf_emp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview2_wf_emp">
              <div className="hire__rolelocation2_wf_emp">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience2_wf_emp">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining2_wf_emp">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton2_wf_emp">
                <button type="button">View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hire__jobrolesdescription2_wf_emp">
          <div className="hire__jobroles3_wf_emp">
            <div className="hire__empnamemessage3_wf_emp">
              <div className="hire__empname3_wf_emp">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage3_wf_emp">
                <img src={pencil} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription3_wf_emp">
              <div className="hire__rolename3_wf_emp">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription3_wf_emp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview3_wf_emp">
              <div className="hire__rolelocation3_wf_emp">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience3_wf_emp">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining3_wf_emp">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton3_wf_emp">
                <button type="button">View</button>
              </div>
            </div>
          </div>
          <div className="hire__jobroles4_wf_emp">
            <div className="hire__empnamemessage4_wf_emp">
              <div className="hire__empname4_wf_emp">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage4_wf_emp">
                <img src={pencil} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription4_wf_emp">
              <div className="hire__rolename4_wf_emp">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription4_wf_emp">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview4_wf_emp">
              <div className="hire__rolelocation4_wf_emp">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience4_wf_emp">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining4_wf_emp">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton4_wf_emp">
                <button type="button">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkforceEmployees;
