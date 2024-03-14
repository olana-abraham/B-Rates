import React from 'react'
import './Account_Info_1.css'
import { useLocation } from 'react-router-dom';
import supabase from "../config/supabaseClient.js"

import { useNavigate } from "react-router-dom"
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
    const location = useLocation();
    const username = location.state && location.state.username;
    const email = location.state && location.state.email;
    const passwrd = location.state && location.state.password;
    console.log(username)

    return (
        <div>
            <div className="name-wrapper">
                <form action="">

                    <h1>Let's get to know you.</h1>

                    <br />

                    <h2 className='h2-info2'>Enter first and last name</h2>

                    <div className="name-box">
                        <input required type="text" placeholder='First Name' />
                    </div>

                    <br />

                    <h2 className='h2-info2'>Enter graduation year</h2>

                    <div className="name-box">
                        <input required type="text" placeholder='Graduation Year' />
                    </div>

                    <br />

                    <h2 className='h2-info2'>Enter a short biography</h2>
                    <div className="name-box">
                        <input required type="text" placeholder='User Bio' />
                    </div>

                </form>
            </div>
            <Link to="/account_info_2" > <button className="next-button">Next</button>  </Link>

        </div>
    )


}


