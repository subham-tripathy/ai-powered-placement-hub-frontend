import { Link } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"

export default function NavBar() {
    const [userName, setUserName] = useState(null)
    const load = () => {
        const token = localStorage.getItem("placementHubUser")
        if (token) {
            setUserName(token)
        }
    }
    useEffect(() => {
        window.addEventListener("storage", load)
    }, [])
    return (
        <nav className="d-flex justify-content-between px-4 py-2 bg-body-secondary">
            <h2 className="d-flex align-items-center">
                <Link to="/" className="text-decoration-none">
                    AI powered placemnet hub
                </Link>
            </h2>
            {userName != null ? (
                <ul className="list-unstyled m-0 d-flex gap-3 align-items-center">
                    <li><Link className="text-decoration-none" to={"/"}>Home</Link></li>
                    <li><Link className="text-decoration-none" to={"/about"}>About</Link></li>
                    <li><Link to={"/myprofile"} className="btn btn-primary">{userName}</Link></li>
                    <li><Link to={"/logout"} className="btn btn-primary">Logout</Link></li>
                </ul>
            ) : (
                <ul className="list-unstyled m-0 d-flex gap-3 align-items-center">
                    <li><Link className="text-decoration-none" to={"/"}>Home</Link></li>
                    <li><Link className="text-decoration-none" to={"/about"}>About</Link></li>
                    <li><Link to={"/login"} className="btn btn-primary">Sign In</Link></li>
                </ul>
            )}
        </nav>
    )
}