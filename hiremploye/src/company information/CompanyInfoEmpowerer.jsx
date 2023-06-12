import React from "react";
import "../company information/CompanyInfoEmpowerer.css";
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
import axios from "axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import downarrow from "../assets/downarrow.png";
import { Link } from "react-router-dom";

const CompanyInfoEmpowerer = () => {

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [companysize, setCompanysize] = useState("");
  const [description, setDescription] = useState("");

  let submit = async (e) => {
    e.preventDefault();

    try {
      window.alert("submitted");
      await axios.post("http://localhost:8000/CompanyinfoEmpowerer", {
        company,
        email,
        contact,
        country,
        region,
        companysize,
        description,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="hire__employerempowerer">
      <div className="hire__header_ciepw">
        <Link to="/">
          <div className="hire__header_logo_ciepw">
            <img src={logo} alt=""></img>
          </div>
        </Link>
        <div className="hire__header_username_ciepw">
          <div className="hire__header_username_background_ciepw">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_ciepw">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_ciepw">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__companyinformation_ciepw">
        <h2>Company information</h2>
      </div>

      <div className="hire__upload_photo_ciepw">
        <div className="hire__camera_pic_ciepw">
          <img src={camera} alt=""></img>
        </div>
        <div className="hire__upload_text_ciepw">
          <h3>upload company logo</h3>
        </div>
      </div>
      <form>
        <div className="hire__employee_data_ciepw">
          <div className="hire__company_name_ciepw">
            <input
              type="text"
              placeholder="Company name"
              name="Company"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__company_mail_ciepw">
            <input
              className="email"
              placeholder="Contact E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__phone_number_ciepw">
            <input
              type="text"
              placeholder="Phone number"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__country_dropdown_ciepw">
            <CountryDropdown
              value={country}
              defaultOptionLabel="Click to select a country"
              id="country"
              style={{
                width: "49rem",
                height: "60px",
                border: "1px solid #D2D2D2",
                borderRadius: "8px",
                paddingLeft: "1rem",
                marginBottom: "1rem",
                font: "Manrope",
                fontStyle: "normal",
                fontWeight: "100",
                fontSize: "16px",
                color: "Black",
                appearance: "none",
              }}
              onChange={setCountry}
            />
          </div>
          <div className="hire__state_region_ciepw">
            <RegionDropdown
              country={country}
              value={region}
              id="region"
              blankOptionLabel="No country selected"
              defaultOptionLabel="Click to select a region"
              style={{
                width: "49rem",
                height: "60px",
                border: "1px solid #D2D2D2",
                borderRadius: "8px",
                paddingLeft: "1rem",

                font: "Manrope",
                fontStyle: "normal",
                fontWeight: "100",
                fontSize: "16px",
                color: "Black",
                appearance: "none",
              }}
              onChange={setRegion}
            />
          </div>
          <div className="hire__company_size_ciepw">
            <input
              placeholder="Company size"
              onChange={(e) => {
                setCompanysize(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__company_description_ciepw">
            <input
              placeholder="Company description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="hire__company_links_ciepw">
          <h2>Add your links:</h2>
        </div>
        <div className="hire__social_links_ciepw">
          <div className="hire__www_ciepw">
            <img src={www} alt=""></img>
          </div>
          <div className="hire__linkedin_ciepw">
            <img src={linkedin} alt=""></img>
          </div>
          <div className="hire__facebook_ciepw">
            <img src={facebook} alt=""></img>
          </div>
          <div className="hire__github_ciepw">
            <img src={github} alt=""></img>
          </div>
          <div className="hire__instagram_ciepw">
            <img src={instagram} alt=""></img>
          </div>
          <div className="hire__telegram_ciepw">
            <img src={telegram} alt=""></img>
          </div>
          <div className="hire__youtube_ciepw">
            <img src={youtube} alt=""></img>
          </div>
        </div>

        <div className="hire__create_button_ciepw">
          <button type="submit" onClick={submit} value="Submit" name="signup">
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfoEmpowerer;
