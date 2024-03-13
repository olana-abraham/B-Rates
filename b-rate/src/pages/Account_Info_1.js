import React from 'react'
import './Account_Info_1.css'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


export default function Name(){
return( 
    <div>
        <div className="name-wrapper">
            <form action="">

                <h1>Let's get to know you.</h1>

                <h2>Enter first and last name</h2>

                <div className="name-box">
                    <input required type="text" placeholder='First Name' />
                </div>

                <h2>Enter graduation year</h2>

                <div className="name-box">
                    <input required type="text" placeholder='Graduation Year' />
                </div>
                <h2>Enter a short biography</h2>
                <div className="name-box">
                    <input required type="text" placeholder='User Bio' />
                </div>

            </form>
        </div>
          <Link to="/account_info_2" > <button className="next-button">Next</button>  </Link>
            
    </div>
    )

   
}


