import React, { useState } from 'react'

import "./SignUp.css"
import user_icon from '../assets/user.png';
import email_icon from '../assets/envelope.png';
import password_icon from '../assets/lock.png';

import {LoginSocialGoogle} from 'reactjs-social-login';

import {FaGoogle} from "react-icons/fa";

const SignUp = () => {
 const [action, setAction]=useState("Login");



  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
<div className='inputs'>
  {action==="Login"?<div></div>:<div className='input'>
<img src={user_icon} alt="" />
<input type='text'placeholder='User Name'/>
</div>}

<div className='input'>
<img src={email_icon} alt="" />
<input type='email' placeholder='Email'/>
</div>
<div className='input'>
<img src={password_icon} alt="" />
<input type='password' placeholder='Password'/>
</div>
</div>
{action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
<div className='submit-container'>
<div className={action==="Login"?"submit gray":"submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
<div className={action==="Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>

</div>
<div className="googlein">
<LoginSocialGoogle
client_id='246134899901-s0noknjbur5tbqk1u540r7174nrvc7bo.apps.googleusercontent.com'
access_type='offline'
onResolve={({provider, data}) =>{
console.log(provider, data)
}}
onReject={(err)=>{
  console.log(err)
}}
>
 <FaGoogle className='text-orange-600 w-10 h-8' />
</LoginSocialGoogle>
</div>
</div>
  )
}

export default SignUp
