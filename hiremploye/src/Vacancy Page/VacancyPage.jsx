import React from "react";
import "../Vacancy Page/VacancyPage.css";
import logo from "../assets/logo.png";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import Trash from "../assets/Trash.png";
import Pencil from "../assets/Pencil.png";
import views from "../assets/Views.png";
import { Link } from "react-router-dom";

const VacancyPage = () => {
  return (
    <div className="hire__vacancy_page_vp">
      <div className="hire__vacancy_page_left_vp">
        <div className="hire__logo_vp">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
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
          <Link to="/CreateVacancy">
            <button type="button">Create Vacancy</button>
          </Link>
        </div>

        <div className="hire__notifications_vp">
          <Link to="/Notification">
            <button type="button">Notifications</button>
          </Link>
        </div>

        <div className="hire__vacancies_vp">
          <button type="button">vacancies</button>
        </div>

        <div className="hire__messages_vp">
          <Link to="/Messages">
            <button type="button">Messages</button>
          </Link>
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
        <div className="hire__vacancy_header_vp">
          <div className="hire__vacancy_header1_vp">
            <h3>Active Vacancies</h3>
          </div>
          <div className="hire__vacancy_header2_vp">
            <h3>Archived Vacancies</h3>
          </div>
        </div>
        <div className="hire__search_vacancy_vp">
          <div className="hire__search_vp">
            <input type="search" placeholder="Search"></input>
          </div>
          <div className="hire__vacancy_button_vp">
            <button type="button">+ Create Vacancy</button>
          </div>
        </div>
        <div className="hire__job_vacancy_vp">
          <div className="hire__job_title_1_vp">
            <div className="hire__job_title_1_text_vp">
              <h3>Job Title 1</h3>
            </div>
            <div className="hire__job_title_1_image_vp">
              <img src={Pencil} alt=""></img>
              <img src={Trash} alt=""></img>
            </div>
            <div className="hire__job_tile_1_viewapplication_vp">
              <button type="button">View applicants</button>
            </div>
          </div>

          <div className="hire__job_title_2_vp">
            <div className="hire__job_title_2_text_vp">
              <h3>Job Title 2</h3>
            </div>
            <div className="hire__job_title_2_image_vp">
              <img src={Pencil} alt=""></img>
              <img src={Trash} alt=""></img>
            </div>
            <div className="hire__job_tile_2_viewapplication_vp">
              <button type="button">View applicants</button>
            </div>
          </div>

          <div className="hire__job_title_3_vp">
            <div className="hire__job_title_3_text_vp">
              <h3>Job Title 3</h3>
            </div>
            <div className="hire__job_title_3_image_vp">
              <img src={Pencil} alt=""></img>
              <img src={Trash} alt=""></img>
            </div>
            <div className="hire__job_tile_3_viewapplication_vp">
              <button type="button">View applicants</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hire__datetime_right_vp">
        <div className="hire__vacancyposted_vp">
          <h4>Vacancy posted on:</h4>
          <h3>DD/MM/YYYY</h3>
        </div>
        <div className="hire__vacancyexpire_vp">
          <h4>Vacancy Expires on:</h4>
          <h3>DD/MM/YYYY</h3>
        </div>
        <div className="hire__totalapplicants_vp">
          <h4>Total number of applicants:</h4>
          <h3>0</h3>
        </div>
        <div className="hire__screeningstage_vp">
          <h4>Applicants on screening stage:</h4>
          <h3>0</h3>
        </div>
        <div className="hire__interviewstage_vp">
          <h4>Applicants on interview stage:</h4>
          <h3>0</h3>
        </div>
        <div className="hire__rejectedaccepted_vp">
          <div className="hire__rejected_vp">
            <h4>Rejected:</h4>
            <h3>0</h3>
          </div>
          <div className="hire__accepted_vp">
            <h4>Accepted:</h4>
            <h3>0</h3>
          </div>
        </div>
        <div className="hire__totalviews_vp">
          <img src={views} alt=""></img>
          <h5>Number of views:</h5>
          <h4>0</h4>
        </div>
      </div>
    </div>
  );
};
export default VacancyPage;
