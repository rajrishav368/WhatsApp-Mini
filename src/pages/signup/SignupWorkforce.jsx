import React from 'react';
import { Link } from 'react-router-dom';
import './signupworkforce.css';
import logo from '../../assets/logo.svg';
import back_btn from '../../assets/back-btn.png';
import google from '../../assets/google.png';

const SignupWorkforce = () => {
  return (
    <div className='hire__signupheader_wf'>
      <div className='hire__signupleft_wf'>
        <div className="hire__signup_logo_wf">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="hire__signup_text1_wf">
          <h2>Sign Up as a</h2>
        </div>
        <div className="hire__signup_text2_wf">
          <h2>Workforce</h2>
        </div>
      </div>
      <div className='hire__signupright_wf'>
        <Link to="/WorkforceDirection">
        <div className='hire__signup_back_wf'>
          <button type="button"><img src={back_btn} />Back</button>
        </div></Link>
        <div className='hire__signup_input_wf'>
          <input type="name" placeholder="Name" />
          <input type="company" placeholder="Company Name" />
          <input type="E-mail" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className='hire__signup_button1_wf'>
          <button type="button">Sign Up</button>
        </div>
        <div className="hire__signup_righttext_wf">
          <h2>or</h2>
        </div>
        <div className='hire__signup_button2_wf'>
          <button type="button"><img src={google} />Sign Up with Google</button>
        </div>
      </div>
    </div>
  )
}

export default SignupWorkforce