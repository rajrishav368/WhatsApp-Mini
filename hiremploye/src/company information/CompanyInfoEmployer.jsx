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
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import downarrow from "../assets/downarrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CompanyInfoEmployer = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [companysize, setCompanysize] = useState("");
  const [description, setDescription] = useState("");
  const Navigate = useNavigate();

  let submit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      window.alert("submitted");
      await axios.post(
        "http://localhost:8000/CompanyInfoEmployer",
        {
          company,
          email,
          contact,
          country,
          region,
          companysize,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Navigate("/CompanyProfileEmployer");
    } catch (e) {
      console.log(e);
    }
  };
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(true);
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
      <form>
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
            <input
              type="text"
              placeholder="Company name"
              name="Company"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__company_mail_cie">
            <input
              className="email"
              placeholder="Contact E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__phone_number_cie">
            <input
              type="text"
              placeholder="Phone number"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            ></input>
          </div>

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

          <div className="hire__company_size_cie">
            <input
              type="text"
              placeholder="Company size"
              onChange={(e) => {
                setCompanysize(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__company_description_cie">
            <input
              type="text"
              placeholder="Company description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="hire__company_links_cie">
          <h2>Add your links:</h2>
        </div>
        <div className="hire__social_links_cie">
          <div className="hire__www_cie">
            <img src={www} alt="" onClick={handleClick}></img>
            {showInput && (
              <input
                type="text"
                placeholder="Enter your Instagram username"
                className="instagram-input"
              />
            )}
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
        {/*<div className="hire__companyinfo_data-buttons">
          <button>
            <img src={www} onClick={handleOpenWeb} />
          </button>
          <button>
            <img src={linkedin} onClick={handleOpenLinkedin} />
          </button>
          <button>
            <img src={facebook} onClick={handleOpenFacebook} />
          </button>
          <button>
            <img src={github} onClick={handleOpenGithub} />
          </button>
          <button>
            <img src={instagram} onClick={handleOpenInstagram} />
          </button>
          <button>
            <img src={telegram} onClick={handleOpenTelegram} />
          </button>
          <button>
            <img src={youtube} onClick={handleOpenYT} />
          </button>
        </div>
        <div className="hire__companyinfo_data-input3">
          {openWeb ? (
            <input
              type="url"
              placeholder="Website"
              id="weblink"
              onChange={(e) => setWebsitelink(e.target.value)}
            ></input>
          ) : null}
          {openLinkedin ? (
            <input
              type="url"
              placeholder="LinkedIn"
              id="linkedinlink"
              onChange={(e) => setLinkedinlink(e.target.value)}
            ></input>
          ) : null}
          {openFacebook ? (
            <input
              type="url"
              placeholder="Facebook"
              id="facebooklink"
              onChange={(e) => setFacebooklink(e.target.value)}
            ></input>
          ) : null}
          {openGithub ? (
            <input
              type="url"
              placeholder="Github"
              id="githublink"
              onChange={(e) => setGithublink(e.target.value)}
            ></input>
          ) : null}
          {openInstagram ? (
            <input
              type="url"
              placeholder="Instagram"
              id="instagramlink"
              onChange={(e) => setInstagramlink(e.target.value)}
            ></input>
          ) : null}
          {openTelegram ? (
            <input
              type="url"
              placeholder="Telegram"
              id="telegramlink"
              onChange={(e) => setTelegramlink(e.target.value)}
            ></input>
          ) : null}
          {openYT ? (
            <input
              type="url"
              placeholder="YouTube"
              id="ytlink"
              onChange={(e) => setYtlink(e.target.value)}
            ></input>
          ) : null}
          </div>*/}

        <div className="hire__create_button_cie">
          <button type="submit" onClick={submit} value="Submit" name="signup">
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfoEmployer;
