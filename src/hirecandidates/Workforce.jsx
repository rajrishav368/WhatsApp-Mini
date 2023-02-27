import React from "react";
import "../hirecandidates/Workforce.css";
import logo from "../assets/logo.png";
import body from "../assets/employee.png";

import { Link } from "react-router-dom";
const Workforce = () => {
  return (
    <div className="hire__workforcedirection">
      <div className="hire__signup_logo_wf">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="hire__header_text1_wf">
        <h1>How does Hiremploye work?</h1>
      </div>
      <div className="hire__header_text2_wf">
        <h2>Quick and easy registration process for workforces</h2>
      </div>
      <div className="hire__employers_image_wf">
        <div className="hire__employers_image1_wf">
          <img src={body} alt=""></img>
        </div>

        <div className="hire__data_right_wf">
          <div className="hire__data_right_box1_wf">
            <div className="hire__box1_wf">
              <h3>1</h3>
            </div>
            <div className="hire__data_paragraph_wf">
              <h3>Create an account</h3>
              <p>
                This is a very quick process that only requires your personal
                <br></br>
                information, as well as a brief description of the company
                <br></br>
                you're working for
              </p>
            </div>
          </div>
          <div className="hire__data_right_box2_wf">
            <div className="hire__box2_wf">
              <h3>2</h3>
            </div>
            <div className="hire__data_paragraph_wf">
              <h3>Add Employees</h3>
              <p>
                Once you have an account, you can browse vacancies by <br></br>
                going to the “Employees” section on the top, and adding
                <br></br>
                your employees.You will need to add their personal <br></br>
                information, as well as career overview and their <br></br>
                performance statistics
              </p>
            </div>
          </div>
          <div className="hire__data_right_box3_wf">
            <div className="hire__box3_wf">
              <h3>3</h3>
            </div>
            <div className="hire__data_paragraph_wf">
              <h3>Supply candidates</h3>
              <p>
                You can then message the HR of the company whose offer
                <br></br>
                you’re interested in and talk through the terms of the offer.The
                <br></br>
                company with the vacancy will then review your candidates and
                <br></br>
                then you can move forward to the paperwork
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hire__continue_button_wf">
        <Link to="/signupWorkforce">
          <button type="button">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Workforce;
