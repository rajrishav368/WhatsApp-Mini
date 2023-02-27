import React from "react";
import "../hirecandidates/Workforce.css";
import logo from "../assets/logo.png";
import body from "../assets/employee.png";

import { Link } from "react-router-dom";
const Workforce = () => {
  return (
    <div className="hire__employerdirection_wf">
      <div className="hire__signup_wf">
        <div className="hire__signup_logo_wf">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="hire__header_text_wf">
        <div className="hire__header_text1_wf">
          <h1>How does Hiremploye work?</h1>
        </div>
        <div className="hire__header_text2_wf">
          <h2>Quick and easy registration process for Workforce</h2>
        </div>
      </div>

      <div className="hire__body_wf">
        <div className="hire__body_image_wf">
          <img src={body} alt=""></img>
        </div>

        <div className="hire__body_right_wf">
          <div className="hire__body_box1_wf">
            <div className="hire__body_box1_number_wf">
              <h3>1</h3>
            </div>
            <div className="hire__body_box1_text_wf">
              <h3>Create an account</h3>
              <p>
                This is a very quick process that only requires your personal
                information, as well as a brief description of the company
                you’re working for
              </p>
            </div>
          </div>
          <div className="hire__body_box2_wf">
            <div className="hire__body_box2_number_wf">
              <h3>2</h3>
            </div>
            <div className="hire__body_box2_text_wf">
              <h3>Add Employees</h3>
              <p>
                Once you have an account, you can browse vacancies by going to
                the “Employees” section on the top, and adding your employees.
                You will need to add their personal information, as well as
                career overview and their performance statistics
              </p>
            </div>
          </div>
          <div className="hire__body_box3_wf">
            <div className="hire__body_box3_number_wf">
              <h3>3</h3>
            </div>
            <div className="hire__body_box3_text_wf">
              <h3>Supply candidates</h3>
              <p>
                You can then message the HR of the company whose offer you’re
                interested in and talk through the terms of the offer. The
                company with the vacancy will then review your candidates and
                then you can move forward to the paperwork
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
