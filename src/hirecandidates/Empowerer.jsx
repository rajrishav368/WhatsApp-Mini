import React from "react";
import { Link } from "react-router-dom";
import "../hirecandidates/Empowerer.css";
import logo from '../assets/logo.png';
import body from '../assets/employee.png';

const Empowerer = () => {
  return (
    <div className="hire__empowererdirection">
      <div className="hire__signup_logo_epw">
      <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="hire__header_text1_epw">
        <h1>How does Hiremploye work?</h1>
      </div>
      <div className="hire__header_text2_epw">
      <h2>Quick and easy registration process for empowerers</h2>
      </div>
      <div className="hire__employers_image_epw">
        <div className="hire__employers_image1_epw">
          <img src={body} alt=""></img>
        </div>

        <div className="hire__data_right_epw">
          <div className="hire__data_right_box1_epw">
            <div className="hire__data_box1_epw">
              <h3>1</h3>
            </div>
            <div className="hire__data_paragraph_epw">
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
          <div className="hire__data_right_box2_epw">
            <div className="hire__box2_epw">
              <h3>2</h3>
            </div>
            <div className="hire__data_paragraph_epw">
              <h3>Publish vacancies</h3>
              <p>
                Once you have an account, you can create a vacancy by going to
                <br></br>
                the “Vacancy” section on the top, and creating a new offer.
                <br></br>
                In order to make the vacancy available for the applicants, you
                <br></br>
                need to fill out general information about your vacancy and
                <br></br>
                the proceed to upload it
              </p>
            </div>
          </div>
          <div className="hire__data_right_box3_epw">
            <div className="hire__box3_epw">
              <h3>3</h3>
            </div>
            <div className="hire__data_paragraph_epw">
              <h3>Add Employees</h3>
              <p>
                Once you have an account, you can browse vacancies by going<br></br>
                to the “Employees” section on the top, and adding your<br></br>
                employees. You will need to add their personal information,<br></br>
                as well as career overview and their performance statistics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hire__more_button_epw">
        <Link to='/Empowerer2Direction'><button type="button">Next</button></Link>
      </div>
    </div>
  );
}

export default Empowerer;
