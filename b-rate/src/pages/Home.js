import ImageSlider from '../ImageSlider';
import '../home.css';
import Navbar from "../Navbar";
import homeImage from '../inforgraphicb-rates.png';
import React, { useState, useEffect } from 'react';
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';





export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const session = supabase.auth.getSession();
      setUser(session?.user ?? null);
    }, []);

    return (

        <div>
        <Navbar />


        <div className ="outerhome">

            <div className = "left">

             
                <img src={homeImage} alt="HomeImage" className='image' />
            
           

            </div>

        
        
            <div className = "right">
            <h1>Welcome To B-Rates</h1>
            <h2>Explore campus dining like never before with our community-driven ratings!</h2>
           <p>"Welcome to B-Rate, your ultimate destination for exploring and reviewing the diverse dining options available at UCLA! Whether you're a food enthusiast, a health-conscious eater, or simply looking for the best dining hall experience, we've got you covered."</p>
          <Link to="./Reviews" ><button className = "homebutton1">Read Reviews</button></Link>
            {!user &&(
                 <Link to="./Login" ><button className = "homebutton2">Login</button></Link>
            )}
            {user &&(
                <Link to="./"> <button className = "homebutton2">Profile</button></Link>
            )}
            </div>

                






        </div>
</div>

    )

}
