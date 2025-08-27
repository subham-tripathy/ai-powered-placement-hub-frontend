import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export function LogOut() {
    const navigate = useNavigate();
    const user = localStorage.getItem("placementHubUser")
    if (user) {
        localStorage.removeItem("placementHubUser")
    }
    useEffect(() => {
        navigate("/")
    }, [])
    navigate("/")
    return (
        <></>
    )
}