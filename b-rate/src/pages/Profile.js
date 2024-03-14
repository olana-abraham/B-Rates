import React from 'react'
import './Profile.css'
import Navbar from "../Navbar"
import { useLocation } from 'react-router-dom';
import supabase from "../config/supabaseClient.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [favoriteDiningHall, setFavoriteDiningHall] = useState('');
  const [about, setAbout] = useState('');
  const location = useLocation();
  const otherUser = location.state && location.state.otherUser;
    

  const handleEditClick = () => {
    setIsEditing(true);
  };

const fetchUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase
  .from('Users')
  .select()
  .eq('UID', user.id);

    if (error) {
        console.error('Error fetching user:', error.message);
      }
      if(otherUser) searchUser();
      if (!otherUser && data) {
       setFirstName(data[0].Name.split(" ")[0])
       setFavoriteDiningHall(data[0].Fav_Dining)
       setLastName(data[0].Name.split(" ")[1])
       setGradYear(data[0].Grad_year)
       setAbout(data[0].AboutMe)
      } else {
        console.log('User not found.');
      }
    
}
  function searchUser()
  {
    if(otherUser)
    {
      setFirstName(otherUser[0].Name.split(" ")[0])
       setFavoriteDiningHall(otherUser[0].Fav_Dining)
       setLastName(otherUser[0].Name.split(" ")[1])
       setGradYear(otherUser[0].Grad_year)
       setAbout(otherUser[0].AboutMe)
    }
  }
useEffect(() => {
  fetchUser();
}, []);


  const handleSaveClick = () => {

    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />
      <div className='name-year'>
        {isEditing ? (
          <div>
            <input
              type="text"
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text" 
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder='Graduation Year'
              value={gradYear}
              onChange={(e) => setGradYear(e.target.value)}
            />
            <button className='edit-save'onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div>
            <h1>{`${firstName} ${lastName}`}</h1>
            <h2>Graduating {gradYear}</h2>
            <button className='edit-save' onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
      <div className="profile-container">
        <div className='profile-header'>
          <h2>About</h2>
          <br />
          <h3>Favorite Dining Hall</h3>
          {isEditing ? (
            <input
              type="text"
              placeholder='Dining Hall'
              value={favoriteDiningHall}
              onChange={(e) => setFavoriteDiningHall(e.target.value)}
            />
          ) : (
            <h4>{favoriteDiningHall}</h4>
          )}
          <br />
        </div>
        <div className='about'>
          {isEditing ? (
            <textarea
              value={about}
              placeholder='Bio'
              onChange={(e) => setAbout(e.target.value)}
            />
          ) : (
            <p className='about-body'>{about}</p>
          )}
        </div>
      </div>
    </div>
  );
}

