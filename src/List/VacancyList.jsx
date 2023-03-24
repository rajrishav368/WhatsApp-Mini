import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./VacancyList.css";
import logo from "../assets/logo.png";
import downarrow from "../assets/downarrow.png";
import search from "../assets/search.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clear from "../assets/clear.png";
import found from "../assets/Found.png";
import empimage from "../assets/empimgae.png";
import message from "../assets/message.png";
import saved from "../assets/saved.png";

const VacancyList = () => {
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
    <div className="hire__vacancylist_vcli">
      <div className="hire__vacancylist_header_vcli">
        <div className="hire__header_logo_vcli">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__header_vacancy_vcli">
          <p>
            <a href="#">Vacancy</a>
          </p>
          <p>
            <a href="#">Companies</a>
          </p>
        </div>
        <div className="hire__header_username_vcli">
          <div className="hire__header_username_background_vcli">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_vcli">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_vcli">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__vacancylist_body_vcli">
        <div className="hire__vacancylist_menudropdown_vcli">
          <div className="hire__searchbar_vcli">
            <input
              type="search"
              placeholder="Job title, company, keywords"
            ></input>
            <input type="search" placeholder="City or country"></input>
            <button type="search">
              <img src={search} alt=""></img>{" "}
            </button>
          </div>
          <div className="hire__vacancy_dropdownboxes_vcli">
            <div className="hire__employmentform_vcli">
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
            <div className="hire__employmentype_vcli">
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
            <div className="hire__dateposted_vcli">
              <ReactDatePicker
                wrapperClassName="jhh"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="hire__market_vcli">
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
            <div className="hire__yearexperience_vcli">
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
            <div className="hire__clearbutton_vcli">
              <button type="button">
                <img src={clear} alt=""></img> clear
              </button>
            </div>
          </div>
        </div>
        <div className="hire__vacancylist_body_left_vcli">
          <div className="hire__found_viewall_vcli">
            <div className="hire__foundcompanies_vcli">
              <h3>
                <img src={found} alt=""></img> Found Results:
              </h3>
              <h1>4</h1>
            </div>
            <div className="hire__viewallcompanies_button_vcli">
              <button type="button">View All Companies</button>
            </div>
          </div>
          <div className="hire__jobrolesdescription_vcli">
            <div className="hire__jobroles1_vcli">
              <div className="hire__empnamemessage1_vcli">
                <div className="hire__empname1_vcli">
                  <img src={empimage} alt=""></img>

                  <h3>Company Name</h3>
                </div>
                <div className="hire__empmessage1_vcli">
                  <div className="hire__image1_vcli">
                    <img src={message} alt=""></img>
                  </div>
                  <div className="hire__image2_vcli">
                    <img src={saved} alt=""></img>
                  </div>
                </div>
              </div>
              <div className="hire__rolenamedescription1_vcli">
                <div className="hire__rolename1_vcli">
                  <h1>Job Title</h1>
                </div>
                <div className="hire__roledescription1_vcli">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed mauris consectetur, convallis odio sed,
                    tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                    sodales vel.
                  </p>
                </div>
              </div>
              <div className="hire__locationjobtypeform1_vcli">
                <div className="hire__location1_vcli">
                  <h3>Location</h3>
                </div>
                <div className="hire__jobtype1_vcli">
                  <h3>Job Type</h3>
                </div>
                <div className="hire__jobform1_vcli">
                  <h3>Job Form</h3>
                </div>
              </div>
            </div>
            <div className="hire__jobroles2_vcli">
              <div className="hire__empnamemessage2_vcli">
                <div className="hire__empname2_vcli">
                  <img src={empimage} alt=""></img>

                  <h3>Company Name</h3>
                </div>
                <div className="hire__empmessage2_vcli">
                  <div className="hire__image3_vcli">
                    <img src={message} alt=""></img>
                  </div>
                  <div className="hire__image4_vcli">
                    <img src={saved} alt=""></img>
                  </div>
                </div>
              </div>
              <div className="hire__rolenamedescription2_vcli">
                <div className="hire__rolename2_vcli">
                  <h1>Job Title</h1>
                </div>
                <div className="hire__roledescription2_vcli">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed mauris consectetur, convallis odio sed,
                    tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                    sodales vel.
                  </p>
                </div>
              </div>
              <div className="hire__locationjobtypeform2_vcli">
                <div className="hire__location2_vcli">
                  <h3>Location</h3>
                </div>
                <div className="hire__jobtype2_vcli">
                  <h3>Job Type</h3>
                </div>
                <div className="hire__jobform2_vcli">
                  <h3>Job Form</h3>
                </div>
              </div>
            </div>
            <div className="hire__jobroles3_vcli">
              <div className="hire__empnamemessage3_vcli">
                <div className="hire__empname3_vcli">
                  <img src={empimage} alt=""></img>

                  <h3>Company Name</h3>
                </div>
                <div className="hire__empmessage3_vcli">
                  <div className="hire__image5_vcli">
                    <img src={message} alt=""></img>
                  </div>
                  <div className="hire__image6_vcli">
                    <img src={saved} alt=""></img>
                  </div>
                </div>
              </div>
              <div className="hire__rolenamedescription3_vcli">
                <div className="hire__rolename3_vcli">
                  <h1>Job Title</h1>
                </div>
                <div className="hire__roledescription3_vcli">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed mauris consectetur, convallis odio sed,
                    tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                    sodales vel.
                  </p>
                </div>
              </div>
              <div className="hire__locationjobtypeform3_vcli">
                <div className="hire__location3_vcli">
                  <h3>Location</h3>
                </div>
                <div className="hire__jobtype3_vcli">
                  <h3>Job Type</h3>
                </div>
                <div className="hire__jobform3_vcli">
                  <h3>Job Form</h3>
                </div>
              </div>
            </div>
            <div className="hire__jobroles4_vcli">
              <div className="hire__empnamemessage4_vcli">
                <div className="hire__empname4_vcli">
                  <img src={empimage} alt=""></img>

                  <h3>Company Name</h3>
                </div>
                <div className="hire__empmessage4_vcli">
                  <div className="hire__image7_vcli">
                    <img src={message} alt=""></img>
                  </div>
                  <div className="hire__image8_vcli">
                    <img src={saved} alt=""></img>
                  </div>
                </div>
              </div>
              <div className="hire__rolenamedescription4_vcli">
                <div className="hire__rolename4_vcli">
                  <h1>Job Title</h1>
                </div>
                <div className="hire__roledescription4_vcli">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sed mauris consectetur, convallis odio sed,
                    tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                    sodales vel.
                  </p>
                </div>
              </div>
              <div className="hire__locationjobtypeform4_vcli">
                <div className="hire__location4_vcli">
                  <h3>Location</h3>
                </div>
                <div className="hire__jobtype4_vcli">
                  <h3>Job Type</h3>
                </div>
                <div className="hire__jobform4_vcli">
                  <h3>Job Form</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VacancyList;
