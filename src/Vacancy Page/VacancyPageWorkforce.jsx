import React from "react";
import "../Vacancy Page/VacancyPageWorkforce.css";
import logo from "../assets/logo.png";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import Trash from "../assets/Trash.png";
import Pencil from "../assets/Pencil.png";
import views from "../assets/Views.png";
import { Link } from "react-router-dom";

const VacancyPageWorkforce = () => {
  return (
    <div className="hire__vacancy_page_vp_wf">
      <div className="hire__vacancy_page_left_vp_wf">
        <div className="hire__logo_vp_wf">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_vp_wf">
          <div className="hire__username_logo_vp_wf">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_vp_wf">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_vp_wf">
          <button type="button">Create Vacancy</button>
        </div>

        <div className="hire__notifications_vp_wf">
          <button type="button">Notifications</button>
        </div>

        <div className="hire__vacancies_vp_wf">
          <button type="button">vacancies</button>
        </div>

        <div className="hire__messages_vp_wf">
          <button type="button">Messages</button>
        </div>

        <div className="hire__settings_vp_wf">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_vp_wf">
          <div className="hire__feedback_text_vp_wf">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_vp_wf">
          <div className="hire__logout_logo_vp_wf">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__vacancy_page_right_vp_wf">
        <div className="hire__vacancy_header_vp_wf">
          <div className="hire__vacancy_header1_vp_wf">
            <h3>Active Vacancies</h3>
          </div>
          <div className="hire__vacancy_header2_vp_wf">
            <h3>Archived Vacancies</h3>
          </div>
        </div>
        <div className="hire__search_vacancy_vp_wf">
          <div className="hire__search_vp_wf">
            <input type="search" placeholder="Search"></input>
          </div>
        </div>
        <div className="hire__job_vacancy_vp_wf">
          <div className="hire__job_title_1_vp_wf">
            <div className="hire__job_title_1_text_vp_wf">
              <h3>Job Title 1</h3>
            </div>
            <div className="hire__job_title_1_image_vp_wf">
              <img src={Pencil} alt=""></img>
              <img src={Trash} alt=""></img>
            </div>
            <div className="hire__job_tile_1_viewapplication_vp_wf">
              <button type="button">View applicants</button>
            </div>
          </div>

          <div className="hire__job_title_2_vp_wf">
            <div className="hire__job_title_2_text_vp_wf">
              <h3>Job Title 2</h3>
            </div>
            <div className="hire__job_title_2_image_vp_wf">
              <img src={Pencil} alt=""></img>
              <img src={Trash} alt=""></img>
            </div>
            <div className="hire__job_tile_2_viewapplication_vp_wf">
              <button type="button">View applicants</button>
            </div>
          </div>

          <div className="hire__job_title_3_vp_wf">
            <div className="hire__job_title_3_text_vp_wf">
              <h3>Job Title 3</h3>
            </div>
            <div className="hire__job_title_3_image_vp_wf">
              <img src={Pencil} alt=""></img>
              <img src={Trash} alt=""></img>
            </div>
            <div className="hire__job_tile_3_viewapplication_vp_wf">
              <button type="button">View applicants</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hire__datetime_right_vp_wf">
        <div className="hire__vacancyposted_vp_wf">
          <h4>Vacancy posted on:</h4>
          <h3>DD/MM/YYYY</h3>
        </div>
        <div className="hire__vacancyexpire_vp_wf">
          <h4>Vacancy Expires on:</h4>
          <h3>DD/MM/YYYY</h3>
        </div>
        <div className="hire__totalapplicants_vp_wf">
          <h4>Total number of applicants:</h4>
          <h3>0</h3>
        </div>
        <div className="hire__screeningstage_vp_wf">
          <h4>Applicants on screening stage:</h4>
          <h3>0</h3>
        </div>
        <div className="hire__interviewstage_vp_wf">
          <h4>Applicants on interview stage:</h4>
          <h3>0</h3>
        </div>
        <div className="hire__rejectedaccepted_vp_wf">
          <div className="hire__rejected_vp">
            <h4>Rejected:</h4>
            <h3>0</h3>
          </div>
          <div className="hire__accepted_vp_wf">
            <h4>Accepted:</h4>
            <h3>0</h3>
          </div>
        </div>
        <div className="hire__totalviews_vp_wf">
          <img src={views} alt=""></img>
          <h5>Number of views:</h5>
          <h4>0</h4>
        </div>
      </div>
    </div>
  );
};
export default VacancyPageWorkforce;
