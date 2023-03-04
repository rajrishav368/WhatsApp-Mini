import React from "react";
import "../companyprofile/CompanyProfileEmployer2.css";
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

const CompanyProfileEmployer2 = () => {
  return (
    <div className="hire__company_profile_cpe2">
      <div className="hire__company_profile_left_cpe2">
        <div className="hire__logo_cpe2">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_cpe2">
          <div className="hire__username_logo_cpe2">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_cpe2">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_cpe2">
          <button type="button">Create vacancy</button>
        </div>
        <div className="hire__notifications_cpe2">
          <button type="button">Notifications</button>
        </div>
        <div className="hire__vacancies_cpe2">
          <button type="button">Vacancies</button>
        </div>
        <div className="hire__messages_cpe2">
          <button>Messages</button>
        </div>
        <div className="hire__settings_cpe2">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_cpe2">
          <div className="hire__feedback_text_cpe2">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_cpe2">
          <div className="hire__logout_logo_cpe2">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__company_profile_right_cpe2">

        <div className="hire__company_header_cpe2">
          <div className="hire__company_profile_header_cpe2">
            <h2>Application completeness</h2>
            <p>This section shows you how complete your application is</p>
          </div>
        </div>

        <div className="hire__photocompany_cpe2">

          <div className="hire__addphoto_cpe2">
            <div className="hire__addphoto_logo_cpe2">
              <img src={addphoto} alt=""></img>
            </div>
            <div className="hire__addphoto_text_cpe2">
              <h4>Add a photo</h4>
            </div>
          </div>
          
          <div className="hire__aboutcompany_cpe2">
            <div className="hire__aboutcompany_logo_cpe2">
              <img src={building} alt=""></img>
            </div>
            <div className="hire__aboutcompany_text_cpe2">
              <h4>Write about your company</h4>
            </div>
          </div>
        </div>

        <div className="hire__generalbutton_cpe2">
          <div className="hire__general_info_cpe2">
            <h2>General Information</h2>
          </div>
          <div className="hire__edit_button_cpe2">
            <button type="button">Edit</button>
          </div>
        </div>
       

        <div className="hire__company_body_cpe2">
          <div className="hire__rectangle_username_location_cpe2">
            <div className="hire__rectangle_camera_cpe2">
              <img src={camera} alt=""></img>
            </div>

            <div className="hire__username_text_2_cpe2">
              <h1>Username</h1>
              <div className="hire__location_logo_cpe2">
                <img src={locationlogo} alt=""></img>
                <h4>Location</h4>
              </div>
            </div>
          </div>
          <div className="hire__website_email_size_cpe2">
            <div className="hire__rectangle_1_cpe2"></div>
            <div className="hire__company_website_cpe2">
              <h5>Company website</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_2_cpe2"></div>
            <div className="hire__contact_email_cpe2">
              <h5>Contact E-mail</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_3_cpe2"></div>
            <div className="hire__company_size_cpe2">
              <h5>Company size</h5>
              <h6>-------</h6>
            </div>
          </div>
          <div className="hire__social_media_links_cpe2">
            <div className="hire__linkedin_cpe2">
              <div className="hire__linkedin_logo_cpe2">
                <img src={linkedin} alt=""></img>
              </div>
              <div className="hire__linkedin_text_cpe2">
                <h5>Linkedin</h5>
              </div>
            </div>
            <div className="hire__facebook_cpe2">
              <div className="hire__facebook_logo_cpe2">
                <img src={facebook} alt=""></img>
              </div>
              <div className="hire__facebook_text_cpe2">
                <h5>facebook</h5>
              </div>
            </div>
            <div className="hire__github_cpe2">
              <div className="hire__github_logo_cpe2">
                <img src={github} alt=""></img>
              </div>
              <div className="hire__github_text_cpe2">
                <h5>Github</h5>
              </div>
            </div>

            <div className="hire__instagram_cpe2">
              <div className="hire__instagram_logo_cpe2">
                <img src={instagram} alt=""></img>
              </div>
              <div className="hire__instagram_text_cpe2">
                <h5>Instagram</h5>
              </div>
            </div>
          </div>
          <div className="hire__social_media_links_2_cpe2">
            <div className="hire__telegram_cpe2">
              <div className="hire__telegram_logo_cpe2">
                <img src={telegram} alt=""></img>
              </div>
              <div className="hire__telegram_text_cpe2">
                <h5>Telegram</h5>
              </div>
            </div>
            <div className="hire__youtube_cpe2">
              <div className="hire__youtube_logo_cpe2">
                <img src={youtube} alt=""></img>
              </div>
              <div className="hire__youtube_text_cpe2">
                <h5>YouTube</h5>
              </div>
            </div>
          </div>
          <div className="hire__company_description_cpe2">
            <h5>Description</h5>
          </div>
          <div className="hire__company_description_arrow_cpe2">
            <h6>-------</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyProfileEmployer2;
