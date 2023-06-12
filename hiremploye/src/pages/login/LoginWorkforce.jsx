import React from 'react';
import { Link } from 'react-router-dom';
import './loginworkforce.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import google from '../../assets/google.png';

const LoginWorkforce = () => {
  return (
    <div className='hire__loginheader_wf'>
      <div className='hire__loginleft_wf'>
        <div className="hire__login_logo_wf">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__login_text1_wf">
          <h2>Log In as a</h2>
        </div>
        <div className="hire__login_text2_wf">
          <h2>Workforce</h2>
        </div>
      </div>
      <div className='hire__loginright_wf'>
        <Link to="/loginMain">
        <div className='hire__login_back_wf'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <div className='hire__login_input_wf'>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
        </div>
        <div className='hire__login_button1_wf'>
          <button type="button">Log In</button>
        </div>
        <div className="hire__login_righttext_wf">
          <h2>or</h2>
        </div>
        <div className='hire__login_button2_wf'>
          <button type="button"><img src={google} />Log In with Google</button>
        </div>
      </div>
    </div>
  )
}

export default LoginWorkforce