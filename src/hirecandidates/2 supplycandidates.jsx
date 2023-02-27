import React from "react";
import "./hirecandidates/2 supplycandidates.css";
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
              <h3>Add Employees</h3>
              <p>
                Once you have an account, you can browse vacancies by <br></br>
                going to the “Employees” section on the top, and adding  <br></br>
                your employees.You will need to add their personal <br></br>
                information, as well as career overview and their  <br></br>
                performance statistics
              </p>
            </div>
          </div>
          <div className="hire_data_3">
            <div className="hire_3">
              <h3>3</h3>
            </div>
            <div className="hire_data_column">
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
      <div className="hire_button">
        <button type="button">continue</button>
      </div>
    </div>
  );
}

export default App;
