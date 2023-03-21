import React from "react";
import "../company information/CompanyInfoEmployer.css";
import logo from "../assets/logo.png";
import camera from "../assets/camera.png";
import www from "../assets/www.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import { useState } from "react";
import Select from "react-select";
import { useMemo } from "react";
import countryList from "react-select-country-list";
import downarrow from "../assets/downarrow.png";
import { Link } from "react-router-dom";

const CompanyInfoEmployer = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="hire__employerinfo_cie">
      <div className="hire__header_cie">
        <Link to="/">
          <div className="hire__signup_logo_cie">
            <img src={logo} alt=""></img>
          </div>
        </Link>
        <div className="hire__header_username_cie">
          <div className="hire__header_username_background_cie">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_cie">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_cie">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>

      <div className="hire__companyinformation_cie">
        <h2>Company information</h2>
      </div>

      <div className="hire__upload_photo_cie">
        <div className="hire__camera_pic_cie">
          <img src={camera} alt=""></img>
        </div>
        <div className="hire__upload_text_cie">
          <h3>upload company logo</h3>
        </div>
      </div>

      <div className="hire__employee_data_cie">
        <div className="hire__company_name_cie">
          <input type="text" placeholder="Company name"></input>
        </div>
        <div className="hire__company_mail_cie">
          <input className="email" placeholder="Contact E-mail"></input>
        </div>
        <div className="hire__phone_number_cie">
          <input type="text" placeholder="Phone number"></input>
          
        </div>
        <div className="hire__country_dropdown_cie">
          <Select options={options} value={value} onChange={changeHandler} />
        </div>
        <div className="hire__state_region_cie">
          <input type="text" placeholder="Region/state"></input>
        </div>
        <div className="hire__company_size_cie">
          <input type="text" placeholder="Company size"></input>
        </div>
        <div className="hire__company_description_cie">
          <input type="text" placeholder="Company description"></input>
        </div>
      </div>

      <div className="hire__company_links_cie">
        <h2>Add your links:</h2>
      </div>
      <div className="hire__social_links_cie">
        <div className="hire__www_cie">
          <img src={www} alt=""></img>
        </div>
        <div className="hire__linkedin_cie">
          <img src={linkedin} alt=""></img>
        </div>
        <div className="hire__facebook_cie">
          <img src={facebook} alt=""></img>
        </div>
        <div className="hire__github_cie">
          <img src={github} alt=""></img>
        </div>
        <div className="hire__instagram_cie">
          <img src={instagram} alt=""></img>
        </div>
        <div className="hire__telegram_cie">
          <img src={telegram} alt=""></img>
        </div>
        <div className="hire__youtube_cie">
          <img src={youtube} alt=""></img>
        </div>
      </div>

      <div className="hire__create_button_cie">
        <button type="button">Create an account</button>
      </div>
    </div>
  );
};

export default CompanyInfoEmployer;
