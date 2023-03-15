import React from 'react';
import { Link } from 'react-router-dom';
import './signupemployer.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import google from '../../assets/google.png';

const SignupEmployer = () => {
  
  return (
    <div className='hire__signupheader'>
      <div className='hire__signupleft'>
        <div className="hire__signup_logo">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__signup_text1">
          <h2>Sign Up as an</h2>
        </div>
        <div className="hire__signup_text2">
          <h2>Employer</h2>
        </div>
      </div>
      <div className='hire__signupright'>
        <Link to="/EmployerDirection">
        <div className='hire__signup_back'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <div className='hire__signup_input'>
          <input type="name" placeholder="Name" />
          <input type="company" placeholder="Company Name" />
          <input type="E-mail" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className='hire__signup_button1'>
          <button type="button">Sign Up</button>
        </div>
        <div className="hire__signup_righttext">
          <h2>or</h2>
        </div>
        <div className='hire__signup_button2'>
          <button type="button"><img src={google} />Sign Up with Google</button>
        </div>
      </div>
    </div>
  )
}

export default SignupEmployer