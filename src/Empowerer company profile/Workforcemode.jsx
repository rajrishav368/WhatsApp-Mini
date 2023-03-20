import React from "react";
import "../Empowerer company profile/WorkforceMode.css";
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

const WorkforceMode = () => {
  return (
    <div className="hire__workforcemode_wfmo">
      <div className="hire__workforce_left_wfmo">
        <div className="hire__logo_wfmo">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_wfmo">
          <div className="hire__username_logo_wfmo">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_wfmo">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_wfmo">
          <button type="button">Create vacancy</button>
        </div>
        <div className="hire__notifications_wfmo">
          <button type="button">Notifications</button>
        </div>
        <div className="hire__vacancies_wfmo">
          <button type="button">Vacancies</button>
        </div>
        <div className="hire__messages_wfmo">
          <button>Messages</button>
        </div>
        <div className="hire__settings_wfmo">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_wfmo">
          <div className="hire__feedback_text_wfmo">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_wfmo">
          <div className="hire__logout_logo_wfmo">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__workforce_right_wfmo">
        <div className="hire__company_header_wfmo">
          <div className="hire__company_profile_header_wfmo">
            <h2>Application completeness</h2>
            <p>This section shows you how complete your application is</p>
          </div>
          <div className="hire__switchemployer_button_wfmo">
            <button type="button">Switch to Employer</button>
          </div>
        </div>

        <div className="hire__photocompany_wfmo">
          <div className="hire__addphoto_wfmo">
            <div className="hire__addphoto_logo_wfmo">
              <img src={addphoto} alt=""></img>
            </div>
            <div className="hire__addphoto_text_wfmo">
              <h4>Add a photo</h4>
            </div>
          </div>

          <div className="hire__aboutcompany_wfmo">
            <div className="hire__aboutcompany_logo_wfmo">
              <img src={building} alt=""></img>
            </div>
            <div className="hire__aboutcompany_text_wfmo">
              <h4>Write about your company</h4>
            </div>
          </div>
        </div>

        <div className="hire__generalbutton_wfmo">
          <div className="hire__general_info_wfmo">
            <h2>General Information</h2>
          </div>
          <div className="hire__edit_button_wfmo">
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="hire__company_body_wfmo">
          <div className="hire__rectangle_username_location_wfmo">
            <div className="hire__rectangle_camera_wfmo">
              <img src={camera} alt=""></img>
            </div>

            <div className="hire__username_text_2_wfmo">
              <h1>Username</h1>
              <div className="hire__location_logo_wfmo">
                <img src={locationlogo} alt=""></img>
                <h4>Location</h4>
              </div>
            </div>
          </div>
          <div className="hire__website_email_size_wfmo">
            <div className="hire__rectangle_1_wfmo"></div>
            <div className="hire__company_website_wfmo">
              <h5>Company website</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_2_wfmo"></div>
            <div className="hire__contact_email_wfmo">
              <h5>Contact E-mail</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_3_wfmo"></div>
            <div className="hire__company_size_wfmo">
              <h5>Company size</h5>
              <h6>-------</h6>
            </div>
          </div>
          <div className="hire__social_media_links_wfmo">
            <div className="hire__linkedin_wfmo">
              <div className="hire__linkedin_logo_wfmo">
                <img src={linkedin} alt=""></img>
              </div>
              <div className="hire__linkedin_text_wfmo">
                <h5>Linkedin</h5>
              </div>
            </div>
            <div className="hire__facebook_wfmo">
              <div className="hire__facebook_logo_wfmo">
                <img src={facebook} alt=""></img>
              </div>
              <div className="hire__facebook_text_wfmo">
                <h5>facebook</h5>
              </div>
            </div>
            <div className="hire__github_wfmo">
              <div className="hire__github_logo_wfmo">
                <img src={github} alt=""></img>
              </div>
              <div className="hire__github_text_wfmo">
                <h5>Github</h5>
              </div>
            </div>

            <div className="hire__instagram_wfmo">
              <div className="hire__instagram_logo_wfmo">
                <img src={instagram} alt=""></img>
              </div>
              <div className="hire__instagram_text_wfmo">
                <h5>Instagram</h5>
              </div>
            </div>
          </div>
          <div className="hire__social_media_links_2_wfmo">
            <div className="hire__telegram_wfmo">
              <div className="hire__telegram_logo_wfmo">
                <img src={telegram} alt=""></img>
              </div>
              <div className="hire__telegram_text_wfmo">
                <h5>Telegram</h5>
              </div>
            </div>
            <div className="hire__youtube_wfmo">
              <div className="hire__youtube_logo_wfmo">
                <img src={youtube} alt=""></img>
              </div>
              <div className="hire__youtube_text_wfmo">
                <h5>YouTube</h5>
              </div>
            </div>
          </div>
          <div className="hire__company_description_wfmo">
            <h5>Description</h5>
          </div>
          <div className="hire__company_description_arrow_wfmo">
            <h6>-------</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkforceMode;
