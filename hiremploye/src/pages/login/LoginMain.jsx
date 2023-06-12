import React from 'react';
import { Link } from 'react-router-dom';
import './loginmain.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import body from '../../assets/body.svg';

const LoginMain = () => {
  return (
    <div className='hire__loginheader_main'>
      <div className='hire__loginleft_main'>
        <div className="hire__login_logo_main">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__login_text1_main">
          <h2>Log In</h2>
        </div>
        <div className="hire__login_text2_main">
          <h2>Select your category and enter your Hiremploye credentials</h2>
        </div>
      </div>
      <div className='hire__loginright_main'>
      <Link to="/">
        <div className='hire__login_back_main'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <Link to='/loginEmployer'>
        <div className='hire__loginright_employer'>
          <img src={body} />
          <div className='hire__loginright_employer_text'>
            <h2>Employer</h2>
            <h3>If you are looking to hire.</h3>
          </div>
        </div></Link>
        <Link to='/loginWorkforce'>
        <div className='hire__loginright_workforce'>
          <img src={body} />
          <div className='hire__loginright_workforce_text'>
            <h2>Workforce</h2>
            <h3>If you have reserve employees.</h3>
          </div>
        </div></Link>
        <Link to='/loginEmpowerer'>
        <div className='hire__loginright_empowerer'>
          <img src={body} />
          <div className='hire__loginright_empowerer_text'>
            <h2>Empowerer</h2>
            <h3>Use this if you fit both the above categories.</h3>
          </div>
        </div></Link>
      </div>
    </div>
  )
}

export default LoginMain