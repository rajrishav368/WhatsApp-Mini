import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="hire__header section__padding">
      <div className="hire__header-content">
        <h1 className="main__text">Find Your Employee</h1>
        <h4>Get your employee in a click</h4>
        <div className="hire__header-content__input">
          <input type="search" placeholder="React Developer, UI/UX Designer" />
          <button type="button">Search</button>
        </div>
        <h4>or</h4>
        <div className="hire__header-content__reserve">
        <button type="button">I have reserve employees!</button>
        </div>
      </div>
    </div>
  )
}

export default Header