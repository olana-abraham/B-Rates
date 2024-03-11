import React from 'react';
import './Register.css';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient.js"

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
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Create Password' 
                        onChange={(e) => setPass1(e.target.value)} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password'
                        onChange={(e) => setPass2(e.target.value)} required />
                </div>
                <button type="submit" ><a href='./Account_Info_1'>Register</a></button>
            </form>
        </div>
    )
}

export default Register