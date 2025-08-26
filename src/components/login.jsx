import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { backendURL } from "./functions";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("placementHubUser") != null)
      navigate("/")
  }, [])

  const [id, setid] = useState("");
  const [pw, setpw] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id == "") {
      toast.error("Enter ID");
      return;
    }
    if (pw == "") {
      toast.error("Enter Password");
      return;
    }
    fetch(`${backendURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          localStorage.setItem("placementHubUser", data.token);
          toast.success("Logged in successful");
          navigate("/");
        }
      });
  };
  return (
    <form
      style={{ width: "55%" }}
      className="mt-5 border border-2 border-primary shadow form mx-auto text-center p-5 pt-4 rounded"
    >
      <h1 className="text-center underline">Log In</h1>
      <input
        value={id}
        onChange={(e) => {
          setid(e.target.value);
        }}
        type="text"
        className="form-control"
        placeholder="Enter ID:"
      />
      <br />
      <input
        value={pw}
        onChange={(e) => {
          setpw(e.target.value);
        }}
        type="password"
        className="form-control"
        placeholder="Enter Password:"
      />
      <br />
      <div className="d-flex justify-content-between">
        <Link to={"/register"}>Create New Account</Link>
        <Link to={"/forgot-password"}>Forgot Password?</Link>
      </div>
      <br />
      <button
        onClick={handleSubmit}
        style={{ width: "100%" }}
        className="btn btn-primary"
      >
        Login
      </button>
      <br />
    </form>
  );
}
