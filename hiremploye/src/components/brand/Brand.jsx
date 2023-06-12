import React from 'react';
import { Link } from 'react-router-dom';
import './brand.css';
import employer from '../../assets/bodyw.svg'
import workforce from '../../assets/work.svg'
import empowerer from '../../assets/empowerer.svg'

const Brand = () => {
  return (
    <div className='hire__brand'>
      <div className='hire__explore'>
        <h1>Explore</h1>
      </div>
      <div className='hire__brand_contents'>
        <Link to="/signupEmployer">
        <div className='hire__brand_employer'>
          <img src={employer} />          
          <div className='hire__brand_employertext'>
            <h2>For an Employer</h2>
            <h3>If you are looking to hire.</h3>
          </div>
        </div></Link>
        <Link to="/signupWorkforce">
        <div className='hire__brand_workforce'>
          <img src={workforce} /> 
          <div className='hire__brand_workforcetext'>
            <h2>For a Workforce</h2>
            <h3>If you have reserve employees.</h3>
          </div>
        </div></Link>
        <Link to="/signupEmpowerer">
        <div className='hire__brand_empowerer'>
        <img src={empowerer} /> 
          <div className='hire__brand_empowerertext'>
            <h2>For an Empowerer</h2>
            <h3>If you fit both the categories.</h3>
          </div>
        </div></Link>
      </div>
    </div>
  )
}

export default Brand