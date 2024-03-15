import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import logo from './b-rate-logo.png';
import React, { useState, useEffect } from 'react';
import supabase from "./config/supabaseClient"
import { useNavigate } from "react-router-dom"



let { data: { user } } = await supabase.auth.getUser()
try {
    console.log(user.id)
    user = true;
}
catch (error) {

}
console.log(user)


export default function Navbar() {

    const location = useLocation();
    const [username, setusername]  = useState('')
    const[otherUser, setotherUser] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user) {
            alert("Please log in to search")
            return
        }
        if(!username)
        {
            alert("Enter a username to search for a user's profile")
            return
        }
        fetchUser()
    }

    const fetchUser = async (e) => {
        const {data, error} = await supabase
            .from('Users')
            .select()
            .eq('username', username)
        if(error)
        {
            alert("Could not fetch user's profile")
        }
        if(data.length==0)
        {
            alert("User does not exist")
        }
        if(data)
        {
            setotherUser(data)
            navigate("/Profile", { state: { otherUser: data } }) 
        }
    }


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
        const isPasswordReset = location.pathname === "/password_reset";
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



        if (!isLoginPage && !isRegisterPage && !isForgotPage && !isPasswordReset && !user) {
            return (
                <ul className="mainlinks">
                    <CustomLink to="/" className="home">Home </CustomLink>
                    <CustomLink to="/Reviews" className="reviews"> Reviews </CustomLink>
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
                    <CustomLink to="/profile" className="profile">Profile</CustomLink>
                    <CustomLink onClick={HandleSignOut} className="register">Sign Out</CustomLink>
                </ul>
            );
        }
    }


    return (
        <nav className="nav">
            <Link to="/" className="logo"><img src={logo} alt="homelogo" className='logo' /></Link>


            <Nav />
            <body>
            <div className = "search" id="search-bar" >
                <input class="search-txt" type="text" placeholder="Search" value = {username}
          onChange={(e) => setusername(e.target.value)}/>
                <button class="submit" onClick={handleSubmit}><FaSearch /></button>
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