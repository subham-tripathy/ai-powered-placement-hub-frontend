import { useState, useEffect } from "react";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { backendURL } from "./functions";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("placementHubUser") != null) navigate("/");
  }, []);

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

  const [showPassword, setShowPassword] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  // Detect system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-20 w-32 h-32 rounded-full opacity-10 animate-pulse ${
            isDark ? "bg-blue-400" : "bg-blue-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-15 animate-bounce ${
            isDark ? "bg-purple-400" : "bg-indigo-400"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-10 w-16 h-16 rounded-full opacity-20 animate-pulse ${
            isDark ? "bg-cyan-400" : "bg-purple-400"
          }`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Login Form Container */}
      <div
        className={`relative w-full max-w-md mx-auto transition-all duration-500 ${
          isDark
            ? "bg-slate-800/90 border-slate-600/50"
            : "bg-white/90 border-white/20"
        } backdrop-blur-lg rounded-2xl shadow-2xl border p-8`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              isDark
                ? "bg-gradient-to-r from-blue-500 to-purple-600"
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
          >
            <User className="w-8 h-8 text-white" />
          </div>
          <h1
            className={`text-3xl font-bold mb-2 ${
              isDark ? "text-white" : "text-slate-800"
            }`}
          >
            Welcome Back
          </h1>
          <p
            className={`text-sm ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* ID Input */}
          <div className="space-y-2">
            <label
              className={`block text-sm font-medium ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Student ID / Email
            </label>
            <div className="relative">
              <div
                className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                  focusedField === "id"
                    ? isDark
                      ? "text-blue-400"
                      : "text-blue-600"
                    : isDark
                    ? "text-slate-500"
                    : "text-slate-400"
                }`}
              >
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={id}
                onChange={(e) => setid(e.target.value)}
                onFocus={() => setFocusedField("id")}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-10 pr-4 py-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 focus:bg-slate-700"
                    : "bg-white/80 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:bg-white"
                } border-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="Enter your ID or email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              className={`block text-sm font-medium ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Password
            </label>
            <div className="relative">
              <div
                className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                  focusedField === "password"
                    ? isDark
                      ? "text-blue-400"
                      : "text-blue-600"
                    : isDark
                    ? "text-slate-500"
                    : "text-slate-400"
                }`}
              >
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={pw}
                onChange={(e) => setpw(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-10 pr-12 py-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 focus:bg-slate-700"
                    : "bg-white/80 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:bg-white"
                } border-2 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                  isDark
                    ? "text-slate-400 hover:text-slate-300"
                    : "text-slate-500 hover:text-slate-600"
                } transition-colors duration-200`}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center justify-between text-sm">
            <Link
              to={"/register"}
              className={`font-medium transition-colors duration-200 ${
                isDark
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-700"
              }`}
            >
              Create New Account
            </Link>
            <button
              type="button"
              className={`font-medium transition-colors duration-200 ${
                isDark
                  ? "text-slate-400 hover:text-slate-300"
                  : "text-slate-600 hover:text-slate-700"
              }`}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-70 ${
              isDark
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
            } shadow-lg hover:shadow-xl disabled:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-ping ${
            isDark ? "bg-blue-400" : "bg-blue-500"
          }`}
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className={`absolute top-3/4 right-1/4 w-2 h-2 rounded-full animate-ping ${
            isDark ? "bg-purple-400" : "bg-purple-500"
          }`}
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className={`absolute top-1/2 right-1/3 w-1 h-1 rounded-full animate-ping ${
            isDark ? "bg-cyan-400" : "bg-indigo-500"
          }`}
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </div>
  );
}
