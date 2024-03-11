import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import logo from '/Users/deanali/Desktop/CS/CS35L/CS35L Project/B-Rates-3/b-rate/src/b-rate-logo.png';



export default function Navbar() {
    const location = useLocation();

    // Check if the current location matches the login or register page routes
    const isLoginPage = location.pathname === "/Login";
    const isRegisterPage = location.pathname === "/register";
    const isForgotPage = location.pathname == "/forgot";

    return (
        <nav className="nav">
            <Link to="/" className="site-title"><GiHamburgerMenu /></Link>

            {!isLoginPage && !isRegisterPage && !isForgotPage &&(
            <ul className = "mainlinks">
                
                <CustomLink to="/" className="home">Home </CustomLink>
                <CustomLink to="/Reviews" className="reviews"> Reviews </CustomLink>
                <CustomLink to="/" className="logo"><img src={logo} alt="homelogo" className='logo' /></CustomLink>
                <CustomLink to="/Login" className="login">Login</CustomLink>
                <CustomLink to="/register" className="register">Register</CustomLink>
                
            </ul>
            )}
                
                <Link to="/" className="search"><FaSearch /></Link>

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
