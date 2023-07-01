import React from "react";
import "../companyprofile/CompanyProfileWorkforce.css";
import logo from "../assets/logo.png";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import camera from "../assets/camera.png";
import locationlogo from "../assets/location logo.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import addphoto from "../assets/addphotocamera.png";
import building from "../assets/Buildings.png";
import { Link } from "react-router-dom";

const CompanyProfileWorkforce = () => {
  return (
    <div className="hire__company_profile_cpwf">
      <div className="hire__company_profile_left_cpwf">
        <div className="hire__logo_cpwf">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_cpwf">
          <div className="hire__username_logo_cpwf">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_cpwf">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_cpwf">
          <Link to="/VacancyList">
            <button type="button">Search Vacancy</button>
          </Link>
        </div>
        <div className="hire__notifications_cpwf">
          <Link to="/NotificationWorkforce">
            <button type="button">Notifications</button>
          </Link>
        </div>
        <div className="hire__vacancies_cpwf">
          <Link to="/VacancyPageWorkforce">
            <button type="button">Applications</button>
          </Link>
        </div>
        <div className="hire__messages_cpwf">
          <Link to="/MessagesWorkforce">
            <button>Messages</button>
          </Link>
        </div>
        <div className="hire__settings_cpwf">
          <Link to="/WorkforceEmployees">
            <button type="button">Employees</button>
          </Link>
        </div>

        <div className="hire__feedback_cpwf">
          <div className="hire__feedback_text_cpwf">
            <button type="button">
              Settings
            </button>
          </div>
        </div>

        <div className="hire__logout_cpwf">
          <div className="hire__logout_logo_cpwf">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__company_profile_right_cpwf">
        <div className="hire__company_header_cpwf">
          <div className="hire__company_profile_header_cpwf">
            <h2>Application completeness</h2>
            <p>This section shows you how complete your application is</p>
          </div>
        </div>

        <div className="hire__photocompany_cpwf">
          <div className="hire__addphoto_cpwf">
            <div className="hire__addphoto_logo_cpwf">
              <img src={addphoto} alt=""></img>
            </div>
            <div className="hire__addphoto_text_cpwf">
              <h4>Add a photo</h4>
            </div>
          </div>

          <div className="hire__aboutcompany_cpwf">
            <div className="hire__aboutcompany_logo_cpwf">
              <img src={building} alt=""></img>
            </div>
            <div className="hire__aboutcompany_text_cpwf">
              <h4>Write about your company</h4>
            </div>
          </div>
        </div>

        <div className="hire__generalbutton_cpwf">
          <div className="hire__general_info_cpwf">
            <h2>General Information</h2>
          </div>
          <div className="hire__edit_button_cpwf">
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="hire__company_body_cpwf">
          <div className="hire__rectangle_username_location_cpwf">
            <div className="hire__rectangle_camera_cpwf">
              <img src={camera} alt=""></img>
            </div>

            <div className="hire__username_text_2_cpwf">
              <h1>Username</h1>
              <div className="hire__location_logo_cpwf">
                <img src={locationlogo} alt=""></img>
                <h4>Location</h4>
              </div>
            </div>
          </div>
          <div className="hire__website_email_size_cpwf">
            <div className="hire__rectangle_1_cpwf"></div>
            <div className="hire__company_website_cpwf">
              <h5>Company website</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_2_cpwf"></div>
            <div className="hire__contact_email_cpwf">
              <h5>Contact E-mail</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_3_cpwf"></div>
            <div className="hire__company_size_cpwf">
              <h5>Company size</h5>
              <h6>-------</h6>
            </div>
          </div>
          <div className="hire__social_media_links_cpwf">
            <div className="hire__linkedin_cpwf">
              <div className="hire__linkedin_logo_cpwf">
                <img src={linkedin} alt=""></img>
              </div>
              <div className="hire__linkedin_text_cpwf">
                <h5>Linkedin</h5>
              </div>
            </div>
            <div className="hire__facebook_cpwf">
              <div className="hire__facebook_logo_cpwf">
                <img src={facebook} alt=""></img>
              </div>
              <div className="hire__facebook_text_cpwf">
                <h5>facebook</h5>
              </div>
            </div>
            <div className="hire__github_cpwf">
              <div className="hire__github_logo_cpwf">
                <img src={github} alt=""></img>
              </div>
              <div className="hire__github_text_cpwf">
                <h5>Github</h5>
              </div>
            </div>

            <div className="hire__instagram_cpwf">
              <div className="hire__instagram_logo_cpwf">
                <img src={instagram} alt=""></img>
              </div>
              <div className="hire__instagram_text_cpwf">
                <h5>Instagram</h5>
              </div>
            </div>
          </div>
          <div className="hire__social_media_links_2_cpwf">
            <div className="hire__telegram_cpwf">
              <div className="hire__telegram_logo_cpwf">
                <img src={telegram} alt=""></img>
              </div>
              <div className="hire__telegram_text_cpwf">
                <h5>Telegram</h5>
              </div>
            </div>
            <div className="hire__youtube_cpwf">
              <div className="hire__youtube_logo_cpwf">
                <img src={youtube} alt=""></img>
              </div>
              <div className="hire__youtube_text_cpwf">
                <h5>YouTube</h5>
              </div>
            </div>
          </div>
          <div className="hire__company_description_cpwf">
            <h5>Description</h5>
          </div>
          <div className="hire__company_description_arrow_cpwf">
            <h6>-------</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyProfileWorkforce;
