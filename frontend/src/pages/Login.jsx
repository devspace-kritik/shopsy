import React, { useState } from 'react'
import './login.css';

const Login = () => {
  const [currentState,  setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={()=>onSubmitHandler()} className='loginContainer'>
      <div className="loginChildContainer">
        <p className='lsSignUpText prata-regular'>{currentState}</p>
        <hr className='lsLine'/>
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='lsNameInput' placeholder='Name' required/>}
      <input type="email" className='lsNameInput' placeholder='Email' required/>
      <input type="password" className='lsNameInput' placeholder='Password' required/>
      <div className="forgotPassParent">
      <p className="lsForgotPass">Forgot your password?</p>
      {
        currentState === 'Login'
         ? <p onClick={()=>setCurrentState('Sign Up')} className='lsCreateAccountText'>Create Account</p> 
         : <p onClick={()=>setCurrentState('Login')} className='lsCreateAccountText'>Login Here</p>
      }
      </div>
      <button className='lsLoginButton'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login