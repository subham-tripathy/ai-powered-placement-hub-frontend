import { Link } from "react-router-dom"

export default function HeroSection() {
    return (
        <div className="text-center pt-5">
            <h1>
                Where Student Data
                <br />
                Meets Intelligent Hiring
            </h1>
            <Link to={"/register"} style={{width:"30%"}} className="mt-5 btn btn-primary">Get Started</Link>
        </div>
    )
}