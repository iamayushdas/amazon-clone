import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

import './Login.css'
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //  it succesfully created a new user with email and password
      console.log(auth);
      if(auth){
        history.push('/')
      }
    })
    .catch(error => alert(error.message))
  }
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
            <input type="text" value={email} onChange={
              e => setEmail(e.target.value)
            } />

            <h5>Password</h5>
            <input type="password" value={password} onChange={
              e => setPassword(e.target.value)
            }/>

            <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>

            <p>
              * By signing-in you agree to Amazon's clone conditions of use & sale.
              Please see our privacy Notice, our cookies Notice and our
              Interest-Based Ads Notice
            </p>

            <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
          </form>
        </div>
      </div>
    );
}

export default Login
