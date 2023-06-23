import React from "react";
import "../companyprofile/CompanyProfileEmployer.css";
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
import { useState,useEffect } from "react";
import axios from "axios";

const CompanyProfileEmployer = () => {

  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/http://localhost:8000/CompanyInfoWorkforce', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCompanyInfo(response.data);
      } catch (error) {
        console.error(error);
        // Handle error while fetching company information
      }
    };

    fetchCompanyInfo();
  }, []);
  
  return (
    <div className="hire__company_profile_cpe">
      <div className="hire__company_profile_left_cpe">
        <div className="hire__logo_cpe">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_cpe">
          <div className="hire__username_logo_cpe">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_cpe">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_cpe">
          <button type="button">Create vacancy</button>
        </div>
        <div className="hire__notifications_cpe">
          <button type="button">Notifications</button>
        </div>
        <div className="hire__vacancies_cpe">
          <button type="button">Vacancies</button>
        </div>
        <div className="hire__messages_cpe">
          <button>Messages</button>
        </div>
        <div className="hire__settings_cpe">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_cpe">
          <div className="hire__feedback_text_cpe">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_cpe">
          <div className="hire__logout_logo_cpe">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__company_profile_right_cpe">
        <div className="hire__company_header_cpe">
          <div className="hire__company_profile_header_cpe">
            <h2>Company profile</h2>
          </div>
          <div className="hire__company_members_cpe">
            <h2>Members</h2>
          </div>
          <div className="hire__edit_button_cpe">
            <button type="button">Edit</button>
          </div>
        </div>

        <div className="hire__company_body_cpe">
          <div className="hire__rectangle_username_location_cpe">
            <div className="hire__rectangle_camera_cpe">
              <img src={camera} alt=""></img>
            </div>

            <div className="hire__username_text_2_cpe">
              <h1>username:{companyInfo.company}</h1>
              <div className="hire__location_logo_cpe">
                <img src={locationlogo}></img>
                <h4>Location</h4>
              </div>
            </div>
          </div>
          <div className="hire__website_email_size_cpe">
            <div className="hire__rectangle_1_cpe"></div>
            <div className="hire__company_website_cpe">
              <h5>Company website</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_2_cpe"></div>
            <div className="hire__contact_email_cpe">
              <h5>Contact E-mail</h5>
              <h6>-------</h6>
            </div>
            <div className="hire__rectangle_3_cpe"></div>
            <div className="hire__company_size_cpe">
              <h5>Company size</h5>
              <h6>-------</h6>
            </div>
          </div>
          <div className="hire__social_media_links_cpe">
            <div className="hire__linkedin_cpe">
              <div className="hire__linkedin_logo_cpe">
                <img src={linkedin} alt=""></img>
              </div>
              <div className="hire__linkedin_text_cpe">
                <h5>Linkedin</h5>
              </div>
            </div>
            <div className="hire__facebook_cpe">
              <div className="hire__facebook_logo_cpe">
                <img src={facebook} alt=""></img>
              </div>
              <div className="hire__facebook_text_cpe">
                <h5>facebook</h5>
              </div>
            </div>
            <div className="hire__github_cpe">
              <div className="hire__github_logo_cpe">
                <img src={github} alt=""></img>
              </div>
              <div className="hire__github_text_cpe">
                <h5>Github</h5>
              </div>
            </div>

            <div className="hire__instagram_cpe">
              <div className="hire__instagram_logo_cpe">
                <img src={instagram} alt=""></img>
              </div>
              <div className="hire__instagram_text_cpe">
                <h5>Instagram</h5>
              </div>
            </div>
          </div>
          <div className="hire__social_media_links_2_cpe">
            <div className="hire__telegram_cpe">
              <div className="hire__telegram_logo_cpe">
                <img src={telegram} alt=""></img>
              </div>
              <div className="hire__telegram_text_cpe">
                <h5>Telegram</h5>
              </div>
            </div>
            <div className="hire__youtube_cpe">
              <div className="hire__youtube_logo_cpe">
                <img src={youtube} alt=""></img>
              </div>
              <div className="hire__youtube_text_cpe">
                <h5>YouTube</h5>
              </div>
            </div>
          </div>
          <div className="hire__company_description_cpe">
            <h5>Description</h5>
          </div>
          <div className="hire__company_description_arrow_cpe">
            <h6>-------</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyProfileEmployer;
