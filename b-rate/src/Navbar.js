import { Link, useMatch, useResolvedPath, useLocation} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import logo from './b-rate-logo.png';
import React, { useState, useEffect } from 'react';
import supabase from "./config/supabaseClient"


export default function Navbar() {
    const location = useLocation();

    // Check if the current location matches the login or register page routes
    const isLoginPage = location.pathname === "/Login";
    const isRegisterPage = location.pathname === "/register";
    const isForgotPage = location.pathname === "/forgot";

    const [user, setUser] = useState(null);

    useEffect(() => {
      const session = supabase.auth.getSession();
      setUser(session?.user ?? null);
    }, []);

    const handleSignOut = async () => {
        try {
          await supabase.auth.signOut();
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      };

     useEffect(() => {
    const searchBox = document.getElementById("search-bar");
    const logo = document.getElementsByClassName("submit")[0];
    
    
    const showSearchBar = () => {
        searchBox.classList.add("active");
    };

    const hideSearchBar = () => {
        searchBox.classList.remove("active");
    };

    logo.addEventListener("mouseover", showSearchBar);
    searchBox.addEventListener("mouseover", showSearchBar);
    searchBox.addEventListener("mouseout", hideSearchBar);

    return () => {
        logo.removeEventListener("mouseover", showSearchBar);
        searchBox.removeEventListener("mouseover", showSearchBar);
        searchBox.removeEventListener("mouseout", hideSearchBar);
    };
}, []);
    return (
        <nav className="nav">
            <Link to="/" className="site-title"><GiHamburgerMenu /></Link>

            {!isLoginPage && !isRegisterPage && !isForgotPage && !user && (
                    <ul className = "mainlinks">
                        <CustomLink to="/" className="home">Home </CustomLink>
                        <CustomLink to="/Reviews" className="reviews"> Reviews </CustomLink>
                        <CustomLink to="/" className="logo"><img src={logo} alt="homelogo" className='logo' /></CustomLink>
                        <CustomLink to="/Login" className="login">Login</CustomLink>
                        <CustomLink to="/register" className="register">Register</CustomLink>
                    </ul>
            )}
            {user && (
                <ul className = "mainlinks">
                    <CustomLink to="/" className="home">Home </CustomLink>
                    <CustomLink to="/Reviews" className="reviews"> Reviews </CustomLink>
                    <CustomLink to="/" className="logo"><img src={logo} alt="homelogo" className='logo' /></CustomLink>
                    <CustomLink to="/" className="profile">Profile</CustomLink>
                    <CustomLink onClick={handleSignOut} className="register">Sign Out</CustomLink>
                </ul>                
            )}
            <body>
            <div className = "search" id="search-bar" >
                <input class="search-txt" type="text" placeholder="Search"/>
                <button class="submit"><FaSearch /></button>
            </div>
            </body>

            
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
         
               

    )

 


 
}
