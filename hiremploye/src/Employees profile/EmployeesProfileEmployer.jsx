import React from "react";
import { Link } from "react-router-dom";
import "./EmployeesProfileEmployer.css";
import logo from "../assets/logo.png";
import downarrow from "../assets/downarrow.png";
import back_btn from "../assets/back-btn.png";
import black from "../assets/blackscreen.png";
import Location from "../assets/location logo.png";

const EmployeesProfileEmployer = () => {
  return (
    <div className="hire__applicantsprofile_empr">
      <div className="hire__applicantsprofile_header_empr">
        <div className="hire__header_logo_empr">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__header_vacancy_empr">
          <p>
            <a href="#">Vacancy</a>
          </p>
          <p>
            <a href="#">Companies</a>
          </p>
        </div>
        <div className="hire__header_username_empr">
          <div className="hire__header_username_background_empr">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_empr">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_empr">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__horizontal_line1_empr">
        <hr />
      </div>
      <div className="hire__companyname_empr">
        <div className="hire__login_back_empr">
          <button type="button">
            <img src={back_btn} alt="" />
            Back
          </button>
        </div>
        <div className="hire__company_empr">
          <img src={black} alt=""></img>
          <h5>Company Name</h5>
        </div>
      </div>
      <div className="hire__applicantsprofile_body_empr">
        <div className="hire__generalinformation_empr">
          <div className="hire__generalinformation_text_empr">
            <h1>General Information</h1>
          </div>
          <div className="hire__generalinformationdetails_empr">
            <div className="hire__applicantsdetails_empr">
              <h2>E</h2>
              <div className="hire__applicantname_empr">
                <h1>Applicant 1</h1>
                <div className="hire__location_empr">
                  <img src={Location} alt=""></img> Location
                </div>
              </div>
            </div>
            <div className="hire__joiningroleyears_empr">
              <div className="hire__joiningavailability_empr">
                <h5>Joining Availability</h5>
                <h6>Immediately</h6>
              </div>
              <div className="hire__roletitle_empr">
                <h5>Role Title in Company</h5>
                <h6>Software Development Engineer 1</h6>
              </div>
              <div className="hire__yearsexp_empr">
                <h5>Years of Experience</h5>
                <h6>2 Years</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="hire__skills_empr">
          <div className="hire__skillstext_empr">
            <h1>Skills</h1>
          </div>
          <div className="hire__skillsname_empr">
            <h5>html</h5>
            <h5>css</h5>
          </div>
        </div>
        <div className="hire__workexperience_empr">
          <div className="hire__workexptext_empr">
            <h1>Work Experience</h1>
          </div>
          <div className="hire__workexpname_empr">
            <div className="hire__workexpname1_empr">
              <h2>June 19 - July 21</h2>
              <h3>Software Tester</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel.
              </p>
            </div>
            <div className="hire__workexpname2_empr">
              <h2>July 21 - Aug 22</h2>
              <h3>Software Developer Intern</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed mauris consectetur, convallis odio sed, tempus
                enim. Cras maximus nisi nisi, mattis volutpat tellus sodales
                vel.
              </p>
            </div>
          </div>
        </div>
        <div className="hire__languages_empr">
          <div className="hire__languagestext_empr">
            <h1>Languages</h1>
          </div>
          <div className="hire__languagesname_empr">
            <h5>English-C2 Level</h5>
          </div>
        </div>
        <div className="hire__achievements_empr">
          <div className="hire__achievementstext_empr">
            <h1>Achievements</h1>
          </div>
          <div className="hire__achievementsname_empr">
            <h5>Employee of the year 2021</h5>
          </div>
        </div>
        <div className="hire__notify_button_empr">
          <button type="button">Notify</button>
        </div>
      </div>
    </div>
  );
};
export default EmployeesProfileEmployer;
