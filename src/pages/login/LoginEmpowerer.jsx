import React from 'react';
import { Link } from 'react-router-dom';
import './loginempowerer.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import google from '../../assets/google.png';

const LoginEmpowerer = () => {
  return (
    <div className='hire__loginheader_epw'>
      <div className='hire__loginleft_epw'>
        <div className="hire__login_logo_epw">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__login_text1_epw">
          <h2>Log In as an</h2>
        </div>
        <div className="hire__login_text2_epw">
          <h2>Empowerer</h2>
        </div>
      </div>
      <div className='hire__loginright_epw'>
      <Link to="/loginMain">
        <div className='hire__login_back_epw'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <div className='hire__login_input_epw'>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
        </div>
        <div className='hire__login_button1_epw'>
          <button type="button">Log In</button>
        </div>
        <div className="hire__login_righttext_epw">
          <h2>or</h2>
        </div>
        <div className='hire__login_button2_epw'>
          <button type="button"><img src={google} />Log In with Google</button>
        </div>
      </div>
    </div>
  )
}

export default LoginEmpowerer