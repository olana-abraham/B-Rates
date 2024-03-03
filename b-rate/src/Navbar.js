import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">B-Rate</Link>
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