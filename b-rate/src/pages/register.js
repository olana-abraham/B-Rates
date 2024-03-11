

import React from 'react';
import './Register.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import myImage from './myImage.jpg';


export default function Register() {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email' required/>
                    <MdEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Create Password' required />
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' required />
                    <FaLock className='icon'/>
                </div>
                <button type="submit" ><a href='./Account_Info_1'>Register</a></button>
            </form>
             <div >

          <img src={myImage} alt="My Image" className='image' />
            </div>  
        </div>
    )
}