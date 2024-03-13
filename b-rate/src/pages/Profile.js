import React, { useState } from 'react'
import './Profile.css'
import Navbar from "../Navbar"

// The backend should update the following fields: firstName, lastName, gradYear, favoriteDiningHall, about

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Tre');
  const [lastName, setLastName] = useState('Bradshaw');
  const [gradYear, setGradYear] = useState('2026');
  const [favoriteDiningHall, setFavoriteDiningHall] = useState('De Neve');
  const [about, setAbout] = useState('My name is Tre and I got a basketball game tomorrow.');

  const handleEditClick = () => {
    setIsEditing(true);
  };


  const handleSaveClick = () => {
    // The tutorial was saying to send an API request to save the changes to our backend
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

