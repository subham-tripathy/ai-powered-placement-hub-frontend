import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="d-flex justify-content-between px-4 py-2 bg-body-secondary">
            <h2 className="d-flex align-items-center">
                <Link href="/" className="text-decoration-none">
                    AI powered placemnet hub
                </Link>
            </h2>
            <ul className="list-unstyled m-0 d-flex gap-3 align-items-center">
                <li><Link className="text-decoration-none" to={"/"}>Home</Link></li>
                <li><Link className="text-decoration-none" to={"/about"}>About</Link></li>
                <li><Link to={"/login"} className="btn btn-primary">Sign In</Link></li>
            </ul>
        </nav>
    )
}