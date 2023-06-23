import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginworkforce.css";
import logo from "../../assets/logo.svg";
import back_btn from "../../assets/back-btn.png";
import google from "../../assets/google.png";
import { useState } from "react";
import axios from "axios";

const LoginWorkforce = () => {
  const Navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:8000/loginWorkforce', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      Navigate("/CompanyInfoWorkforce");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="hire__loginheader_wf">
      <div className="hire__loginleft_wf">
        <div className="hire__login_logo_wf">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="hire__login_text1_wf">
          <h2>Log In as a</h2>
        </div>
        <div className="hire__login_text2_wf">
          <h2>Workforce</h2>
        </div>
      </div>
      <div className="hire__loginright_wf">
        <Link to="/loginMain">
          <div className="hire__login_back_wf">
            <button type="button">
              <img src={back_btn} />
              Back
            </button>
          </div>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="hire__login_input_wf">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="hire__login_button1_wf">
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className="hire__login_righttext_wf">
          <h2>or</h2>
        </div>
        <div className="hire__login_button2_wf">
          <button type="button">
            <img src={google} />
            Log In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginWorkforce;
