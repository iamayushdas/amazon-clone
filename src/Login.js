import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="amazonlogo"
          />
        </Link>
        <div className="login_container">
          <h1>Sign-In</h1>

          <form action="">
            <h5>E-mail</h5>
            <input type="text" />

            <h5>Password</h5>
            <input type="password" />

            <button className='login_signInButton'>Sign In</button>

            <p>
              * By signing-in you agree to Amazon's clone conditions of use & sale.
              Please see our privacy Notice, our cookies Notice and our
              Interest-Based Ads Notice
            </p>

            <button className='login_registerButton'>Create your Amazon account</button>
          </form>
        </div>
      </div>
    );
}

export default Login
