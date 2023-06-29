import React from "react";
import "../Messages/Messages.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import applicant from "../assets/applicantlogo.png";

const Messages = () => {
  return (
    <div className="hire__messages_msg">
      <div className="hire__messages_left_msg">
        <div className="hire__logo_msg">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__username_msg">
          <div className="hire__username_logo_msg">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_msg">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_msg">
          <Link to="/CreateVacancy">
            <button type="button">Create Vacancy</button>
          </Link>
        </div>

        <div className="hire__notificationsbutton_msg">
          <Link to="/Notification">
            <button type="button">Notifications</button>
          </Link>
        </div>

        <div className="hire__vacancies_msg">
          <Link to="/VacancyPage">
            <button type="button">vacancies</button>
          </Link>
        </div>

        <div className="hire__messagesbutton_msg">
          <button type="button">Messages</button>
        </div>

        <div className="hire__settings_msg">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_msg">
          <div className="hire__feedback_text_msg">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_msg">
          <div className="hire__logout_logo_msg">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__messages_right_msg">
        <div className="hire__messagesmark_msg">
          <div className="hire__messages_text_msg">
            <h2>Messages</h2>
          </div>
          <div className="hire__markallbutton_msg">
            <button type="button">Mark All As Read</button>
          </div>
        </div>
        <div className="hire__usernamedate_msg">
          <div className="hire__applicantlogo_msg">
            <img src={applicant} alt=""></img>
          </div>
          <div className="hire__applicantext_msg">
            <h5>Username</h5>
          </div>
          <div className="hire__jobtext_msg">
            <h6>Message goes here</h6>
          </div>
          <div className="hire__date_msg">
            <h5>dd/mm/yyyy</h5>
          </div>
          <div className="hire__markbutton_msg">
            <button type="button">Mark As Read</button>
          </div>
          <div className="hire__viewbutton_msg">
            <button type="button">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Messages;
