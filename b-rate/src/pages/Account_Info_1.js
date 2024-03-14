import './Account_Info_1.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Name(){
  const [firstAndLastName, setFirstAndLastName] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [userBio, setUserBio] = useState('');

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
          <Link to="/account_info_2" ><button type="submit" className="next-button">Next</button></Link> {/* Change button type to submit */}
      </div>
    </div>
  );   
}




