import React from 'react'
import './login.css'
import { FaUser, FaLock  } from "react-icons/fa";
import myImage from './myImage.jpg';

export default function Login() {
    
    return (
        
        <div className ='wrapper'>
            <form action ="">
                <h1>Welcome Back</h1>
                <h2>Login to Leave Reviews</h2>
                <div className="input-box">
                    <input type ="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>

                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me </label>
                    <a href="">Forgot Password?</a>
        </div>

                <button type="submit">Sign In</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="./register">Register</a></p>

                </div>

            </form>
            
            <div >

          <img src={myImage} alt="My Image" className='image' />
            </div>            
        </div>

         
         
    )  
    
   
           




    
}

