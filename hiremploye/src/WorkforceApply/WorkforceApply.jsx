import React from "react";
import { Link } from "react-router-dom";
import "./WorkforceApply.css";
import logo from "../assets/logo.png";
import downarrow from "../assets/downarrow.png";
import back_btn from "../assets/back-btn.png";
import black from "../assets/blackscreen.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import Anchor from "../assets/Anchor.png";

const WorkforceApply = () => {
  return (
    <div className="hire__applicantsprofile_wfap">
      <div className="hire__applicantsprofile_header_wfap">
        <div className="hire__header_logo_wfap">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__header_vacancy_wfap">
          <Link to="/VacancyList">
            <p>
              <a href="#">Vacancy</a>
            </p>
          </Link>
          <Link to="/WorkforceList">
            <p>
              <a href="#">Companies</a>
            </p>
          </Link>
        </div>
        <div className="hire__header_username_wfap">
          <div className="hire__header_username_background_wfap">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_wfap">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_wfap">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__horizontal_line1_wfap">
        <hr />
      </div>
      <div className="hire__companyname_wfap">
        <div className="hire__login_back_wfap">
          <button type="button">
            <img src={back_btn} alt="" />
            Back
          </button>
        </div>
        <div className="hire__company_wfap">
          <img src={black} alt=""></img>
          <h5>Company Name - Job Title</h5>
        </div>
      </div>
      <div className="hire__description_body_wfap">
        <div className="hire__description_details_wfap">
          <div className="hire__description_location_website_size_wfap">
            <div className="hire__description_location_wfap">
              <h4>Compan Location</h4>
              <h5>Bengaluru, India</h5>
            </div>
            <div className="hire__description_website_wfap">
              <h4>Company Website</h4>
              <h5>www.xyz.abc</h5>
            </div>
            <div className="hire__description_companysize_wfap">
              <h4>Company size</h4>
              <h5>11-50 employees</h5>
            </div>
            <div className="hire__description_openemployees_wfap">
              <h4>Open employees</h4>
              <h5>6</h5>
            </div>
          </div>
          <div className="hire__horizontal_line2_wfap">
            <hr />
          </div>
          <div className="hire__description_social_links_wfap">
            <div className="hire__facebook_wfap">
              <img src={facebook} alt=""></img>
              <h3>Company</h3>
            </div>
            <div className="hire__instagram_wfap">
              <img src={instagram} alt=""></img>
              <h3>Company</h3>
            </div>
            <div className="hire__telegram_wfap">
              <img src={telegram} alt=""></img>
              <h3>Company</h3>
            </div>
            <div className="hire__youtube_wfap">
              <img src={youtube} alt=""></img>
              <h3>Company</h3>
            </div>
          </div>
          <div className="hire__description_textdata_wfap">
            <div className="hire__description_text_wfap">
              <h2>Description</h2>
            </div>
            <div className="hire__description_data_wfap">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel. Quisque urna lacus, laoreet nec metus in, pellentesque
                cursus magna. Morbi vitae felis et eros fermentum bibendum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel. Quisque urna lacus, laoreet nec metus in, pellentesque
                cursus magna. Morbi vitae felis et eros fermentum bibendum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel. Quisque urna lacus, laoreet nec metus in, pellentesque
                cursus magna. Morbi vitae felis et eros fermentum bibendum.
              </p>
            </div>
          </div>
        </div>
        <div className="hire__horizontal_line3_wfap">
          <hr />
        </div>
        <div className="hire__employeesavailable_wfap">
          <div className="hire__employeesavailable_text_wfap">
            <h2>Employees available from this company</h2>
          </div>
        </div>
        <div className="hire__candidatedetailsheader_wfap">
          <div className="hire__header_blank_wfap"></div>
          <div className="hire__header_nametext_wfap">
            <h3>
              Candidate Name <img src={Anchor} alt=""></img>
            </h3>
          </div>
          <div className="hire__header_skillsetext_wfap">
            <h3>Skill Set</h3>
          </div>
          <div className="hire__header_experiencetext_wfap">
            <h3>
              Experience <img src={Anchor} alt=""></img>
            </h3>
          </div>
          <div className="hire__header_joiningtext_wfap">
            <h3>
              Joining Availability <img src={Anchor} alt=""></img>
            </h3>
          </div>
        </div>
        <div className="hire__candidatedetails1_wfap">
          <div className="hire__candidatecheckbox1_wfap">
            <input type="checkbox"></input>
          </div>
          <div className="hire__candidatename1_wfap">
            <h2>A</h2>
            <h4>Applicant 1</h4>
          </div>
          <div className="hire__candidateskillset1_wfap">
            <h3>React, JavaScript, NodeJS, SQL, Redux</h3>
          </div>
          <div className="hire__cadidatexperience1_wfap">
            <h3>5 years</h3>
          </div>
          <div className="hire__candidatejoining1_wfap">
            <h3>Immediate</h3>
          </div>
        </div>
        <div className="hire__candidatedetails2_wfap">
          <div className="hire__candidatecheckbox2_wfap">
            <input type="checkbox"></input>
          </div>
          <div className="hire__candidatename2_wfap">
            <h2>A</h2>
            <h4>Applicant 2</h4>
          </div>
          <div className="hire__candidateskillset2_wfap">
            <h3>React, JavaScript, NodeJS, Python</h3>
          </div>
          <div className="hire__cadidatexperience2_wfap">
            <h3>5 years</h3>
          </div>
          <div className="hire__candidatejoining2_wfap">
            <h3>Immediate</h3>
          </div>
        </div>
        <div className="hire__candidatedetails3_wfap">
          <div className="hire__candidatecheckbox3_wfap">
            <input type="checkbox"></input>
          </div>
          <div className="hire__candidatename3_wfap">
            <h2>A</h2>
            <h4>Applicant 3</h4>
          </div>
          <div className="hire__candidateskillset3_wfap">
            <h3>Angular, Express, Java, C++</h3>
          </div>
          <div className="hire__cadidatexperience3_wfap">
            <h3>3 years</h3>
          </div>
          <div className="hire__candidatejoining3_wfap">
            <h3>30 days</h3>
          </div>
        </div>
        <div className="hire__candidatedetails4_wfap">
          <div className="hire__candidatecheckbox4_wfap">
            <input type="checkbox"></input>
          </div>
          <div className="hire__candidatename4_wfap">
            <h2>A</h2>
            <h4>Applicant 4</h4>
          </div>
          <div className="hire__candidateskillset4_wfap">
            <h3>HTML, CSS, Bootstrap, Webflow</h3>
          </div>
          <div className="hire__cadidatexperience4_wfap">
            <h3>2 years</h3>
          </div>
          <div className="hire__candidatejoining4_wfap">
            <h3>30 days</h3>
          </div>
        </div>
        <div className="hire__candidatedetails5_wfap">
          <div className="hire__candidatecheckbox5_wfap">
            <input type="checkbox"></input>
          </div>
          <div className="hire__candidatename5_wfap">
            <h2>A</h2>
            <h4>Applicant 5</h4>
          </div>
          <div className="hire__candidateskillset5_wfap">
            <h3>HTML, CSS, Bootstrap, Webflow</h3>
          </div>
          <div className="hire__cadidatexperience5_wfap">
            <h3>1 years</h3>
          </div>
          <div className="hire__candidatejoining5_wfap">
            <h3>50 days</h3>
          </div>
        </div>
        <div className="hire__sendapplication_button_wfap">
          <Link to="/VacancyPageWorkforce">
            <button type="button">Send Application</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WorkforceApply;
