import React from 'react'
import { Link } from 'react-router-dom'
import './Account_Info_1.css'

export default function Name(){
return( 
    <div>
        <div className="name-wrapper">
            <form action="">
                <h1>Let's get to know you.</h1>

                <h2>Enter first name</h2>

                <div className="name-box">
                    <input required type="text" placeholder='First Name' />
                </div>

                <h2>Enter last name</h2>

                <div className="name-box">
                    <input required type="text" placeholder='Last Name' />
                </div>
                <h2>Enter graduation year</h2>
                <div className="name-box">
                    <input required type="text" placeholder='Graduation year' />
                </div>

            </form>
        </div>
            <button className="next-button"><Link to="/Account_Info_2">Next</Link></button>
        
    </div>
    )
}


