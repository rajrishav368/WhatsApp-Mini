import React from "react";
import { Link } from "react-router-dom";
import "../hirecandidates/Empowerer.css";
import logo from "../assets/logo.png";
import body from "../assets/employee.png";

const Empowerer = () => {
  return (
    <div className="hire__employerdirection_epw">
      <div className="hire__signup_epw">
        <div className="hire__signup_logo_epw">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="hire__header_text_epw">
        <div className="hire__header_text1_epw">
          <h1>How does Hiremploye work?</h1>
        </div>
        <div className="hire__header_text2_epw">
          <h2>Quick and easy registration process for Empowerer</h2>
        </div>
      </div>

      <div className="hire__body_epw">
        <div className="hire__body_image_epw">
          <img src={body} alt=""></img>
        </div>

        <div className="hire__body_right_epw">
          <div className="hire__body_box1_epw">
            <div className="hire__body_box1_number_epw">
              <h3>1</h3>
            </div>
            <div className="hire__body_box1_text_epw">
              <h3>Create an account</h3>
              <p>
                This is a very quick process that only requires your personal
                information, as well as a brief description of the company
                you’re working for
              </p>
            </div>
          </div>
          <div className="hire__body_box2_epw2">
            <div className="hire__body_box2_number_epw2">
              <h3>2</h3>
            </div>
            <div className="hire__body_box2_text_epw2">
              <h3>Publish Vacancies</h3>
              <p>
                Once you have an account, you can browse vacancies by going to
                the “Employees” section on the top, and adding your employees.
                You will need to add their personal information, as well as
                career overview and their performance statistics
              </p>
            </div>
          </div>
          <div className="hire__body_box2_epw2">
            <div className="hire__body_box2_number_epw2">
              <h3>3</h3>
            </div>
            <div className="hire__body_box2_text_epw2">
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
      <div className="hire__more_button_epw">
        <Link to="/Empowerer2Direction">
          <button type="button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Empowerer;
