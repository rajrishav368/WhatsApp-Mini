import React from "react";
import "./hirecandidates/4 hiresupplycandidates2.css";
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
              <h3>4</h3>
            </div>
            <div className="hire_data_column">
              <h3>Hire candidates</h3>
              <p>
                You can then message the HR of the company whose offer.
                <br></br>
                you’re interested in and talk through the terms of the offer.
                <br></br>
                The company with the vacancy will then review your candidates
                <br></br>
                and then you can move forward to the paperwork
              </p>
            </div>
          </div>
          <div className="hire_data_2">
            <div className="hire_2">
              <h3>5</h3>
            </div>
            <div className="hire_data_column">
              <h3>Supply candidates</h3>
              <p>
                Once the vacancy is published, other companies will be able to<br></br>
                view your offer, and provide their reserve employees for the<br></br>
                position. You can also search for candidates from the search<br></br>
                bar. You will then get the chance to review the applications and<br></br>
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
