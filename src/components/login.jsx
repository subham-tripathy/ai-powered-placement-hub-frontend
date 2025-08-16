import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [id, setid] = useState("");
  const [pw, setpw] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    if (id == "") {
      toast.error("Enter ID");
      return;
    }
    if (pw == "") {
      toast.error("Enter Password");
      return;
    }
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
