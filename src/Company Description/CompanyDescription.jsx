import React from "react";
import { Link } from "react-router-dom";
import "./CompanyDescription.css";
import logo from "../assets/logo.png";
import downarrow from "../assets/downarrow.png";
import back_btn from "../assets/back-btn.png";
import black from "../assets/blackscreen.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import empimage from "../assets/empimgae.png";
import message from "../assets/message.png";

const CompanyDescription = () => {
  return (
    <div className="hire__applicantsprofile_code">
      <div className="hire__applicantsprofile_header_code">
        <div className="hire__header_logo_code">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="hire__header_vacancy_code">
          <p>
            <a href="#">Vacancy</a>
          </p>
          <p>
            <a href="#">Companies</a>
          </p>
        </div>
        <div className="hire__header_username_code">
          <div className="hire__header_username_background_code">
            <h5>U</h5>
          </div>
          <div className="hire__header_username_text_code">
            <h5>Username</h5>
          </div>
          <div className="hire__header_username_downlogo_code">
            <img src={downarrow} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hire__horizontal_line1_code">
        <hr />
      </div>
      <div className="hire__companyname_code">
        <div className="hire__login_back_code">
          <button type="button">
            <img src={back_btn} alt="" />
            Back
          </button>
        </div>
        <div className="hire__company_code">
          <img src={black} alt=""></img>
          <h5>Company Name</h5>
        </div>
      </div>
      <div className="hire__description_body_code">
        <div className="hire__description_details_code">
          <div className="hire__description_location_website_size_code">
            <div className="hire__description_location_code">
              <h4>Compan Location</h4>
              <h5>Bengaluru, India</h5>
            </div>
            <div className="hire__description_website_code">
              <h4>Company Website</h4>
              <h5>www.xyz.abc</h5>
            </div>
            <div className="hire__description_companysize_code">
              <h4>Company size</h4>
              <h5>11-50 employees</h5>
            </div>
            <div className="hire__description_openemployees_code">
              <h4>Open employees</h4>
              <h5>6</h5>
            </div>
          </div>
          <div className="hire__horizontal_line2_code">
            <hr />
          </div>
          <div className="hire__description_social_links_code">
            <div className="hire__facebook_code">
              <img src={facebook} alt=""></img>
              <h3>Company</h3>
            </div>
            <div className="hire__instagram_code">
              <img src={instagram} alt=""></img>
              <h3>Company</h3>
            </div>
            <div className="hire__telegram_code">
              <img src={telegram} alt=""></img>
              <h3>Company</h3>
            </div>
            <div className="hire__youtube_code">
              <img src={youtube} alt=""></img>
              <h3>Company</h3>
            </div>
          </div>
          <div className="hire__description_textdata_code">
            <div className="hire__description_text_code">
              <h2>Description</h2>
            </div>
            <div className="hire__description_data_code">
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
        <div className="hire__horizontal_line3_code">
          <hr />
        </div>
        <div className="hire__employeesavailable_code">
          <div className="hire__employeesavailable_text_code">
            <h2>Employees available from this company</h2>
          </div>
        </div>
        <div className="hire__jobrolesdescription1_code">
          <div className="hire__jobroles1_code">
            <div className="hire__empnamemessage1_code">
              <div className="hire__empname1_code">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage1_code">
                <img src={message} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription1_code">
              <div className="hire__rolename1_code">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription1_code">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview1_code">
              <div className="hire__rolelocation1_code">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience1_code">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining1_code">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton1_code">
                <button type="button">View</button>
              </div>
            </div>
          </div>
          <div className="hire__jobroles2_code">
            <div className="hire__empnamemessage2_code">
              <div className="hire__empname2_code">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage2_code">
                <img src={message} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription2_code">
              <div className="hire__rolename1_code">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription2_code">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview2_code">
              <div className="hire__rolelocation2_code">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience2_code">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining2_code">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton2_code">
                <button type="button">View</button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="hire__jobrolesdescription2_code">
          <div className="hire__jobroles3_code">
            <div className="hire__empnamemessage3_code">
              <div className="hire__empname3_code">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage3_code">
                <img src={message} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription3_code">
              <div className="hire__rolename3_wf_emp">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription3_code">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview3_code">
              <div className="hire__rolelocation3_code">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience3_code">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining3_code">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton3_code">
                <button type="button">View</button>
              </div>
            </div>
          </div>
          <div className="hire__jobroles4_code">
            <div className="hire__empnamemessage4_code">
              <div className="hire__empname4_code">
                <img src={empimage} alt=""></img>
                <h3>Name</h3>
              </div>
              <div className="hire__empmessage4_code">
                <img src={message} alt=""></img>
              </div>
            </div>
            <div className="hire__rolenamedescription4_code">
              <div className="hire__rolename4_code">
                <h1>Role</h1>
              </div>
              <div className="hire__roledescription4_code">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed mauris consectetur, convallis odio sed,
                  tempus enim. Cras maximus nisi nisi, mattis volutpat tellus
                  sodales vel.
                </p>
              </div>
            </div>
            <div className="hire__rolelocationexperiencejoiningview4_code">
              <div className="hire__rolelocation4_code">
                <h3>Location</h3>
              </div>
              <div className="hire__roleexperience4_code">
                <h3>Experience</h3>
              </div>
              <div className="hire__rolejoining4_code">
                <h3>Joining Availability</h3>
              </div>
              <div className="hire__viewbutton4_code">
                <button type="button">View</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default CompanyDescription;
