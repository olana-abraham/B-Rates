import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import logo from './b-rate-logo.png';
import React, { useState, useEffect } from 'react';
import supabase from "./config/supabaseClient"




let { data: { user } } = await supabase.auth.getUser()
try {
    console.log(user.id)
    user = true;
}
catch (error) {

}
console.log(user)


export default function Navbar() {


    // Check if the current location matches the login or register page routes



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

    function Nav({ }) {


        const location = useLocation();
        const isLoginPage = location.pathname === "/Login";
        const isRegisterPage = location.pathname === "/register";
        const isForgotPage = location.pathname === "/forgot";
        console.log(user)

        const HandleSignOut = async () => {
            var location = window.location;
            try {
                let { error } = await supabase.auth.signOut();
                location.reload();
                if (error) throw error
            } catch (error) {
                alert(error.message);
            }
        };



        if (!isLoginPage && !isRegisterPage && !isForgotPage && !user) {
            return (
                <ul className="mainlinks">
                    <CustomLink to="/" className="home">Home </CustomLink>
                    <CustomLink to="/Reviews" className="reviews"> Reviews </CustomLink>
                    <CustomLink to="/" className="logo"><img src={logo} alt="homelogo" className='logo' /></CustomLink>
                    <CustomLink to="/Login" className="login">Login</CustomLink>
                    <CustomLink to="/register" className="register">Register</CustomLink>
                </ul>
            );
        }
        if (user) {
            return (
                <ul className="mainlinks">
                    <CustomLink to="/" className="home">Home </CustomLink>
                    <CustomLink to="/Reviews" className="reviews"> Reviews </CustomLink>
                    <CustomLink to="/" className="logo"><img src={logo} alt="homelogo" className='logo' /></CustomLink>
                    <CustomLink to="/" className="profile">Profile</CustomLink>
                    <CustomLink onClick={HandleSignOut} className="register">Sign Out</CustomLink>
                </ul>
            );
        }
    }

    return (
        <nav className="nav">
            <Link to="/" className="site-title"><GiHamburgerMenu /></Link>

            <Nav />
            <body>
                <div className="search" id="search-bar" >
                    <input class="search-txt" type="text" placeholder="Search" />
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
