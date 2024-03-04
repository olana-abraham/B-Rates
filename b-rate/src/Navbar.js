import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
    const location = useLocation();

    // Check if the current location matches the login or register page routes
    const isLoginPage = location.pathname === "/Login";
    const isRegisterPage = location.pathname === "/register";
    const isForgotPage = location.pathname == "/forgot";

    return (
        <nav className="nav">
            <Link to="/" className="site-title">B-Rate</Link>

            {!isLoginPage && !isRegisterPage && !isForgotPage &&(
                <div className='search'>
                    <input type="text" placeholder='Search Here..' />
                    <button className = 'searchclick'><IoIosSearch className='searchicon' /></button>
                </div>
            )}

            <ul>
                <button className="reviewbutton"><CustomLink to="/Reviews">Reviews</CustomLink></button>
                <button className="loginbutton"> <CustomLink to="/Login">Login</CustomLink></button>
                <button className="register"> <CustomLink to="/register">Register</CustomLink></button>
            </ul>
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
