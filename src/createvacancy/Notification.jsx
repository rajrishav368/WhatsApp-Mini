import React from "react";
import "../createvacancy/Notification.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import applicant from "../assets/applicantlogo.png";

const Notification = () => {
  return (
    <div className="hire__notification_nf">
      <div className="hire__notification_left_nf">
        <div className="hire__logo_nf">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__username_nf">
          <div className="hire__username_logo_nf">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_nf">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_nf">
          <button type="button">Create Vacancy</button>
        </div>

        <div className="hire__notificationsbutton_nf">
          <button type="button">Notifications</button>
        </div>

        <div className="hire__vacancies_nf">
          <button type="button">vacancies</button>
        </div>

        <div className="hire__messages_nf">
          <button type="button">Messages</button>
        </div>

        <div className="hire__settings_nf">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_nf">
          <div className="hire__feedback_text_nf">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_nf">
          <div className="hire__logout_logo_nf">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__notification_right_nf">
        <div className="hire__notificationclear_nf">
          <div className="hire__notification_text_nf">
            <h2>Notifications</h2>
          </div>
          <div className="hire__clearallbutton_nf">
            <button type="button">Clear All</button>
          </div>
        </div>
        <div className="hire__applicantjobdate_nf">
          <div className="hire__applicantlogo_nf">
            <img src={applicant} alt=""></img>
          </div>
          <div className="hire__applicantext_nf">
            <h5>Applicant Name</h5>
            <h6>New Applicant</h6>
          </div>
          <div className="hire__jobtext_nf">
            <h5>Job</h5>
            <h6>Job title</h6>
          </div>
          <div className="hire__date_nf">
            <h5>dd/mm/yyyy</h5>
          </div>
          <div className="hire__clearbutton_nf">
            <button type="button">Clear</button>
          </div>
          <div className="hire__viewbutton_nf">
            <button type="button">View</button>
          </div>
        </div>


      </div>
    </div>
  );
};
export default Notification;
