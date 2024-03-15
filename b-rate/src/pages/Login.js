import React from 'react'
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";
import myImage from './myImage.jpg';
import { useEffect, useState } from "react"
import supabase from "../config/supabaseClient.js"
import Navbar from "../Navbar";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: pass
            })
            var location = window.location;
            if (error) throw error
            location.replace("/profile");
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
                    <h1>Welcome Back</h1>
                    <h2>Login to Leave Reviews</h2>
                    <div className="input-box">
                        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' onChange={(e) => setPass(e.target.value)} required />
                        <FaLock className='icon' />

                    </div>

                    <div className="remember-forgot">
                        <Link to="/forgot" > Forgot Password?</Link>

                    </div>

                    <button type="submit">Sign In</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="./register">Register</a></p>
                    </div>

                </form>
                <div >
                    <img src={myImage} alt="My Image" className='loginimage' />
                </div>
            </div>
        </div>



    )
}

export default Login
