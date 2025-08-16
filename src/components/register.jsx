import { useState } from "react";
import { createCookie, Link, useNavigate } from "react-router-dom";
import { backendURL } from "./functions";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(companyName, companyId, companyEmail, password);
    if (!companyName || !companyId || !companyEmail || !password)
      return toast.error("Please fill all the fields");
    const response = await fetch(`${backendURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: companyId,
        name: companyName,
        email: companyEmail,
        pw: password,
      }),
    });
    const data = await response.json();
    createCookie("token", data.token, 1);
    if (data.status == "success") {
      toast.success("Company registered successfully");
      navigate("/");
    }
  };
  return (
    <div>
      <>
        <form
          style={{ width: "55%" }}
          className="mt-5 border border-2 border-primary shadow form mx-auto text-center p-5 pt-4 rounded"
        >
          <h1 className="text-center underline">Company Sign Up</h1>
          <input
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Company Name:"
          />
          <br />
          <input
            name="companyId"
            value={companyId}
            type="text"
            onChange={(e) => setCompanyId(e.target.value)}
            className="form-control"
            placeholder="Enter Company ID:"
          />
          <br />
          <input
            name="companyEmail"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Company Email:"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter Password:"
          />
          <br />
          <div className="d-flex justify-content-between">
            <Link to={"/login"}>Already have an account?</Link>
          </div>
          <br />
          <button
            onClick={handleSubmit}
            style={{ width: "100%" }}
            className="btn btn-primary"
          >
            Register
          </button>
          <br />
        </form>
      </>
    </div>
  );
}
