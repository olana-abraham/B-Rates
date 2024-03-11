import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { IoIosSearch } from "react-icons/io";


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">B-Rate</Link>

            <div className = 'search'>
                <input type="text" placeholder='Search Here..'/>
                <IoIosSearch className='icon'/>
                

            </div>

            <ul>
            <button className="reviewbutton"><CustomLink to ="/Reviews">Reviews</CustomLink></button>
              <button className = "loginbutton"> <CustomLink to="/Login">Login</CustomLink></button>
              <button className = "register"> <CustomLink to="/register">Register</CustomLink></button>
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