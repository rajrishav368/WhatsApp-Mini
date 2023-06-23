import React from "react";
import { Link } from "react-router-dom";
import "./loginempowerer.css";
import logo from "../../assets/logo.svg";
import back_btn from "../../assets/back-btn.png";
import google from "../../assets/google.png";
import { useState } from "react";

const LoginEmpowerer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/SigninEmpowerer?email=${email}&password=${password}`
      );

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log(data.message);
      } else {
        // Login failed
        console.error(data.message);
      }
    } catch (err) {
      console.error("Login error", err);
    }
  };
  return (
    <div className="hire__loginheader_epw">
      <div className="hire__loginleft_epw">
        <div className="hire__login_logo_epw">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="hire__login_text1_epw">
          <h2>Log In as an</h2>
        </div>
        <div className="hire__login_text2_epw">
          <h2>Empowerer</h2>
        </div>
      </div>
      <div className="hire__loginright_epw">
        <Link to="/loginMain">
          <div className="hire__login_back_epw">
            <button type="button">
              <img src={back_btn} />
              Back
            </button>
          </div>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="hire__login_input_epw">
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="hire__login_button1_epw">
            <button type="submit">Log In</button>
          </div>
        </form>
        <div className="hire__login_righttext_epw">
          <h2>or</h2>
        </div>
        <div className="hire__login_button2_epw">
          <button type="button">
            <img src={google} />
            Log In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginEmpowerer;
