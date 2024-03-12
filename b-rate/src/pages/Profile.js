import React from 'react'
import './Profile.css'
import Navbar from "../Navbar"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


import { useLocation } from 'react-router-dom';


export default function Profile(){
    const location = useLocation();
    const otherUser = location.state && location.state.otherUser;

    // const registerUser = async () => {
    //     const { data: { user } } = await supabase.auth.getUser()
    //     const{data: {user}} = await supabase.auth
    //     const { data, error } = await supabase
    //     .from('Users')
    //     .insert([
    //       { 
    //           UID: user.id,
    //           Dining: Dining,
    //           Review: Review,
    //           UID: user.id,
    //           Name: Name,
    //       }
    //   ]);
    // }
    //console.log(otherUser)
    

    return(
        <div> 
            <Navbar />
            { otherUser && (
        <div>
        {otherUser.map((user) => (
          <textarea
            value={`${user.Name}`}
           
            // Add created_at if needed
            rows={50} // Set the number of rows as per your requirement
            cols={50} // Set the number of columns as per your requirement
            readOnly // Make the textarea read-only
          />
        ))}
      </div>
      )}
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


