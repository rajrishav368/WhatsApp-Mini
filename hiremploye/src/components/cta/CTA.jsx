import React from 'react'
import { Link } from 'react-router-dom';
import './cta.css';
import woman from '../../assets/woman.png';

const CTA = () => {
  return (
    <div className='hire__cta_main'>
      <img src={woman} />
      <div className='hire__cta_text1'>
        <h4>EMPLOYERS</h4>
        <h2>LOOKING TO POST A JOB?</h2>
        <p>We have end-to-end solutions that can keep up with you and your standards</p>
      </div>
      <div className='hire__cta_button'>
        <Link to="/signupEmployer"><button type='button'>Post a Job</button></Link>
      </div>
    </div>
  )
}

export default CTA