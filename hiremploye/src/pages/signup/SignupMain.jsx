import React from 'react';
import { Link } from 'react-router-dom';
import './signupmain.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import body from '../../assets/body.svg';

const SignupMain = () => {
  return (
    <div className='hire__signupheader_main'>
      <div className='hire__signupleft_main'>
        <div className="hire__signup_logo_main">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__signup_text1_main">
          <h2>Sign Up</h2>
        </div>
        <div className="hire__signup_text2_main">
          <h2>If you don't have a Hiremploye account, select a category that fits you and proceed to the registration process.</h2>
        </div>
      </div>
      <div className='hire__signupright_main'>
      <Link to="/">
        <div className='hire__signup_back_main'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <Link to='/EmployerDirection'>
        <div className='hire__signupright_employer'>
          <img src={body} />
          <div className='hire__signupright_employer_text'>
            <h2>Employer</h2>
            <h3>If you are looking to hire.</h3>
          </div>
        </div></Link>
        <Link to='/WorkforceDirection'>
        <div className='hire__signupright_workforce'>
          <img src={body} />
          <div className='hire__signupright_workforce_text'>
            <h2>Workforce</h2>
            <h3>If you have reserve employees.</h3>
          </div>
        </div></Link>
        <Link to='/EmpowererDirection'>
        <div className='hire__signupright_empowerer'>
          <img src={body} />
          <div className='hire__signupright_empowerer_text'>
            <h2>Empowerer</h2>
            <h3>Use this if you fit both the above categories.</h3>
          </div>
        </div></Link>
      </div>
    </div>
  )
}

export default SignupMain