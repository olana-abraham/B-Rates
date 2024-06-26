import React from 'react';
import './Register.css';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient.js"
import myImage from './myImage.jpg';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "../Navbar";
import Footer from "./Footer";



const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const navigate = useNavigate()

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
                    data: { username: username },
                    emailRedirectTo: "http://localhost:3000/account_info_1",
                }
            })
            if (error) throw error
            alert("Check your email for verification link")
            //logged = true;
        }
        catch (error) {
            alert(error)
        }
    }



    return (
        <div>

            <Navbar />
            <div className='wrapper-register'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="input-box-register">
                        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box-register">
                        <input type="text" placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)} required />
                        <MdEmail className='icon' />
                    </div>
                    <div className="input-box-register">
                        <input type="password" placeholder='Create Password'
                            onChange={(e) => setPass1(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box-register">
                        <input type="password" placeholder='Confirm Password'
                            onChange={(e) => setPass2(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>

                    {/*If we want to link the register button to the survey, then uncomment the link portion of code*/}

                    {/*<Link to="/account_info_1" >*/}<button type="submit"  onclick={handleSubmit}>Register</button>{/*</Link>*/}

                </form>
                <div >

                    <img src={myImage} alt="My Image" className='image-register' />
                </div>
            </div>
        </div>
    )
}

export default Register