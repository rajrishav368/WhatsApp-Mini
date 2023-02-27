import React from "react";
import "../hirecandidates/Empowerer2.css";
import logo from "../assets/logo.png";
import body from "../assets/employee.png";
import { Link } from "react-router-dom";

const Empowerer2 = () => {
  return (
    <div className="hire__employerdirection_epw2">
      <div className="hire__signup_epw2">
        <div className="hire__signup_logo_epw2">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="hire__header_text_epw2">
        <div className="hire__header_text1_epw2">
          <h1>How does Hiremploye work?</h1>
        </div>
        <div className="hire__header_text2_epw2">
          <h2>Quick and easy registration process for employers</h2>
        </div>
      </div>

      <div className="hire__body_epw2">
        <div className="hire__body_image_epw2">
          <img src={body} alt=""></img>
        </div>

        <div className="hire__body_right_epw2">
          <div className="hire__body_box1_epw2">
            <div className="hire__body_box1_number_epw2">
              <h3>4</h3>
            </div>
            <div className="hire__body_box1_text_epw2">
              <h3>Hire candidates</h3>
              <p>
                Once you have an account, you can create a vacancy by going to
                the “Vacancy” section on the top, and creating a new offer. In
                order to make the vacancy available for the applicants, you need
                to fill out general information about your vacancy and then
                proceed to upload it
              </p>
            </div>
          </div>
          <div className="hire__body_box3_epw2">
            <div className="hire__body_box3_number_epw2">
              <h3>5</h3>
            </div>
            <div className="hire__body_box3_text_epw2">
              <h3>Add employees</h3>
              <p>
                Once you have an account, you can browse vacancies by going to
                the “Employees” section on the top, and adding your employees.
                You will need to add their personal information, as well as
                career overview and their performance statistics
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hire__continue_button_epw2">
        <Link to="/signupEmpowerer">
          <button type="button">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Empowerer2;
