import React, { useState } from 'react'
import './login.css';
import assets from '../../assets/images/assets'

const login = () => {
 const [currState,setCurrState] = useState("Sign Up")

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="Chat Logo" className="logo" />
      <form  className="login-form">
      <h2>{currState}</h2>
        {currState === "Sign Up"?<input type="text" placeholder='Username' className="form-input" required />:null}
        <input type="email" placeholder='Email Address' className="form-input" required />
        <input type="password" placeholder='Password' className="form-input" required/>
        <button type='submit' >{currState === "Sign Up"?"Create Account":"Login Now"}</button>
        <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
            {
                currState === "Sign Up"
                ?<p className="login-toggle">Already have an account <span onClick={() => setCurrState("Login")}>click here</span></p>
                :<p className="login-toggle">Create an account<span onClick={() => setCurrState("Sign Up")}>click here</span></p>        
            }
            
            
        </div>

      </form>
    </div>
  )
}

export default login
