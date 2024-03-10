import React from 'react'
import './Profile.css'
import Navbar from "../Navbar"


export default function Profile(){
    return(
        <div> 
            <Navbar />
            <div className='profile-wrapper'>
                
                <div className="profile-info">
                    <h1>First and Last Name</h1>
                    <h2>Graduating in _ _ _ _</h2>
                </div>
                <div className="profile-about">
                    <h1>Bio:</h1>
                </div>

            </div>
        </div>
    )
}


