import React from "react";
import "../createvacancy/VacancyPage.css";
import logo from "../assets/logo.png";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";

const VacancyPage = () => {
  return (
    <div className="hire__vacancy_page_vp">
      <div className="hire__vacancy_page_left_vp">
        <div className="hire__logo_vp">
          <img src={logo} alt=""></img>
        </div>

        <div className="hire__username_vp">
          <div className="hire__username_logo_vp">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_vp">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_vp">
          <button type="button">Create Vacancy</button>
        </div>

        <div className="hire__notifications_vp">
          <button type="button">Notifications</button>
        </div>

        <div className="hire__vacancies_vp">
          <button type="button">vacancies</button>
        </div>

        <div className="hire__messages_vp">
          <button type="button">Messages</button>
        </div>

        <div className="hire__settings_vp">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_vp">
          <div className="hire__feedback_text_vp">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_vp">
          <div className="hire__logout_logo_vp">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__vacancy_page_right_vp">
        <div>hello</div>
      </div>
    </div>
  );
};
export default VacancyPage;
