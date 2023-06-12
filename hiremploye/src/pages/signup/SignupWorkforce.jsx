import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signupworkforce.css";
import logo from "../../assets/logo.svg";
import back_btn from "../../assets/back-btn.png";
import google from "../../assets/google.png";
import axios from "axios";

const SignupWorkforce = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  let submit = async (e) => {
    e.preventDefault();

    try {
      window.alert("submitted");
      await axios.post("http://localhost:8000/SigninWorkforce", {
        name,
        company,
        email,
        password,
        cpassword,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="hire__signupheader_wf">
      <div className="hire__signupleft_wf">
        <div className="hire__signup_logo_wf">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="hire__signup_text1_wf">
          <h2>Sign Up as a</h2>
        </div>
        <div className="hire__signup_text2_wf">
          <h2>Workforce</h2>
        </div>
      </div>
      <div className="hire__signupright_wf">
        <Link to="/WorkforceDirection">
          <div className="hire__signup_back_wf">
            <button type="button">
              <img src={back_btn} />
              Back
            </button>
          </div>
        </Link>
        <form>
          <div className="hire__signup_input_wf">
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
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </div>
          <div className="hire__signup_button1_wf">
            <button type="submit" onClick={submit} value="Submit" name="signup">Sign Up</button>
          </div>
        </form>
        <div className="hire__signup_righttext_wf">
          <h2>or</h2>
        </div>
        <div className="hire__signup_button2_wf">
          <button type="button">
            <img src={google} />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupWorkforce;
