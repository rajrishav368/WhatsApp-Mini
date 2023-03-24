import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./WorkforceList.css";
import logo from "../assets/logo.png";
import downarrow from "../assets/downarrow.png";
import search from "../assets/search.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clear from "../assets/clear.png";
import black from "../assets/blackscreen.png";

const WorkforceList = () => {
  const options = [
    { label: "Employment Form", value: "Employment Form" },
    { label: "Contracted", value: "Contracted" },
  ];
  const [Tvalue, setValue] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const level = [
    { label: "Employment Type", value: "Employment Type" },
    { label: "L2", value: "L2" },
    { label: "L3", value: "L3" },
    { label: "L4", value: "L4" },
  ];
  const [selectedlevel, setselectedlevel] = useState(null);
  const handlelevel = (event) => {
    setselectedlevel(event.target.value);
  };
  const market = [
    { label: "Markets", value: "Markets" },
    { label: "L2", value: "L2" },
    { label: "L3", value: "L3" },
    { label: "L4", value: "L4" },
  ];
  const [marketlevel, setmarketlevel] = useState(null);
  const handlemarketlevel = (event) => {
    setmarketlevel(event.target.value);
  };
  const experience = [
    { label: "0-3", value: "0-3" },
    { label: "4-6", value: "4-6" },
    { label: "7-9", value: "7-9" },
    { label: "10+", value: "10+" },
  ];
  const [experiencelevel, setexperiencelevel] = useState(null);
  const handleexperiencelevel = (event) => {
    setexperiencelevel(event.target.value);
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="hire__workforcelist_wfli">
      <div className="hire__workforcelist_header_wfli">
        <div className="hire__header_logo_wfli">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__header_vacancy_wfli">
          <p>
            <a href="#">Vacancy</a>
          </p>
          <p>
            <a href="#">Companies</a>
          </p>
        </div>
        <div className="hire__header_username_wfli">
          <div className="hire__header_username_background_wfli">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_wfli">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_wfli">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__workforcelist_body_wfli">
        <div className="hire__workforcelist_menudropdown_wfli">
          <div className="hire__searchbar_wfli">
            <input
              type="search"
              placeholder="Job title, company, keywords"
            ></input>
            <input type="search" placeholder="City or country"></input>
            <button type="search">
              <img src={search} alt=""></img>{" "}
            </button>
          </div>
          <div className="hire__workforce_dropdownboxes_wfli">
            <div className="hire__employmentform_wfli">
              <select
                placeholder="Employmenttype"
                defaultValue={Tvalue}
                value={Tvalue}
                onChange={handleChange}
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="hire__employmentype_wfli">
              <select
                placeholder="Employmentype"
                defaultValue={selectedlevel}
                value={selectedlevel}
                onChange={handlelevel}
              >
                {level.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="hire__dateposted_wfli">
              <ReactDatePicker
                wrapperClassName=""
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="hire__market_wfli">
              <select
                placeholder="market"
                defaultValue={marketlevel}
                value={marketlevel}
                onChange={handlemarketlevel}
              >
                {market.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="hire__yearexperience_wfli">
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
            <div className="hire__clearbutton_wfli">
              <button type="button">
                <img src={clear} alt=""></img> clear
              </button>
            </div>
          </div>
        </div>
        <div className="hire__foundresults_wfli">
          <div className="hire__foundresults_text_wfli">
            <h2>Found Results:</h2>
            <h1>40</h1>
          </div>
        </div>
        <div className="hire__employeedescription1_wfli">
          <div className="hire__employee_details1_wfli">
            <div className="hire__photoname1_wfli">
              <img src={black} alt=""></img>
              <h3>Company 1</h3>
            </div>
            <div className="hire__location_employeesavailable1_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details2_wfli">
            <div className="hire__photoname2_wfli">
              <img src={black} alt=""></img>
              <h3>Company 2</h3>
            </div>
            <div className="hire__location_employeesavailable2_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details3_wfli">
            <div className="hire__photoname3_wfli">
              <img src={black} alt=""></img>
              <h3>Company 3</h3>
            </div>
            <div className="hire__location_employeesavailable3_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
        </div>
        <div className="hire__employeedescription2_wfli">
          <div className="hire__employee_details4_wfli">
            <div className="hire__photoname4_wfli">
              <img src={black} alt=""></img>
              <h3>Company 1</h3>
            </div>
            <div className="hire__location_employeesavailable4_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details5_wfli">
            <div className="hire__photoname5_wfli">
              <img src={black} alt=""></img>
              <h3>Company 2</h3>
            </div>
            <div className="hire__location_employeesavailable5_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details6_wfli">
            <div className="hire__photoname6_wfli">
              <img src={black} alt=""></img>
              <h3>Company 3</h3>
            </div>
            <div className="hire__location_employeesavailable6_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
        </div>
        <div className="hire__employeedescription3_wfli">
          <div className="hire__employee_details7_wfli">
            <div className="hire__photoname7_wfli">
              <img src={black} alt=""></img>
              <h3>Company 1</h3>
            </div>
            <div className="hire__location_employeesavailable7_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details8_wfli">
            <div className="hire__photoname8_wfli">
              <img src={black} alt=""></img>
              <h3>Company 2</h3>
            </div>
            <div className="hire__location_employeesavailable8_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details9_wfli">
            <div className="hire__photoname9_wfli">
              <img src={black} alt=""></img>
              <h3>Company 3</h3>
            </div>
            <div className="hire__location_employeesavailable9_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
        </div>
        <div className="hire__employeedescription4_wfli">
          <div className="hire__employee_details10_wfli">
            <div className="hire__photoname10_wfli">
              <img src={black} alt=""></img>
              <h3>Company 1</h3>
            </div>
            <div className="hire__location_employeesavailable10_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details11_wfli">
            <div className="hire__photoname11_wfli">
              <img src={black} alt=""></img>
              <h3>Company 2</h3>
            </div>
            <div className="hire__location_employeesavailable11_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
          <div className="hire__employee_details12_wfli">
            <div className="hire__photoname12_wfli">
              <img src={black} alt=""></img>
              <h3>Company 3</h3>
            </div>
            <div className="hire__location_employeesavailable12_wfli">
              <h3>Location</h3>
              <h3>6 employees available</h3>
            </div>
          </div>
        </div>
        <div className="hire__load_button_wfli">
          <button type="button">Load More</button>
        </div>
      </div>
    </div>
  );
};
export default WorkforceList;
