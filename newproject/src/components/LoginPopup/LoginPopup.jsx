import React, { useState } from 'react'
import './LoginPopup.css'
import close from '../../assets/wrong-5.png'
import { useNavigate } from 'react-router-dom'; /* to route to a different website based on the input*/

export default function LoginPopup({setShowLogin}) {

    const [currState, setcurrState] = useState("LogIn")
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation logic (you can replace this with actual backend check)
    if (username === 'john' && role === 'Volunteer' && password === '123') {
      navigate('/Volunteer');
    } else if (username === 'jane' && role === 'Responder' && password === '456') {
      navigate('/Responder');
    } else if (username === 'patient' && role === 'Effceted Person' && password === '789') {
      navigate('/Effected');
    } else if (username === 'admin' && role === 'Government' && password === 'adminpass') {
      navigate('/Governmnet');
    } else {
      alert("Invalid credentials");
    }

    setShowLogin(false);
    };
    

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className='login-popup-title'>
            <h4>{currState}</h4>
            <img onClick={()=>setShowLogin(false) }src={close} alt="" />
        </div>
        <div className='login-popup-input'>
          {currState === "LogIn" ? null : (
            <input
              type="email"
              placeholder='your E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          <input
            type="text"
            placeholder='your User name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            list="roles"
            placeholder="Your Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <datalist id="roles">
            <option value="Volunteer" />
            <option value="Responder" />
            <option value="Effceted Person" />
            <option value="Government" />
          </datalist>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
              </div>
              
              <button>{currState === "SignIn" ? "Create account" : "LogIn"}</button> 
              
        <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By continuing I agree to the terms and policies</p>
        </div>
        {currState==='LogIn'?
        <p>Create a new account
            <span onClick={()=>setcurrState('SignIn')}>Click here </span> 
        </p>:<p>Already have an account
            <span onClick={()=>setcurrState('LogIn')}>Log In </span> 
        </p>
    }
        
        
      </form>
    </div>
  )
}
