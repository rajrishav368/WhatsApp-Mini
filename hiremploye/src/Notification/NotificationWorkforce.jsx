import React from "react";
import "../Notification/NotificationWorkforce.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import applicant from "../assets/applicantlogo.png";

const NotificationWorkforce = () => {
  return (
    <div className="hire__notification_nf_wf">
      <div className="hire__notification_left_nf_wf">
        <div className="hire__logo_nf_wf">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_nf_wf">
          <div className="hire__username_logo_nf_wf">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_nf_wf">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_nf_wf">
          <Link to="/VacancyList">
            <button type="button">Find Vacancy</button>
          </Link>
        </div>

        <div className="hire__notificationsbutton_nf_wf">
          <button type="button">Notifications</button>
        </div>

        <div className="hire__vacancies_nf_wf">
          <Link to="/VacancyPageWorkforce">
            <button type="button">Applications</button>
          </Link>
        </div>

        <div className="hire__messages_nf_wf">
          <Link to="/MessagesWorkforce">
            <button type="button">Messages</button>
          </Link>
        </div>

        <div className="hire__settings_nf_wf">
          <Link to="/WorkforceEmployees">
            <button type="button">Employees</button>
          </Link>
        </div>

        <div className="hire__feedback_nf_wf">
          <div className="hire__feedback_text_nf_wf">
            <button type="button">Settings</button>
          </div>
        </div>

        <div className="hire__logout_nf_wf">
          <div className="hire__logout_logo_nf_wf">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__notification_right_nf_wf">
        <div className="hire__notificationclear_nf_wf">
          <div className="hire__notification_text_nf_wf">
            <h2>Notifications</h2>
          </div>
          <div className="hire__clearallbutton_nf_wf">
            <button type="button">Clear All</button>
          </div>
        </div>
        <div className="hire__applicantjobdate_nf_wf">
          <div className="hire__applicantlogo_nf_wf">
            <img src={applicant} alt=""></img>
          </div>
          <div className="hire__applicantext_nf_wf">
            <h5>Application Name</h5>
            <h6>Applicant Name</h6>
          </div>
          <div className="hire__jobtext_nf_wf">
            <h5>Update Type</h5>
            <h6>Description</h6>
          </div>
          <div className="hire__date_nf_wf">
            <h5>dd/mm/yyyy</h5>
          </div>
          <div className="hire__clearbutton_nf_wf">
            <button type="button">Clear</button>
          </div>
          <div className="hire__viewbutton_nf_wf">
            <button type="button">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationWorkforce;
