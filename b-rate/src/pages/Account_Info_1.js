import './Account_Info_1.css'
import { useLocation } from 'react-router-dom';
import supabase from "../config/supabaseClient.js"

import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


let { data: { user } } = await supabase.auth.getUser()
try {
    const { data, error } = await supabase
        .from('Users')
        .insert([
            { UID: user.id, username: user.user_metadata.username },
        ])
        .select()
}
catch { }


export default function Name() {
    const [firstAndLastName, setFirstAndLastName] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [userBio, setUserBio] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        let { data: { user } } = await supabase.auth.getUser()
        try {
            const { data, error } = await supabase
                .from('Users')
                .update([
                    { Name: firstAndLastName, AboutMe: userBio, Grad_year: graduationYear },
                ])
                .eq('UID', user.id)
            
            var location = window.location;
            location.replace("/account_info_2")
        }
        catch { }
    }

    return (
        <div>
            <div className="name-wrapper">
                <h1>Let's get to know you.</h1>
                <br />
                <h2 className='h2-info2'>Enter first and last name</h2>
                <div className="profile-box">
                    <input
                        required
                        type="text"
                        placeholder='First and Last Name'
                        value={firstAndLastName}
                        onChange={(e) => setFirstAndLastName(e.target.value)}
                    />
                </div>
                <br />
                <h2 className='h2-info2'>Enter graduation year</h2>
                <div className="profile-box">
                    <input
                        required
                        type="text"
                        placeholder='Graduation Year'
                        value={graduationYear}
                        onChange={(e) => setGraduationYear(e.target.value)}
                    />
                </div>
                <br />
                <h2 className='h2-info2'>Enter a short biography</h2>
                <div className="profile-box">
                    <input
                        required
                        type="text"
                        placeholder='User Bio'
                        value={userBio}
                        onChange={(e) => setUserBio(e.target.value)}
                    />
                </div>
                <br />
                <button type="submit" className="next-button" onClick={handleSubmit}>Next</button> {/* Change button type to submit */}
            </div>
        </div>
    );
}