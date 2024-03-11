import React from 'react'
import './Profile.css'
import Navbar from "../Navbar"


export default function Profile(){
    return(
        <div> 
            <Navbar />
            <div className='name-year'> 
                <h1>FirstName LastName</h1>
                <h2>Graduating 20**</h2>
            </div>
                <body className='profile-body'>
                    <div className="profile-container">
                        <div className='profile-header'>
                            <h2>About</h2>
                            <h3>Favorite Dining Hall</h3>
                            <h4>De Neve</h4>

                        </div>
                        <div className='about'>
                            <p className='about-body'> Hi my name is _____. I am a _____ student and I really enjoy eating meals from _____.</p>
                        </div>
                    </div>
                </body>
        </div>
    )
}


