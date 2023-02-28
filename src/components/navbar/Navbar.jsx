import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hire__navbar">
      <div className="hire__navbar-links">
        <div className="hire__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="hire__navbar-links_container">
          <p>
            <a href="#">Vacancy</a>
          </p>
          <p>
            <a href="#">Companies</a>
          </p>
        </div>
        <div className="hire__navbar-button_container">
          <div className="hire__navbar-log">
            <Link to="/loginMain">
              <button type="button">Log In</button>
            </Link>
          </div>
          <div className="hire__navbar-sign">
            <Link to="/signupMain">
              <button type="button">Sign Up</button>
            </Link>
          </div>
          <div className="hire__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#393E46"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#393E46"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="hire__navbar-menu_container scale-up-center">
                <div className="hire__navbar-menu_container-links">
                  <p>
                    <a href="#">Vacancy</a>
                  </p>
                  <p>
                    <a href="#">Companies</a>
                  </p>

                  <div className="hire__navbar-menu_container-links-log">
                    <Link to="/loginMain">
                      <button type="button">Log In</button>
                    </Link>
                  </div>
                  <div className="hire__navbar-menu_container-links-sign">
                    <Link to="/signupMain">
                      <button type="button">Sign Up</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
