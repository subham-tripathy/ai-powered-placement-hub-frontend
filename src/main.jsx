import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/notfounds.jsx";
import Register from "./components/register.jsx";
import "./assets/bootstrap-5.3.7-dist/js/bootstrap.bundle.min";
import Home from "./components/home.jsx";
import SearchStudent from "./components/companySearchStudent.jsx";
import SearchStudentResult from "./components/companySearchStudentResult.jsx";
import ForgetPW from "./components/forgotpw.jsx";
import CompanyHomePage from "./components/companyhomepage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <ToastContainer />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/companyhome" element={<CompanyHomePage />} />
      <Route path="/company/searchStudent" element={<SearchStudent />} />
      <Route path="/company/searchStudentResult" element={<SearchStudentResult />} />
      <Route path="/forgot-password" element={<ForgetPW />} />
      <Route
        path="/company/searchStudentResult"
        element={<SearchStudentResult />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
