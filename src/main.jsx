import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/notfounds.jsx";
import Register from "./components/register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <ToastContainer />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
