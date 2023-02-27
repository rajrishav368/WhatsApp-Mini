import React from "react";
import "../hirecandidates/Empowerer2.css";
import logo from '../assets/logo.png';
import body from '../assets/employee.png';
import { Link } from "react-router-dom";

const Empowerer2 = () => {
  return (
    <div className="hire__empowerer2direction_epw2">
      <div className="hire__signup_logo_epw2">
      <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="hire__header_text1_epw2">
        <h1>How does Hiremploye work?</h1>
      </div>
      <div className="hire__header_text2_epw2">
        <h2>Quick and easy registration process for empowerers</h2>
      </div>
      <div className="hire__employers_image_epw2">
        <div className="hire__employers_image1_epw2">
          <img src={body} alt=""></img>
        </div>

        <div className="hire__data_right_epw2">
          <div className="hire__data_right_box1_epw2">
            <div className="hire__data_box1_epw2">
              <h3>4</h3>
            </div>
            <div className="hire__data_paragraph_epw2">
              <h3>Hire candidates</h3>
              <p>
                You can then message the HR of the company whose offer.{" "}
                <br></br>
                you’re interested in and talk through the terms of the offer.
                <br></br>
                The company with the vacancy will then review your candidates
                <br></br>
                and then you can move forward to the paperwork
              </p>
            </div>
          </div>
          <div className="hire__data_right_box2_epw2">
            <div className="hire__box2_epw2">
              <h3>5</h3>
            </div>
            <div className="hire__data_paragraph_epw2">
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
      <div className="hire__continue_button_epw2">
        <Link to='/signupEmpowerer'><button type="button">Continue</button></Link>
      </div>
    </div>
  );
}

export default Empowerer2;
