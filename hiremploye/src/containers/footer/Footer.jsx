import React from 'react'
import './footer.css'
import hireLogo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="hire__footer section__padding">
      <div className="hire__footer-heading">
        <h1 className="gradient__text">Recruit the best</h1>
      </div>

      <div className="hire__footer-btn">
        <Link to="/signupEmployer"><p>Get your employee</p></Link>
      </div>

      <div className="hire__footer-links">
        <div className="hire__footer-links_logo">
          <img src={hireLogo} alt="logo" />
        </div>
        <div className="hire__footer-links_div">
          <h4>Links</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Companies</p>
          <p>Workforce</p>
          <p>Empowerer</p>
        </div>
        <div className="hire__footer-links_div">
          <h4>Get in touch</h4>
          <p>LinkedIn</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className="hire__footer-copyright">
        <p>Copyright © 2023  hiremploye. All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer