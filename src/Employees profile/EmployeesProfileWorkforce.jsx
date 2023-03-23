import React from "react";
import { Link } from "react-router-dom";
import "./EmployeesProfileWorkforce.css";
import logo from "../assets/logo.png";
import downarrow from "../assets/downarrow.png";
import back_btn from "../assets/back-btn.png";
import black from "../assets/blackscreen.png";
import Location from "../assets/location logo.png";

const EmployeesProfileWorkforce = () => {
  return (
    <div className="hire__applicantsprofile_empr_wf">
      <div className="hire__applicantsprofile_header_empr_wf">
        <div className="hire__header_logo_empr_wf">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__header_vacancy_empr_wf">
          <p>
            <a href="#">Vacancy</a>
          </p>
          <p>
            <a href="#">Companies</a>
          </p>
        </div>
        <div className="hire__header_username_empr_wf">
          <div className="hire__header_username_background_empr_wf">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_empr_wf">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_empr_wf">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__horizontal_line1_empr_wf">
        <hr />
      </div>
      <div className="hire__companyname_empr_wf">
        <div className="hire__login_back_empr_wf">
          <button type="button">
            <img src={back_btn} alt="" />
            Back
          </button>
        </div>
        <div className="hire__company_empr_wf">
          <img src={black} alt=""></img>
          <h5>Company Name</h5>
        </div>
        <div className="hire__edit_button_empr_wf">
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="hire__applicantsprofile_body_empr_wf">
        <div className="hire__generalinformation_empr_wf">
          <div className="hire__generalinformation_text_empr_wf">
            <h1>General Information</h1>
          </div>
          <div className="hire__generalinformationdetails_empr_wf">
            <div className="hire__applicantsdetails_empr_wf">
              <h2>E</h2>
              <div className="hire__applicantname_empr_wf">
                <h1>Applicant 1</h1>
                <div className="hire__location_empr_wf">
                  <img src={Location} alt=""></img> Location
                </div>
              </div>
            </div>
            <div className="hire__joiningroleyears_empr_wf">
              <div className="hire__joiningavailability_empr_wf">
                <h5>Joining Availability</h5>
                <h6>Immediately</h6>
              </div>
              <div className="hire__roletitle_empr_wf">
                <h5>Role Title in Company</h5>
                <h6>Software Development Engineer 1</h6>
              </div>
              <div className="hire__yearsexp_empr_wf">
                <h5>Years of Experience</h5>
                <h6>2 Years</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="hire__skills_empr_wf">
          <div className="hire__skillstext_empr_wf">
            <h1>Skills</h1>
          </div>
          <div className="hire__skillsname_empr_wf">
            <h5>html</h5>
            <h5>css</h5>
          </div>
        </div>
        <div className="hire__workexperience_empr_wf">
          <div className="hire__workexptext_empr_wf">
            <h1>Work Experience</h1>
          </div>
          <div className="hire__workexpname_empr_wf">
            <div className="hire__workexpname1_empr_wf">
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
            <div className="hire__workexpname2_empr_wf">
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
        <div className="hire__languages_empr_wf">
          <div className="hire__languagestext_empr_wf">
            <h1>Languages</h1>
          </div>
          <div className="hire__languagesname_empr_wf">
            <h5>English-C2 Level</h5>
          </div>
        </div>
        <div className="hire__achievements_empr_wf">
          <div className="hire__achievementstext_empr_wf">
            <h1>Achievements</h1>
          </div>
          <div className="hire__achievementsname_empr_wf">
            <h5>Employee of the year 2021</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeesProfileWorkforce;
