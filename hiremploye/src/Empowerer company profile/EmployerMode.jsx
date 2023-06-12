import React from "react";
import "../Empowerer company profile/EmployerMode.css";
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
import { Link } from "react-router-dom";

const EmployerMode = () => {
  return (
    <div className="hire__employermode_emo">
      <div className="hire__employermode_left_emo">
        <div className="hire__logo_emo">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_emo">
          <div className="hire__username_logo_emo">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_emo">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_emo">
          <button type="button">Create vacancy</button>
        </div>
        <div className="hire__notifications_emo">
          <button type="button">Notifications</button>
        </div>
        <div className="hire__vacancies_emo">
          <button type="button">Vacancies</button>
        </div>
        <div className="hire__messages_emo">
          <button>Messages</button>
        </div>
        <div className="hire__settings_emo">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_emo">
          <div className="hire__feedback_text_emo">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_emo">
          <div className="hire__logout_logo_emo">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__employermode_right_emo">
        <div className="hire__company_header_emo">
          <div className="hire__company_profile_header_emo">
            <h2>Company profile</h2>
          </div>
          <div className="hire__company_members_emo">
            <h2>Members</h2>
          </div>
          <div className="hire__switchworkforce_button_emo">
            <button type="button">Switch to Workforce</button>
          </div>
          <div className="hire__edit_button_emo">
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="hire__company_body_emo">
          <div className="hire__rectangle_username_location_emo">
            <div className="hire__rectangle_camera_emo">
              <img src={camera} alt=""></img>
            </div>

            <div className="hire__username_text_2_emo">
              <h1>Username</h1>
              <div className="hire__location_logo_emo">
                <img src={locationlogo} alt=""></img>
                <h4>Location</h4>
              </div>
            </div>
          </div>
          <div className="hire__website_email_size_emo">
            <div className="hire__rectangle_1_emo"></div>
            <div className="hire__company_website_emo">
              <h5>Company website</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_2_emo"></div>
            <div className="hire__contact_email_emo">
              <h5>Contact E-mail</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_3_emo"></div>
            <div className="hire__company_size_emo">
              <h5>Company size</h5>
              <h6>-------</h6>
            </div>
          </div>
          <div className="hire__social_media_links_emo">
            <div className="hire__linkedin_emo">
              <div className="hire__linkedin_logo_emo">
                <img src={linkedin} alt=""></img>
              </div>
              <div className="hire__linkedin_text_emo">
                <h5>Linkedin</h5>
              </div>
            </div>
            <div className="hire__facebook_emo">
              <div className="hire__facebook_logo_emo">
                <img src={facebook} alt=""></img>
              </div>
              <div className="hire__facebook_text_emo">
                <h5>facebook</h5>
              </div>
            </div>
            <div className="hire__github_emo">
              <div className="hire__github_logo_emo">
                <img src={github} alt=""></img>
              </div>
              <div className="hire__github_text_emo">
                <h5>Github</h5>
              </div>
            </div>

            <div className="hire__instagram_emo">
              <div className="hire__instagram_logo_emo">
                <img src={instagram} alt=""></img>
              </div>
              <div className="hire__instagram_text_emo">
                <h5>Instagram</h5>
              </div>
            </div>
          </div>
          <div className="hire__social_media_links_2_emo">
            <div className="hire__telegram_emo">
              <div className="hire__telegram_logo_emo">
                <img src={telegram} alt=""></img>
              </div>
              <div className="hire__telegram_text_emo">
                <h5>Telegram</h5>
              </div>
            </div>
            <div className="hire__youtube_emo">
              <div className="hire__youtube_logo_emo">
                <img src={youtube} alt=""></img>
              </div>
              <div className="hire__youtube_text_emo">
                <h5>YouTube</h5>
              </div>
            </div>
          </div>
          <div className="hire__company_description_emo">
            <h5>Description</h5>
          </div>
          <div className="hire__company_description_arrow_emo">
            <h6>-------</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployerMode;
