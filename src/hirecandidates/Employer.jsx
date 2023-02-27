import React from "react";
import { Link } from "react-router-dom";
import "../hirecandidates/Employer.css";
import logo from "../assets/logo.png";
import body from "../assets/employee.png";

const Employer = () => {
  return (
    <div className="hire__employerdirection_emp">
    <div className="hire__signup_emp">
      <div className="hire__signup_logo_emp">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      </div>

      <div className="hire__header_text_emp">
        <div className="hire__header_text1_emp">
          <h1>How does Hiremploye work?</h1>
        </div>
        <div className="hire__header_text2_emp">
          <h2>Quick and easy registration process for employers</h2>
        </div>
      </div>

        <div className="hire__employers_image_emp">
          <div className="hire__employers_image1_emp">
            <img src={body} alt=""></img>
          </div>

          <div className="hire__data_right_emp">
            <div className="hire__data_right_box1_emp">
              <div className="hire__data_box1_emp">
                <h3>1</h3>
              </div>
              <div className="hire__data_paragraph_emp">
                <h3>Create an account</h3>
                <p>
                  This is a very quick process that only requires your personal
                  
                  information, as well as a brief description of the company
    
                  you're working for
                </p>
              </div>
            </div>
            <div className="hire__data_right_box2_emp">
              <div className="hire__box2_emp">
                <h3>2</h3>
              </div>
              <div className="hire__data_paragraph_emp">
                <h3>Publish Vacancies</h3>
                <p>
                  Once you have an account, you can create a vacancy by going
                
                  to the "Vacancy" section on the top, and creating a new offer.
                  
                  in order to make the vacancy available for the applicants, you
                 
                  need to fill out general information about your vacancy and
                 
                  then proceed to upload it.
                </p>
              </div>
            </div>
            <div className="hire__data_right_box3_emp">
              <div className="hire__box3_emp">
                <h3>3</h3>
              </div>
              <div className="hire__data_paragraph_emp">
                <h3>Hire candidates</h3>
                <p>
                  Once the vacancy is published, other companies will be able to
             
                  view your offer, and provide their reserve employees for the
                 
                  position. You can also search for candidates from the search
                  
                  bar. You will then get the chance to review the applications
                  and
                
                  find the best candidate for you!
                </p>
              </div>
            </div>
          </div>
      </div>
      <div className="hire__continue_button_emp">
        <Link to="/signupEmployer">
          <button type="button">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Employer;
