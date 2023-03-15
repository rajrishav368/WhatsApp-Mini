import React, { Component } from "react";
import "../createvacancy/CreateVacancy.css";
import logo from "../assets/logo.png";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Example from "../assets/country";
import LanguageSelector from "@marcoparrone/react-language-selector";

const CreateVacancy = () => {
  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { label: "Permanent", value: "permanent" },
    { label: "Contracted", value: "Contracted" },
  ];
  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const level = [
    { label: "L1", value: "L1" },
    { label: "L2", value: "L2" },
    { label: "L3", value: "L3" },
    { label: "L4", value: "L4" },
  ];
  const [selectedlevel, setselectedlevel] = useState(null);
  const handlelevel = (event) => {
    setValue(event.target.value);
  };

  const market = [
    { label: "options1", value: "options1" },
    { label: "options2", value: "options2" },
    { label: "options3", value: "options3" },
  ];
  const [marketlevel, setmarketlevel] = useState(null);
  const handlemarketlevel = (event) => {
    setValue(event.target.value);
  };
  const experience = [
    { label: "0-3", value: "0-3" },
    { label: "4-6", value: "4-6" },
    { label: "7-9", value: "7-9" },
    { label: "10+", value: "10+" },
  ];
  const [experiencelevel, setexperiencelevel] = useState(null);
  const handleexperiencelevel = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="hire__create_vacancy_crva">
      <div className="hire__create_vacancy_left_crva">
        <div className="hire__logo_crva">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="hire__username_crva">
          <div className="hire__username_logo_crva">
            <img src={username} alt=""></img>
          </div>
          <div className="hire__username_text_crva">
            <h5>Username</h5>
            <h6>Employer</h6>
          </div>
        </div>

        <div className="hire__createvacancy_crva">
          <button type="button">Create vacancy</button>
        </div>
        <div className="hire__notifications_crva">
          <button type="button">Notifications</button>
        </div>
        <div className="hire__vacancies_crva">
          <button type="button">Vacancies</button>
        </div>
        <div className="hire__messages_crva">
          <button>Messages</button>
        </div>
        <div className="hire__settings_crva">
          <button type="button">Settings</button>
        </div>

        <div className="hire__feedback_crva">
          <div className="hire__feedback_text_crva">
            <button type="button">
              <img src={feedback} alt=""></img>Feedback
            </button>
          </div>
        </div>

        <div className="hire__logout_crva">
          <div className="hire__logout_logo_crva">
            <button type="button">
              <img src={logout} alt=""></img>Logout
            </button>
          </div>
        </div>
      </div>

      <div className="hire__create_vacancy_right_crva">
        <div className="hire__jobvacancy_crva">
          <h5>Job</h5>
          <h2>Create new vacancy</h2>
        </div>
        <div className="hire__title_crva">
          <input type="text" placeholder="Title"></input>
        </div>
        <div className="hire__characters_crva">
          <h6>The maximum number of characters is 60</h6>
        </div>
        <div className="hire__deadlinefromtype_crva">
          <div className="hire__applicationdeadline_crva">
            <input type="text" placeholder="Application deadline"></input>
          </div>

          <div className="hire__employmentfrom_crva">
            <ReactDatePicker
              wrapperClassName="jhh"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="hire__employmentype_crva">
            <select
              placeholder="Employmenttype"
              defaultValue={value}
              value={value}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="hire__countrystate_crva">
          <div className="hire__country_crva">
            <Example />
          </div>
        </div>
        <div className="hire__languagelevel_crva">
          <div className="hire__language_crva">
            <LanguageSelector
              names={"international"}
              onSelect={(languageCode) => setSelectedLanguage(languageCode)}
            />
          </div>
          <div className="hire__employmentlevel_crva">
            <select
              placeholder="Employment level"
              defaultValue={selectedlevel}
              value={selectedlevel}
              onChange={handleChange}
            >
              {level.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="hire__marketlevel_crva">
          <select
            placeholder="Employment type"
            defaultValue={marketlevel}
            value={marketlevel}
            onChange={handlemarketlevel}
          >
            {market.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="hire__salarycurrency_crva">
          <div className="hire__minsalary_crva">
            <input type="text" placeholder="Salary(Min)"></input>
          </div>
          <div className="hire__maxsalary_crva">
            <input type="text" placeholder="salary(Max)"></input>
          </div>
          <div className="hire__currency_crva">
            <select name="">
              <option value="USD" selected="selected">
                United States Dollars
              </option>

              <option value="DZD">Algeria Dinars</option>
              <option value="ARP">Argentina Pesos</option>
              <option value="AUD">Australia Dollars</option>
              <option value="ATS">Austria Schillings</option>
              <option value="BSD">Bahamas Dollars</option>
              <option value="BBD">Barbados Dollars</option>
              <option value="BEF">Belgium Francs</option>
              <option value="BMD">Bermuda Dollars</option>
              <option value="BRR">Brazil Real</option>
              <option value="BGL">Bulgaria Lev</option>
              <option value="CAD">Canada Dollars</option>
              <option value="CLP">Chile Pesos</option>
              <option value="CNY">China Yuan Renmimbi</option>
              <option value="CYP">Cyprus Pounds</option>
              <option value="CSK">Czech Republic Koruna</option>
              <option value="DKK">Denmark Kroner</option>
              <option value="NLG">Dutch Guilders</option>
              <option value="XCD">Eastern Caribbean Dollars</option>
              <option value="EGP">Egypt Pounds</option>
              <option value="EUR">Euro</option>
              <option value="FJD">Fiji Dollars</option>
              <option value="FIM">Finland Markka</option>
              <option value="FRF">France Francs</option>
              <option value="DEM">Germany Deutsche Marks</option>
              <option value="XAU">Gold Ounces</option>
              <option value="GRD">Greece Drachmas</option>
              <option value="HKD">Hong Kong Dollars</option>
              <option value="HUF">Hungary Forint</option>
              <option value="ISK">Iceland Krona</option>
              <option value="INR">India Rupees</option>
              <option value="IDR">Indonesia Rupiah</option>
              <option value="IEP">Ireland Punt</option>
              <option value="ILS">Israel New Shekels</option>
              <option value="ITL">Italy Lira</option>
              <option value="JMD">Jamaica Dollars</option>
              <option value="JPY">Japan Yen</option>
              <option value="JOD">Jordan Dinar</option>
              <option value="KRW">Korea (South) Won</option>
              <option value="LBP">Lebanon Pounds</option>
              <option value="LUF">Luxembourg Francs</option>
              <option value="MYR">Malaysia Ringgit</option>
              <option value="MXP">Mexico Pesos</option>
              <option value="NLG">Netherlands Guilders</option>
              <option value="NZD">New Zealand Dollars</option>
              <option value="NOK">Norway Kroner</option>
              <option value="PKR">Pakistan Rupees</option>
              <option value="XPD">Palladium Ounces</option>
              <option value="PHP">Philippines Pesos</option>
              <option value="XPT">Platinum Ounces</option>
              <option value="PLZ">Poland Zloty</option>
              <option value="PTE">Portugal Escudo</option>
              <option value="ROL">Romania Leu</option>
              <option value="RUR">Russia Rubles</option>
              <option value="SAR">Saudi Arabia Riyal</option>
              <option value="XAG">Silver Ounces</option>
              <option value="SGD">Singapore Dollars</option>
              <option value="SKK">Slovakia Koruna</option>
              <option value="ZAR">South Africa Rand</option>
              <option value="KRW">South Korea Won</option>
              <option value="ESP">Spain Pesetas</option>
              <option value="XDR">Special Drawing Right (IMF)</option>
              <option value="SDD">Sudan Dinar</option>
              <option value="SEK">Sweden Krona</option>
              <option value="CHF">Switzerland Francs</option>
              <option value="TWD">Taiwan Dollars</option>
              <option value="THB">Thailand Baht</option>
              <option value="TTD">Trinidad and Tobago Dollars</option>
              <option value="TRL">Turkey Lira</option>
              <option value="GBP">United Kingdom Pounds</option>
              <option value="VEB">Venezuela Bolivar</option>
              <option value="ZMK">Zambia Kwacha</option>
            </select>
          </div>
          <div className="hire__salaryperiod_crva">
            <select name="">
              <option value="month" selected="selected">
                per month
              </option>
              <option value="annum">per annum</option>
            </select>
          </div>
        </div>
        <div className="hire__educationexperience_crva">
          <div className="hire__educationlevel_crva">
            <input type="text" placeholder="Education level"></input>
          </div>
          <div className="hire__yearexperience_crva">
            <select
              placeholder="Experience level"
              defaultValue={experiencelevel}
              value={experiencelevel}
              onChange={handleexperiencelevel}
            >
              {experience.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="hire__jobdescription_crva">
          <input type="text" placeholder="Job Description"></input>
        </div>
        <div className="hire__cancelpostbutton_crva">
          <div className="hire__cancelbutton_crva">
            <button type="button">cancel</button>
          </div>
          <div className="hire__postbutton_crva">
            <button type="button">post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateVacancy;
