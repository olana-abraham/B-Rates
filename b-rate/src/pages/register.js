import React from 'react';
import './Register.css';
import {useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Register = () => {
    const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')


async function handleSubmit(e){
    e.preventDefault()
    try{
    // if (pass1 != pass2) {
    //     throw new Error("Passwords do not matcSh");
    // }
        const { data, error } = await supabase.auth.signUp({
        email: "ndamtew10@g.ucla.edu",
        password: "typeshit",
        options: {
            data: { username: "natiye", }
     }
    })
    if(error) throw error
      alert("Check your email for verification link")
    } 
    catch(error)
    {
    alert(error)
    }
    }

    return(
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email'  value={email} 
                        onChange={(e) => setEmail(e.target.value)}required/>
                        console.log(e.target.value)
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Create Password' value={pass1} 
                        onChange={(e) => setPass1(e.target.value)} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password'  value={pass2} 
                        onChange={(e) => setPass2(e.target.value)} required />
                </div>
                <button type="submit" >Register</button>
            </form>
        </div>
    )
}

export default Register