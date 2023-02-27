import React from "react";
import "./hirecandidates/1 hirecandidates.css";
import logo from '../src/hirecandidates/logo.png';
import employers from "../src/hirecandidates/employers.png";
function App() {
  return (
    <div className="hire_employers">
      <div className="hire_signup_logo">
        <img src={logo} alt="" />
      </div>
      <div className="hire_header">
        <h1>How does Hiremploye work?</h1>
        <h2>Quick and easy registration process for employers</h2>
      </div>
      <div className="hire_employers_logo">
        <div className="hire_employers_logo1">
          <img src={employers} alt=""></img>
        </div>
        
        <div className="hire_data">
          <div className="hire_data_1">
            <div className="hire_1">
              <h3>1</h3>
            </div>
            <div className="hire_data_column">
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
          <div className="hire_data_2">
            <div className="hire_2">
              <h3>2</h3>
            </div>
            <div className="hire_data_column">
              <h3>Publish Vacancies</h3>
              <p>
                Once you have an account, you can create a vacancy by going
                <br></br>
                to the "Vacancy" section on the top, and creating a new offer.
                <br></br>
                in order to make the vacancy available for the applicants, you
                <br></br>
                need to fill out general information about your vacancy and
                <br></br>
                then proceed toupload it.
              </p>
            </div>
          </div>
          <div className="hire_data_3">
            <div className="hire_3">
              <h3>3</h3>
            </div>
            <div className="hire_data_column">
              <h3>Hire candidates</h3>
              <p>
                Once the vacancy is published, other companies will be able to
                <br></br>
                view your offer, and provide their reserve employees for the
                <br></br>
                position. You can also search for candidates from the search
                <br></br>
                bar. You will then get the chance to review the applications and
                <br></br>
                find the best candidate for you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hire_button">
        <button type="button">continue</button>
      </div>
    </div>
  );
}

export default App;
