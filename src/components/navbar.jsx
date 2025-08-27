import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function NavBar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setInterval(() => {
      const storedUser = localStorage.getItem("placementHubUser");
      if (storedUser) {
        setUser(storedUser);
      }
    }, 500);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("placementHubUser");
    setUser(null);
  };

  return (
    <nav className="d-flex justify-content-between px-4 py-2 bg-body-secondary">
      <h2 className="d-flex align-items-center">
        <Link to="/" className="text-decoration-none">
          AI powered placement hub
        </Link>
      </h2>

      <ul className="list-unstyled m-0 d-flex gap-3 align-items-center">
        <li>
          <Link className="text-decoration-none" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" to={"/about"}>
            About
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <Link to={"/myprofile"} className="btn btn-primary">
                {jwtDecode(user).name}
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to={"/login"} className="btn btn-primary">
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
