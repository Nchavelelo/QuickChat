import React from 'react'
import './login.css';
import assets from '../../assets/images/assets'

const login = () => {
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="Chat Logo" className="logo" />
      <form  className="login-form">
      <h2>Sign Up</h2>
        <input type="text" placeholder='username' className="form-input" required />
        <input type="email" placeholder='Email Address' className="form-input" />
        <input type="password" placeholder='password' className="form-input" />
        <button type='submit' >Sign Up</button>
        <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
            <p className="login-toggle">Already have an account <span></span>click here</p>
        </div>

      </form>
    </div>
  )
}

export default login
