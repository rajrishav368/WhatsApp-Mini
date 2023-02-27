import React from "react";

const sign=()=>{
    return(
        <div classname="hire_employe_signup">
      <div className='hire_employee_back'>
        <button type='button'>back</button>
      </div>
      <div classname="hire-employee_login"> 
        <button type='button'>Log ln</button>
      </div>
      <div className='hire_employee_name'>
        <input type={Text} placeholder="Name"></input>
      </div>
      <div className='hire_employee_company_name'>
        <input type={Text} placeholder="Company Name"></input>
      </div>
      <div className='hire_employee_email'>
        <input type={'email'} placeholder="E-mail"></input>
      </div>
      <div className='hire_employee_password'>
        <input type={'password'} placeholder="Password"></input>
      </div>
      <div className='hire_employee_confirm_password'>
        <input type={'password'} placeholder="Confirm Password"></input>
      </div>
      <div className='hire_employee_characters'>
        <h5>Minimum 8 Characters</h5>
      </div>
      <div className='hire_employee_sign_up'>
        <button type='button'>Sign Up</button>
      </div>
      <div className='hire_employee_continue'>
        <h6>or continue with</h6>
      </div>
      <div className='hire_employee_google'>
        <button type="button">Sign Up with Google</button>
      </div>
    </div>
    )
}
export default sign