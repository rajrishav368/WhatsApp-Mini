import React from 'react';
import { Link } from 'react-router-dom';
import './signupempowerer.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import google from '../../assets/google.png';

const SignupEmpowerer = () => {
  return (
    <div className='hire__signupheader_epw'>
      <div className='hire__signupleft_epw'>
        <div className="hire__signup_logo_epw">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__signup_text1_epw">
          <h2>Sign Up as an</h2>
        </div>
        <div className="hire__signup_text2_epw">
          <h2>Empowerer</h2>
        </div>
      </div>
      <div className='hire__signupright_epw'>
      <Link to="/EmpowererDirection">
        <div className='hire__signup_back_epw'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <div className='hire__signup_input_epw'>
          <input type="name" placeholder="Name" />
          <input type="company" placeholder="Company Name" />
          <input type="E-mail" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className='hire__signup_button1_epw'>
          <button type="button">Sign Up</button>
        </div>
        <div className="hire__signup_righttext_epw">
          <h2>or</h2>
        </div>
        <div className='hire__signup_button2_epw'>
          <button type="button"><img src={google} />Sign Up with Google</button>
        </div>
      </div>
    </div>
  )
}

export default SignupEmpowerer