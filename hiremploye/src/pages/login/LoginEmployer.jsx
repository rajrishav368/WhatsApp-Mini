import React from "react";
import { Link } from "react-router-dom";
import "./loginemployer.css";
import logo from "../../assets/logo.svg";
import back_btn from "../../assets/back-btn.png";
import google from "../../assets/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginEmployer = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/loginEmployer",
        loginData
      );
      console.log("login succesfull");
      console.log(response.data); // Assuming the server returns a token
      localStorage.setItem('token', response.data.token);
      navigate("/CompanyInfoEmployer");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="hire__loginheader">
      <div className="hire__loginleft">
        <div className="hire__login_logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="hire__login_text1">
          <h2>Log In as an</h2>
        </div>
        <div className="hire__login_text2">
          <h2>Employer</h2>
        </div>
      </div>
      <div className="hire__loginright">
        <Link to="/loginMain">
          <div className="hire__login_back">
            <button type="button">
              <img src={back_btn} />
              Back
            </button>
          </div>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="hire__login_input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div className="hire__login_button1">
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className="hire__login_righttext">
          <h2>or</h2>
        </div>
        <div className="hire__login_button2">
          <button type="button">
            <img src={google} />
            Log In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployer;
