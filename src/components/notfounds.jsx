import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-44">
      <h1>Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}
