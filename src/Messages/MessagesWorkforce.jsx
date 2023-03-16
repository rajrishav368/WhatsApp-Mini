import React from "react";
import "../Messages/MessagesWorkforce.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import applicant from "../assets/applicantlogo.png";

const MessagesWorkforce = () => {
  return (
    <div className="hire__messages_msg_wf">
      <div className="hire__messages_left_msg_wf">
        <div className="hire__logo_msg_wf">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__username_msg_wf">
          <div className="hire__username_logo_msg_wf">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_msg_wf">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_msg_wf">
          <button type="button">Create Vacancy</button>
        </div>

        <div className="hire__notificationsbutton_msg_wf">
          <button type="button">Notifications</button>
        </div>

        <div className="hire__vacancies_msg_wf">
          <button type="button">vacancies</button>
        </div>

        <div className="hire__messagesbutton_msg_wf">
          <button type="button">Messages</button>
        </div>

        <div className="hire__settings_msg_wf">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_msg_wf">
          <div className="hire__feedback_text_msg_wf">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_msg_wf">
          <div className="hire__logout_logo_msg_wf">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__messages_right_msg_wf">
        <div className="hire__messagesmark_msg_wf">
          <div className="hire__messages_text_msg_wf">
            <h2>Messages</h2>
          </div>
          <div className="hire__markallbutton_msg_wf">
            <button type="button">Mark All As Read</button>
          </div>
        </div>
        <div className="hire__usernamedate_msg_wf">
          <div className="hire__applicantlogo_msg_wf">
            <img src={applicant} alt=""></img>
          </div>
          <div className="hire__applicantext_msg_wf">
            <h5>Username</h5>
          </div>
          <div className="hire__jobtext_msg_wf">
            <h6>Message goes here</h6>
          </div>
          <div className="hire__date_msg_wf">
            <h5>dd/mm/yyyy</h5>
          </div>
          <div className="hire__markbutton_msg_wf">
            <button type="button">Mark As Read</button>
          </div>
          <div className="hire__viewbutton_msg_wf">
            <button type="button">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessagesWorkforce;
