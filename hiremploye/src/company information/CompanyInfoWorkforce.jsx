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
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import downarrow from "../assets/downarrow.png";
import { Link, useNavigate } from "react-router-dom";

const CompanyInfoWorkfoce = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [companysize, setCompanysize] = useState("");
  const [description, setDescription] = useState("");
  const Navigate=useNavigate();

  // const [openWeb, setOpenWeb] = React.useState(false);
  // const [openLinkedin, setOpenLinkedin] = React.useState(false);
  // const [openFacebook, setOpenFacebook] = React.useState(false);
  // const [openGithub, setOpenGithub] = React.useState(false);
  // const [openInstagram, setOpenInstagram] = React.useState(false);
  // const [openTelegram, setOpenTelegram] = React.useState(false);
  // const [openYT, setOpenYT] = React.useState(false);

  // const handleOpenWeb = () => {
  //   setOpenWeb(!openWeb);
  // };
  // const handleOpenLinkedin = () => {
  //   setOpenLinkedin(!openLinkedin);
  // };
  // const handleOpenFacebook = () => {
  //   setOpenFacebook(!openFacebook);
  // };
  // const handleOpenGithub = () => {
  //   setOpenGithub(!openGithub);
  // };
  // const handleOpenInstagram = () => {
  //   setOpenInstagram(!openInstagram);
  // };
  // const handleOpenTelegram = () => {
  //   setOpenTelegram(!openTelegram);
  // };
  // const handleOpenYT = () => {
  //   setOpenYT(!openYT);
  // };

  // const [websitelink, setWebsitelink] = useState("");
  // const [linkedinlink, setLinkedinlink] = useState("");
  // const [facebooklink, setFacebooklink] = useState("");
  // const [githublink, setGithublink] = useState("");
  // const [instagramlink, setInstagramlink] = useState("");
  // const [telegramlink, setTelegramlink] = useState("");
  // const [ytlink, setYtlink] = useState("");

  let submit = async (e) => {
    e.preventDefault();
    try {
      window.alert("submitted");
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:8000/CompanyInfoWorkforce',
        { company,
          email,
          contact,
          country,
          region,
          companysize,
          description, },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Navigate("/CompanyProfileEmployer");
      
    } catch (error) {
      console.error(error)
    }
    
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
        <h2>Company information</h2>
      </div>

      <div className="hire__upload_photo_ciwf">
        <div className="hire__camera_pic_ciwf">
          <img src={camera} alt=""></img>
        </div>
        <div className="hire__upload_text_ciwf">
          <h3>upload company logo</h3>
        </div>
      </div>
      <form>
      <div className="hire__employee_data_ciwf">
        <div className="hire__company_name_ciwf">
          <input
            type="text"
            placeholder="Company name"
            name="Company"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          ></input>
        </div>
        <div className="hire__company_mail_ciwf">
          <input
            className="email"
            placeholder="Contact E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="hire__phone_number_ciwf">
          <input
            type="text"
            placeholder="Phone number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          ></input>
        </div>
        <div className="hire__country_dropdown_ciwf">
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
        <div className="hire__state_region_ciwf">
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
        <div className="hire__company_size_ciwf">
          <input type="text"
          placeholder="Company size"
          onChange={(e) => {
            setCompanysize(e.target.value);
          }}></input>
        </div>
        <div className="hire__company_description_ciwf">
          <input type="text"
          placeholder="Company description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}></input>
        </div>
      </div>

      <div className="hire__company_links_ciwf">
        <h2>Add your links:</h2>
      </div>
      <div className="hire__social_links_ciwf">
        <div className="hire__www_ciwf">
          <img src={www} alt=""></img>
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
        <button type="submit" onClick={submit} value="Submit" name="signup">Create an account</button>
      </div>
      </form>
    </div>
  );
};

export default CompanyInfoWorkfoce;
