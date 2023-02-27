import './App.css';
import png from '../../rishav/src/sign up/back-btn.png';
import logo from '../../rishav/src/sign up/logo.png';
import google from '../../rishav/src/sign up/google.png';

const app=()=>{
    return(
        <div className='hire_employee_'>

      <div className='hire_employee_background'>
        <div className='hire_employee_logo'>
          <img src={logo} alt=''></img>
        </div>
        <div className='hire_employee_signup'>
          <h2>Sign up as an</h2>
        </div>
        <div className='hire_employee_employeer'>
          <h2>Employeer</h2>
        </div>
      </div>
    
      <div className='hire_employee_documents'>

        <div className='hire_employee_back'>
          <button type="button"><img src={png} alt =''/>Back</button>
        </div>
        <div className='hire_employee_name'>
          <input type="name" placeholder="Name"></input>
          <input type="company" placeholder="Company Name"></input>
          <input type="E_mail" placeholder="E-mail"></input>
          <input type={'password'} placeholder="Password"></input>
          <input type={'password'} placeholder="Confirm Password"></input>
        </div>
        <div className='hire_employee_sign_up'>
          <button type='button'>Sign Up</button>
        </div>
        <div className='hire_employee_continue'>
          <h6>or</h6>
        </div>
        <div className='hire_employee_google'>
        <button type="button"><img src={google} />Sign Up with Google</button>
        </div>
      </div>
    </div>
    )
}