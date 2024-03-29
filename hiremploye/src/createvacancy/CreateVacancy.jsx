import React from "react";
import "../createvacancy/CreateVacancy.css";
import logo from "../assets/logo.png";
import username from "../assets/username logo.png";
import feedback from "../assets/Feedback.png";
import logout from "../assets/logout.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import LanguageSelector from "@marcoparrone/react-language-selector";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useNavigate } from "react-router-dom";

const CreateVacancy = () => {
  const options = [
    { label: "Permanent", value: "permanent" },
    { label: "Contracted", value: "Contracted" },
  ];

  const level = [
    { label: "L1", value: "L1" },
    { label: "L2", value: "L2" },
    { label: "L3", value: "L3" },
    { label: "L4", value: "L4" },
  ];

  const market = [
    { label: "options1", value: "options1" },
    { label: "options2", value: "options2" },
    { label: "options3", value: "options3" },
  ];

  const experience = [
    { label: "0-3", value: "0-3" },
    { label: "4-6", value: "4-6" },
    { label: "7-9", value: "7-9" },
    { label: "10+", value: "10+" },
  ];
  const salary = [
    { label: "monthly", value: "monthly" },
    { label: "quarterly", value: "quarterly" },
    { label: "annually", value: "annually" },
  ];

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [employmentype, setEmploymentype] = useState(options[0].value);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");
  const [emplevel, setEmplevel] = useState(level[0].value);
  const [marketoption, setMarketoption] = useState(market[0].value);
  const [minsalary, setMinsalary] = useState("");
  const [maxsalary, setMaxsalary] = useState("");
  const [currency, setCurrency] = useState("");
  const [salaryperiod, setSalaryperiod] = useState(salary[0].value);
  const [educationlevel, setEducationlevel] = useState("");
  const [minexperience, setMinexperience] = useState(experience[0].value);
  const [description, setDescription] = useState("");
  const Navigate=useNavigate();

  let submit = async (e) => {
    e.preventDefault();

    try {
      window.alert("submitted");
      await axios.post("http://localhost:8000/CreateVacancy", {
        title,
        deadline,
        // startDate,
        employmentype,
        country,
        region,
        emplevel,
        marketoption,
        minsalary,
        maxsalary,
        currency,
        salaryperiod,
        educationlevel,
        minexperience,
        description,
      });
      Navigate("/VacancyPage");
    } catch (e) {
      console.log(e);
    }
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
          <Link to="/Notification">
            <button type="button">Notifications</button>
          </Link>
        </div>
        <div className="hire__vacancies_crva">
          <Link to="/VacancyPage">
            <button type="button">Vacancies</button>
          </Link>
        </div>
        <div className="hire__messages_crva">
          <Link to="/Messages">
            <button>Messages</button>
          </Link>
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
        <form>
          <div className="hire__title_crva">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__characters_crva">
            <h6>The maximum number of characters is 60</h6>
          </div>
          <div className="hire__deadlinefromtype_crva">
            <div className="hire__applicationdeadline_crva">
              <input
                type="text"
                placeholder="Application deadline"
                onChange={(e) => {
                  setDeadline(e.target.value);
                }}
              ></input>
            </div>

            <div className="hire__employmentfrom_crva">
              <ReactDatePicker
                selected={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </div>
            <div className="hire__employmentype_crva">
              <select
                placeholder={"Employmenttype"}
                onChange={(e) => {
                  setEmploymentype(e.target.value);
                }}
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="hire__countrystate_crva">
            <div className="hire__country_crva">
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
          <div className="hire__languagelevel_crva">
            <div className="hire__language_crva">
              <LanguageSelector
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              />
            </div>
            <div className="hire__employmentlevel_crva">
              <select
                placeholder="Employment level"
                onChange={(e) => {
                  setEmplevel(e.target.value);
                }}
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
              defaultValue={marketoption}
              value={marketoption}
              onChange={(e) => {
                setMarketoption(e.target.value);
              }}
            >
              {market.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="hire__salarycurrency_crva">
            <div className="hire__minsalary_crva">
              <input
                type="text"
                placeholder="Salary(Min)"
                onChange={(e) => {
                  setMinsalary(e.target.value);
                }}
              ></input>
            </div>
            <div className="hire__maxsalary_crva">
              <input
                type="text"
                placeholder="salary(Max)"
                onChange={(e) => {
                  setMaxsalary(e.target.value);
                }}
              ></input>
            </div>
            <div className="hire__currency_crva">
              <select
                name="currency"
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
              >
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
              <select
                name="salaryperiod"
                onChange={(e) => {
                  setSalaryperiod(e.target.value);
                }}
              >
                {salary.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="hire__educationexperience_crva">
            <div className="hire__educationlevel_crva">
              <input
                type="text"
                placeholder="Education level"
                onChange={(e) => {
                  setEducationlevel(e.target.value);
                }}
              ></input>
            </div>
            <div className="hire__yearexperience_crva">
              <select
                placeholder="Experience level"
                defaultValue={minexperience}
                value={minexperience}
                onChange={(e) => {
                  setMinexperience(e.target.value);
                }}
              >
                {experience.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="hire__jobdescription_crva">
            <input
              type="text"
              placeholder="Job Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
          <div className="hire__cancelpostbutton_crva">
            <div className="hire__cancelbutton_crva">
              <button type="button">cancel</button>
            </div>
            <div className="hire__postbutton_crva">
              <button type="button" onClick={submit} value="Submit">
                post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateVacancy;
