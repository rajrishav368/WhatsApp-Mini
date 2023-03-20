import React from "react";
import "../Workforce Add Employees/WorkforceAddEmployees.css";
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

const WorkforceAddEmployees = () => {
  return (
    <div className="hire__workforceaddemployees_wfae">
      <div className="hire__workforceaddemployees_left_wfae">
        <div className="hire__logo_wfae">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_wfae">
          <div className="hire__username_logo_wfae">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_wfae">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_wfae">
          <button type="button">Create vacancy</button>
        </div>
        <div className="hire__notifications_wfae">
          <button type="button">Notifications</button>
        </div>
        <div className="hire__vacancies_wfae">
          <button type="button">Vacancies</button>
        </div>
        <div className="hire__messages_wfae">
          <button>Messages</button>
        </div>
        <div className="hire__settings_wfae">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_wfae">
          <div className="hire__feedback_text_wfae">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_wfae">
          <div className="hire__logout_logo_wfae">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__workforceaddemployees_right_wfae">
        <div className="hire__company_header_wfae">
          <div className="hire__company_profile_header_wfae">
            <h2>Application completeness</h2>
            <p>This section shows you how complete your application is</p>
          </div>
        </div>

        <div className="hire__photocompany_wfae">
          <div className="hire__addphoto_wfae">
            <div className="hire__addphoto_logo_wfae">
              <img src={addphoto} alt=""></img>
            </div>
            <div className="hire__addphoto_text_wfae">
              <h4>Add a photo</h4>
            </div>
          </div>

          <div className="hire__aboutcompany_wfae">
            <div className="hire__aboutcompany_logo_wfae">
              <img src={building} alt=""></img>
            </div>
            <div className="hire__aboutcompany_text_wfae">
              <h4>Write about your company</h4>
            </div>
          </div>
        </div>

        <div className="hire__generalbutton_wfae">
          <div className="hire__general_info_wfae">
            <h2>General Information</h2>
          </div>
          <div className="hire__edit_button_wfae">
            <button type="button">Preview</button>
          </div>
        </div>

        <div className="hire__company_body_wfae">
          <div className="hire__rectangle_username_location_wfae">
            <div className="hire__rectangle_camera_wfae">
              <img src={camera} alt=""></img>
            </div>

            <div className="hire__username_text_2_wfae">
              <h1>Username</h1>
              <div className="hire__location_logo_wfae">
                <img src={locationlogo} alt=""></img>
                <h4>Location</h4>
              </div>
            </div>
          </div>
          <div className="hire__website_email_size_wfae">
            <div className="hire__rectangle_1_wfae"></div>
            <div className="hire__company_website_wfae">
              <h5>Company website</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_2_wfae"></div>
            <div className="hire__contact_email_wfae">
              <h5>Contact E-mail</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_3_wfae"></div>
            <div className="hire__company_size_wfae">
              <h5>Company size</h5>
              <h6>-------</h6>
            </div>
          </div>
          <div className="hire__social_media_links_wfae">
            <div className="hire__linkedin_wfae">
              <div className="hire__linkedin_logo_wfae">
                <img src={linkedin} alt=""></img>
              </div>
              <div className="hire__linkedin_text_wfae">
                <h5>Linkedin</h5>
              </div>
            </div>
            <div className="hire__facebook_wfae">
              <div className="hire__facebook_logo_wfae">
                <img src={facebook} alt=""></img>
              </div>
              <div className="hire__facebook_text_wfae">
                <h5>facebook</h5>
              </div>
            </div>
            <div className="hire__github_wfae">
              <div className="hire__github_logo_wfae">
                <img src={github} alt=""></img>
              </div>
              <div className="hire__github_text_wfae">
                <h5>Github</h5>
              </div>
            </div>

            <div className="hire__instagram_wfae">
              <div className="hire__instagram_logo_wfae">
                <img src={instagram} alt=""></img>
              </div>
              <div className="hire__instagram_text_wfae">
                <h5>Instagram</h5>
              </div>
            </div>
          </div>
          <div className="hire__social_media_links_2_wfae">
            <div className="hire__telegram_wfae">
              <div className="hire__telegram_logo_wfae">
                <img src={telegram} alt=""></img>
              </div>
              <div className="hire__telegram_text_wfae">
                <h5>Telegram</h5>
              </div>
            </div>
            <div className="hire__youtube_wfae">
              <div className="hire__youtube_logo_wfae">
                <img src={youtube} alt=""></img>
              </div>
              <div className="hire__youtube_text_wfae">
                <h5>YouTube</h5>
              </div>
            </div>
          </div>
          <div className="hire__company_description_wfae">
            <h5>Description</h5>
          </div>
          <div className="hire__company_description_arrow_wfae">
            <h6>-------</h6>
          </div>
        </div>
        <div className="hire__skillbuttonparagraph_wfae">
          <div className="hire__skillbutton_wfae">
            <h2>Skills</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__skillparagraph_wfae">
            <h5>html</h5>
            <h5>css</h5>
          </div>
        </div>
        <div className="hire__languagebuttonparagraph_wfae">
          <div className="hire__languagebutton_wfae">
            <h2>Languages</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__languageparagraph_wfae">
            <h5>English-B2</h5>
          </div>
        </div>
        <div className="hire__aboutmebuttonparagraph_wfae">
          <div className="hire__aboutmebutton_wfae">
            <h2>About me</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__aboutmeparagraph_wfae">
            <h5>I have nothing to say about me</h5>
          </div>
        </div>
        <div className="hire__workbuttonparagraph_wfae">
          <div className="hire__workbutton_wfae">
            <h2>Work Experience</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__workparagraph_wfae">
            <h5>I have nothing to say about me</h5>
          </div>
        </div>
        <div className="hire__educationbuttonparagraph_wfae">
          <div className="hire__educationbutton_wfae">
            <h2>Education</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__educationparagraph_wfae">
            <h5>I have nothing to say about me</h5>
          </div>
        </div>
        <div className="hire__licencebuttonparagraph_wfae">
          <div className="hire__licencebutton_wfae">
            <h2>Licences and Certificates</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__licenceparagraph_wfae">
            <h5>I have nothing to say about me</h5>
          </div>
        </div>
        <div className="hire__researchbuttonparagraph_wfae">
          <div className="hire__researchbutton_wfae">
            <h2>Research</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__researchparagraph_wfae">
            <h5>I have nothing to say about me</h5>
          </div>
        </div>
        <div className="hire__awardsbuttonparagraph_wfae">
          <div className="hire__awardsbutton_wfae">
            <h2>Awards</h2>
            <button type="button">+</button>
          </div>
          <div className="hire__awardsparagraph_wfae">
            <h5>I have nothing to say about me</h5>
          </div>
        </div>
        <div className="hire__save_button_wfae">
            <button type="button">Save</button>
          </div>
      </div>
    </div>
  );
};
export default WorkforceAddEmployees;
