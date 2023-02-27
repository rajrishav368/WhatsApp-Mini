import React from "react";
import "../company information/CompanyInfoWorkforce.css";
import logo from "../assets/logo.png";
import camera from "../assets/camera.png";
import www from "../assets/www.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import {useState} from "react";
import Select from "react-select";
import { useMemo } from "react";
import countryList from "react-select-country-list";
import downarrow from "../assets/downarrow.png"
import { Link } from "react-router-dom";

const CompanyEmployer = () => {

  const [value,setValue]= useState("");
  const options= useMemo(()=>countryList().getData(),[]);

  const changeHandler=(value)=>{
    setValue(value);
    
  };
  return (
    <div className="hire__employerworkforce">
      <div className="hire__header_ciwf">
      <Link to="/">
        <div className="hire__header_logo_ciwf">
          <img src={logo} alt=""></img>
          </div>
      </Link>
      <div className="hire__header_username_ciwf">
          <div className="hire__header_username_background_ciwf">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_ciwf">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_ciwf">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__companyinformation_ciwf">
        <h2></h2>
      </div>

      <div className="hire__upload_photo_ciwf">
        <div className="hire__camera_pic_ciwf">
          <img src={camera} alt=""></img>
        </div>
      </div>
      <div className="hire__upload_text_ciwf">
        <h3>upload company logo</h3>
      </div>

      <div className="hire__employee_data_ciwf">
        <div className="hire__company_name_ciwf">
          <input type="text" placeholder="Company name"></input>
        </div>
        <div className="hire__company_mail_ciwf">
          <input className="email" placeholder="Contact E-mail" ></input>
        </div>
        <div className="hire__phone_number_ciwf">
          <input type="text" placeholder="Phone number optional"></input>
        </div>
        <div className="hire__country_dropdown_ciwf">
          <Select options={options} value={value} onChange={changeHandler}/>
        </div>
        <div className="hire__state_region_ciwf">
          <input type="text" placeholder="Region/state"></input>
        </div>
        <div className="hire__company_size_ciwf">
          <input type="text" placeholder="Company size"></input>
        </div>
        <div className="hire__company_description_ciwf">
          <input type="text" placeholder="Company description"></input>
        </div>

        <div className="hire__company_links_ciwf">
          <h2>Add your links:</h2>
        </div>
        <div className="hire__social_links_ciwf">
          <div className="hire__www_ciwf">
            <img src={www} alt=''></img>
          </div>
          <div className="hire__linkedin_ciwf">
            <img src={linkedin} alt=""></img>
          </div>
          <div className="hire__facebook_ciwf">
            <img src={facebook} alt=""></img>
          </div>
          <div className="hire__github_ciwf">
            <img src={github} alt=""></img>
          </div>
          <div className="hire__instagram_ciwf">
            <img src={instagram} alt=""></img>
          </div>
          <div className="hire__telegram_ciwf">
            <img src={telegram} alt=""></img>
          </div>
          <div className="hire__youtube_ciwf">
            <img src={youtube} alt=""></img>
          </div>
        </div>

        <div className="hire__create_button_ciwf">
          <button type="button">Create an account</button>
        </div>
        
      
      </div>
    </div>
  );
}


export default CompanyEmployer;
