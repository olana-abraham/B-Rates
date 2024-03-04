import React from 'react'
import './Account_Info_1.css'

export default function Name(){
return( 
    <div>
        <div className="name-wrapper">
            <form action="">
                <h1>Let's get to know you.</h1>

                    <h2>Enter your first name</h2>

                    <div className="name-box">
                        <input type="text" placeholder='First Name' required />
                    </div>

                    <h2>Enter your last name</h2>

                    <div className="name-box">
                        <input type="text" placeholder='Last Name' required />
                    </div>
            </form>
        </div>
            <button className="next-button"type="submit">Next</button>  
    </div>
    )
}
