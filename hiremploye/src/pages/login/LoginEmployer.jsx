import React from 'react';
import { Link } from 'react-router-dom';
import './loginemployer.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import google from '../../assets/google.png';

const LoginEmployer = () => {
  return (
    <div className='hire__loginheader'>
      <div className='hire__loginleft'>
        <div className="hire__login_logo">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__login_text1">
          <h2>Log In as an</h2>
        </div>
        <div className="hire__login_text2">
          <h2>Employer</h2>
        </div>
      </div>
      <div className='hire__loginright'>
        <Link to="/loginMain">
        <div className='hire__login_back'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <div className='hire__login_input'>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
        </div>
        <div className='hire__login_button1'>
          <button type="button">Log In</button>
        </div>
        <div className="hire__login_righttext">
          <h2>or</h2>
        </div>
        <div className='hire__login_button2'>
          <button type="button"><img src={google} />Log In with Google</button>
        </div>
      </div>
    </div>
  )
}

export default LoginEmployer