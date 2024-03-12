import React from 'react';
import './Register.css';
import Navbar from '../Navbar.js';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient.js"
import myImage from './myImage.jpg';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (pass1 != pass2) {
                throw new Error("Passwords do not match");
            }
            let { data, error } = await supabase.auth.signUp({
                email: email,
                password: pass1,
                options: {
                    data: { username: username }
                }
            })
            if (error) throw error
            alert("Check your email for verification link")
        }
        catch (error) {
            alert(error)
        }
    }

    return (
        <div>

        <Navbar />
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                     <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} required />
                        <MdEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Create Password' 
                        onChange={(e) => setPass1(e.target.value)} required />
                        <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password'
                        onChange={(e) => setPass2(e.target.value)} required />
                        <FaLock className='icon' />
                </div>
                <Link to="/account_info_1" ><button type="submit">Register</button></Link>
           
            </form>
            <div >

            <img src={myImage} alt="My Image" className='image' />
            </div>
        </div>
        </div>
    )
}

export default Register