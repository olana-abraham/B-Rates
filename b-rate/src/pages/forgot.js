import React from 'react';
import './forgot.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import myImage from './myImage.jpg';
import Navbar from "../Navbar";

export default function Forgot() {
    return(
        <div>
            <Navbar />
            <div className='wrapper'>
                <form action="">
                    <h1>Forgot Password</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Email' required />
                        <MdEmail className='icon'/>
                    </div>
    
                    <button type="submit" >Send</button>
                </form>
                <div >

            <img src={myImage} alt="My Image" className='image' />
                </div>  
            </div>
        </div>

    )
}