import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./signupemployer.css";
import logo from "../../assets/logo.svg";
import back_btn from "../../assets/back-btn.png";
import google from "../../assets/google.png";
import { useNavigate } from 'react-router-dom';

const SignupEmployer = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  
  const navigate = useNavigate()

  let submit = async (e) => {
    e.preventDefault();
    try {
      window.alert("submitted");
      const response=await axios.post("http://localhost:8000/SigninEmployer", {
        name,
        company,
        email,
        password,
        cpassword,
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/loginEmployer')
    } catch (e) {
      console.log(e);
    }
    
  };
  return (
    <div className="hire__signupheader">
      <div className="hire__signupleft">
        <div className="hire__signup_logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="hire__signup_text1">
          <h2>Sign Up as an</h2>
        </div>
        <div className="hire__signup_text2">
          <h2>Employer</h2>
        </div>
      </div>
      <div className="hire__signupright">
        <Link to="/EmployerDirection">
          <div className="hire__signup_back">
            <button type="button">
              <img src={back_btn} />
              Back
            </button>
          </div>
        </Link>
        <form>
          <div className="hire__signup_input">
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
          <div className="hire__signup_button1">
            <button type="submit" onClick={submit} value="Submit" name="signup">
              Sign Up
            </button>
          </div>
        </form>
        <div className="hire__signup_righttext">
          <h2>or</h2>
        </div>
        <div className="hire__signup_button2">
          <button type="button">
            <img src={google} />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupEmployer;
