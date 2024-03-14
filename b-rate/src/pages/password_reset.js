import React, { useState } from 'react';
import './login.css';
import { FaUser, FaLock } from "react-icons/fa";
import myImage from './myImage.jpg';
import Navbar from '../Navbar.js';
import supabase from "../config/supabaseClient.js";
import { useNavigate } from "react-router-dom";


export default function PasswordReset() {
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const [pass2, setPass2] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (newPassword != pass2) {
                throw new Error("Passwords do not match");
            }
            let { data, error } = await supabase.auth.updateUser({
                password: newPassword
            })
            if (error) throw error
            alert("Password changed successfully!");
            var location = window.location();
            location.replace('/'); // Redirect to home page after successful password change
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <Navbar />
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Reset Password</h1>
                    <div className="input-box">
                        <input type="password" placeholder='New Password' onChange={(e) => setNewPassword(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                    <input type="password" placeholder='Confirm Password'
                        onChange={(e) => setPass2(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <button type="submit">Reset</button>
                </form>
                <div>
                    <img src={myImage} alt="My Image" className='resetimage' />
                </div>
            </div>
        </div>
    );
}
