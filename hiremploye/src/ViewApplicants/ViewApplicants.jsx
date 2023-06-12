import React from "react";
import "../ViewApplicants/ViewApplicants.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import back_btn from "../assets/back-btn.png";
import { useState } from "react";

const ViewApplicants = () => {
  const level = [
    { label: "Applied", value: "Applied" },
    { label: "Screening", value: "Screening" },
    { label: "Interview", value: "Interview" },
    { label: "Accepted", value: "Accepted" },
    { label: "Rejected", value: "Rejected" },
  ];
  const [selectedlevel, setselectedlevel] = useState(null);
  const handlelevel = (event) => {
    setselectedlevel(event.target.value);
  };
  return (
    <div className="hire__viewapplicants_viap">
      <div className="hire__Viewapplicants_left_viap">
        <div className="hire__logo_viap">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__username_viap">
          <div className="hire__username_logo_viap">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_viap">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_viap">
          <button type="button">Create Vacancy</button>
        </div>

        <div className="hire__notificationsbutton_viap">
          <button type="button">Notifications</button>
        </div>

        <div className="hire__vacancies_viap">
          <button type="button">vacancies</button>
        </div>

        <div className="hire__messagesbutton_viap">
          <button type="button">Messages</button>
        </div>

        <div className="hire__settings_viap">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_viap">
          <div className="hire__feedback_text_viap">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_viap">
          <div className="hire__logout_logo_viap">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__viewapplications_right_viap">
        <div className="hire__backjobtitle_viap">
          <div className="hire__backbutton_viap">
            <button type="button">
              <img src={back_btn} alt="" />
              Back
            </button>
          </div>
          <div className="hire__jobtitle_viap">
            <h2>Job title:</h2>
            <h1>Untitled</h1>
          </div>
        </div>
        <div className="hire__body_header_viap">
          <div className="hire__header_name_viap">
            <h4>Name</h4>
          </div>
          <div className="hire__header_appliedate_viap">
            <h4>Applied on</h4>
          </div>
          <div className="hire__header_status_viap">
            <h4>Status</h4>
          </div>
        </div>
        <div className="hire__body_applicantsdata_viap">
          <div className="hire__applicantsdata1_viap">
            <div className="hire__applicantsname1_viap">
              <h2>A</h2>
              <h3>Applicant 1</h3>
            </div>
            <div className="hire__applicantsdate1_viap">
              <h3>Today</h3>
            </div>

            <div className="hire__applicantstatus1_viap">
              <select
                placeholder="Employment level"
                defaultValue={selectedlevel}
                value={selectedlevel}
                onChange={handlelevel}
              >
                {level.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="hire__applicantsdata2_viap">
            <div className="hire__applicantsname2_viap">
              <h2>A</h2>
              <h3>Applicant 2</h3>
            </div>
            <div className="hire__applicantsdate2_viap">
              <h3>Today</h3>
            </div>

            <div className="hire__applicantstatus2_viap">
              <select
                placeholder="Employment level"
                defaultValue={selectedlevel}
                value={selectedlevel}
                onChange={handlelevel}
              >
                {level.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="hire__applicantsdata3_viap">
            <div className="hire__applicantsname3_viap">
              <h2>A</h2>
              <h3>Applicant 3</h3>
            </div>
            <div className="hire__applicantsdate3_viap">
              <h3>Today</h3>
            </div>

            <div className="hire__applicantstatus3_viap">
              <select
                placeholder="Employment level"
                defaultValue={selectedlevel}
                value={selectedlevel}
                onChange={handlelevel}
              >
                {level.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="hire__applicantsdata4_viap">
            <div className="hire__applicantsname4_viap">
              <h2>A</h2>
              <h3>Applicant 4</h3>
            </div>
            <div className="hire__applicantsdate4_viap">
              <h3>Today</h3>
            </div>

            <div className="hire__applicantstatus4_viap">
              <select
                placeholder="Employment level"
                defaultValue={selectedlevel}
                value={selectedlevel}
                onChange={handlelevel}
              >
                {level.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="hire__applicantsdata5_viap">
            <div className="hire__applicantsname5_viap">
              <h2>A</h2>
              <h3>Applicant 5</h3>
            </div>
            <div className="hire__applicantsdate5_viap">
              <h3>Today</h3>
            </div>

            <div className="hire__applicantstatus5_viap">
              <select
                placeholder="Employment level"
                defaultValue={selectedlevel}
                value={selectedlevel}
                onChange={handlelevel}
              >
                {level.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewApplicants;
