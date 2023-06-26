import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signupempowerer.css";
import logo from "../../assets/logo.svg";
import back_btn from "../../assets/back-btn.png";
import google from "../../assets/google.png";
import axios from "axios";

const SignupEmpowerer = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate=useNavigate();

  let submit = async (e) => {
    e.preventDefault();

    try {
      window.alert("submitted");
      await axios.post("http://localhost:8000/SigninEmpowerer", {
        name,
        company,
        email,
        password,
        cpassword,
      });
    } catch (e) {
      console.log(e);
    }
    navigate("/loginEmpowerer");
  };
  return (
    <div className="hire__signupheader_epw">
      <div className="hire__signupleft_epw">
        <div className="hire__signup_logo_epw">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="hire__signup_text1_epw">
          <h2>Sign Up as an</h2>
        </div>
        <div className="hire__signup_text2_epw">
          <h2>Empowerer</h2>
        </div>
      </div>
      <div className="hire__signupright_epw">
        <Link to="/EmpowererDirection">
          <div className="hire__signup_back_epw">
            <button type="button">
              <img src={back_btn} />
              Back
            </button>
          </div>
        </Link>
        <form>
          <div className="hire__signup_input_epw">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              name="companyname"
              placeholder="Company Name"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </div>
          <div className="hire__signup_button1_epw">
            <button type="submit" onClick={submit} value="Submit" name="signup">Sign Up</button>
          </div>
        </form>
        <div className="hire__signup_righttext_epw">
          <h2>or</h2>
        </div>
        <div className="hire__signup_button2_epw">
          <button type="button">
            <img src={google} />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupEmpowerer;
