import React from 'react';
import { useState } from 'react';
import './forgot.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import myImage from './myImage.jpg';
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import supabase from "../config/supabaseClient.js"; // Import your Supabase client


export default function Forgot() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: "http://localhost:3000/password_reset"
            });
            if (error) throw error
            alert('Password reset email sent. Please check your inbox.');
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div>
            <Navbar />
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Email' value={email}
                            onChange={(e) => setEmail(e.target.value)}required />
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