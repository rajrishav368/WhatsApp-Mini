import React from "react";
import "./App.css";
import logo from "../../rishav/src/company information/logo.png";
import camera from "../../rishav/src/company information/camera.png";
import www from "../../rishav/src/company information/world wide web.png";
import github from "../../rishav/src/company information/github.png";
import instagram from "../../rishav/src/company information/instagram.png";
import linkedin from "../../rishav/src/company information/linkedin.png";
import facebook from "../../rishav/src/company information/facebook.png";
import telegram from "../../rishav/src/company information/telegram.png";
import youtube from "../../rishav/src/company information/youtube.png";
import {useState} from "react";
import Select from "react-select";
import { useMemo } from "react";
import countryList from "react-select-country-list";


function App() {

  const [value,setValue]= useState("");
  const options= useMemo(()=>countryList().getData(),[]);

  const changeHandler=(value)=>{
    setValue(value);
    
  };
  return (
    <div className="hire_employers">

      <div className="hire_header">
        <div className="hire_logo">
          <img src={logo} alt=""></img>
        </div>
        <div className="hire_company_information">
          <h2>Company information</h2>
        </div>
      </div>

      <div className="hire_upload_company">
        <div className="hire_camera_pic">
          <img src={camera} alt=""></img>
        </div>
      </div>
      <div className="hire_upload_pic">
        <h3>upload company logo</h3>
      </div>

      <div className="hire_employee_data">
        <div className="hire_company_name">
          <input type="text" placeholder="Company name"></input>
        </div>
        <div className="hire_company_mail">
          <input className="email" placeholder="Contact E-mail"></input>
        </div>

        <div className="hire_company_links">
          <h2>Add your links:</h2>
        </div>
        <div className="hire_social_links">
          <div className="hire_www">
            <img src={www} alt=""></img>
          </div>
          <div className="hire_linkedin">
            <img src={linkedin} alt=""></img>
          </div>
          <div className="hire_facebook">
            <img src={facebook} alt=""></img>
          </div>
          <div className="hire_github">
            <img src={github} alt=""></img>
          </div>
          <div className="hire_instagram">
            <img src={instagram} alt=""></img>
          </div>
          <div className="hire_telegram">
            <img src={telegram} alt=""></img>
          </div>
          <div className="hire_youtube">
            <img src={youtube} alt=""></img>
          </div>
        </div>
      
        <div className="hire_phone_number">
          <input type="text" placeholder="Phone number optional"></input>
        </div>
        <div className="hire_country_dropdown">
          <Select options={options} value={value} onChange={changeHandler}/>
        </div>
        <div className="hire_state">
          <input type="text" placeholder="Region/state"></input>
        </div>
        <div className="hire_company_size">
          <input type="text" placeholder="Company size"></input>
        </div>
        <div className="hire_company_description">
          <input type="text" placeholder="Company description"></input>
        </div>

        <div className="hire_create_button">
          <button type="button">Create an account</button>
        </div>
        
      
      </div>
    </div>
  );
}


export default App;
