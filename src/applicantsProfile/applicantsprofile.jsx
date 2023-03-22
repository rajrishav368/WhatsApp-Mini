import React from "react";
import { Link } from "react-router-dom";
import "../applicantsProfile/applicantsprofile.css";
import logo from "../assets/logo.png";
import downarrow from "../assets/downarrow.png";
import back_btn from "../assets/back-btn.png";
import black from "../assets/blackscreen.png";
import Location from "../assets/location logo.png";

const ApplicantsProfile = () => {
  return (
    <div className="hire__applicantsprofile_apr">
      <div className="hire__applicantsprofile_header_apr">
        <div className="hire__header_logo_apr">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__header_vacancy_apr">
          <p>
            <a href="#">Vacancy</a>
          </p>
          <p>
            <a href="#">Companies</a>
          </p>
        </div>
        <div className="hire__header_username_apr">
          <div className="hire__header_username_background_apr">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_apr">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_apr">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__companyname_apr">
        <div className="hire__login_back_apr">
          <button type="button">
            <img src={back_btn} alt="" />
            Back
          </button>
        </div>
        <div className="hire__company_apr">
          <img src={black} alt=""></img>
          <h5>Company Name</h5>
        </div>
      </div>
      <div className="hire__applicantsprofile_body_apr">
        <div className="hire__generalinformation_apr">
          <div className="hire__generalinformation_text_apr">
            <h1>General Information</h1>
          </div>
          <div className="hire__generalinformationdetails_apr">
            <div className="hire__applicantsdetails_apr">
              <h2>E</h2>
              <div className="hire__applicantname_apr">
                <h1>Applicant 1</h1>
                <div className="hire__location_apr">
                  <img src={Location} alt=""></img> Location
                </div>
              </div>
            </div>
            <div className="hire__joiningroleyears_apr">
              <div className="hire__joiningavailability_apr">
                <h5>Joining Availability</h5>
                <h6>Immediately</h6>
              </div>
              <div className="hire__roletitle_apr">
                <h5>Role Title in Company</h5>
                <h6>Software Development Engineer 1</h6>
              </div>
              <div className="hire__yearsexp_apr">
                <h5>Years of Experience</h5>
                <h6>2 Years</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="hire__skills_apr">
          <div className="hire__skillstext_apr">
            <h1>Skills</h1>
          </div>
          <div className="hire__skillsname_apr">
            <h5>html</h5>
            <h5>css</h5>
          </div>
        </div>
        <div className="hire__workexperience_apr">
          <div className="hire__workexptext_apr">
            <h1>Work Experience</h1>
          </div>
          <div className="hire__workexpname_apr">
            <div className="hire__workexpname1_apr">
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
            <div className="hire__workexpname2_apr">
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
        <div className="hire__languages_apr">
          <div className="hire__languagestext_apr">
            <h1>Languages</h1>
          </div>
          <div className="hire__languagesname_apr">
            <h5>English-C2 Level</h5>
          </div>
        </div>
        <div className="hire__achievements_apr">
          <div className="hire__achievementstext_apr">
            <h1>Achievements</h1>
          </div>
          <div className="hire__achievementsname_apr">
            <h5>Employee of the year 2021</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicantsProfile;
