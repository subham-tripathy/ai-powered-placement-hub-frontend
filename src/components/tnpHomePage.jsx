import React, { useState, useEffect } from "react";
import {
  Users,
  Building,
  Calendar,
  TrendingUp,
  FileText,
  Mail,
  Bell,
  Search,
  Filter,
  Plus,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  BarChart3,
  PieChart,
  Target,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function TnPHomePage() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

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

  // Mock data
  const dashboardStats = {
    totalStudents: 1247,
    activeCompanies: 89,
    upcomingDrives: 12,
    placedStudents: 892,
    averagePackage: 6.8,
    placementRate: 71.5,
  };

  const recentActivities = [
    {
      id: 1,
      type: "placement",
      message: "John Doe placed at Google with 25 LPA",
      time: "2 hours ago",
      icon: Award,
    },
    {
      id: 2,
      type: "drive",
      message: "Microsoft campus drive scheduled for Nov 25",
      time: "4 hours ago",
      icon: Calendar,
    },
    {
      id: 3,
      type: "application",
      message: "45 new applications for Amazon drive",
      time: "6 hours ago",
      icon: FileText,
    },
    {
      id: 4,
      type: "company",
      message: "Meta registered for campus recruitment",
      time: "1 day ago",
      icon: Building,
    },
    {
      id: 5,
      type: "interview",
      message: "Final interviews for Goldman Sachs completed",
      time: "2 days ago",
      icon: Users,
    },
  ];

  const upcomingDrives = [
    {
      id: 1,
      company: "Google",
      date: "2024-11-20",
      positions: 15,
      package: "22-35 LPA",
      status: "confirmed",
    },
    {
      id: 2,
      company: "Microsoft",
      date: "2024-11-25",
      positions: 12,
      package: "18-28 LPA",
      status: "pending",
    },
    {
      id: 3,
      company: "Amazon",
      date: "2024-11-30",
      positions: 20,
      package: "15-25 LPA",
      status: "confirmed",
    },
    {
      id: 4,
      company: "Flipkart",
      date: "2024-12-05",
      positions: 8,
      package: "12-20 LPA",
      status: "draft",
    },
  ];

  const quickStats = [
    {
      title: "Total Students",
      value: dashboardStats.totalStudents,
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: isDark ? "from-blue-400 to-blue-600" : "from-blue-500 to-blue-700",
    },
    {
      title: "Active Companies",
      value: dashboardStats.activeCompanies,
      change: "+8.2%",
      trend: "up",
      icon: Building,
      color: isDark
        ? "from-emerald-400 to-emerald-600"
        : "from-emerald-500 to-emerald-700",
    },
    {
      title: "Placement Rate",
      value: `${dashboardStats.placementRate}%`,
      change: "+5.8%",
      trend: "up",
      icon: Target,
      color: isDark
        ? "from-purple-400 to-purple-600"
        : "from-purple-500 to-purple-700",
    },
    {
      title: "Avg Package",
      value: `${dashboardStats.averagePackage} LPA`,
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
      color: isDark
        ? "from-orange-400 to-orange-600"
        : "from-orange-500 to-orange-700",
    },
  ];

  const tabContent = {
    overview: "Overview",
    students: "Students",
    companies: "Companies",
    drives: "Placement Drives",
    reports: "Reports",
    settings: "Settings",
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-lg border-b transition-all duration-300 ${
          isDark
            ? "bg-slate-800/90 border-slate-700"
            : "bg-white/90 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-xl ${
                  isDark
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-gradient-to-r from-blue-600 to-purple-600"
                }`}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  T&P Dashboard
                </h1>
                <p
                  className={`text-sm ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Training & Placement Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div
          className={`mb-8 border-b ${
            isDark ? "border-slate-700" : "border-slate-200"
          }`}
        >
          <nav className="flex space-x-8 overflow-x-auto">
            {Object.entries(tabContent).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 px-2 whitespace-nowrap font-medium text-sm transition-all duration-300 border-b-2 ${
                  activeTab === key
                    ? isDark
                      ? "border-blue-400 text-blue-400"
                      : "border-blue-600 text-blue-600"
                    : isDark
                    ? "border-transparent text-slate-400 hover:text-slate-300"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? "bg-slate-800/50 border border-slate-700/50"
                        : "bg-white/80 border border-white/50"
                    } backdrop-blur-lg shadow-lg hover:shadow-xl`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {stat.title}
                        </p>
                        <p
                          className={`text-3xl font-bold mt-2 ${
                            isDark ? "text-white" : "text-slate-800"
                          }`}
                        >
                          {stat.value}
                        </p>
                        <div className="flex items-center mt-2">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-sm text-green-500 font-medium">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activities */}
              <div
                className={`lg:col-span-2 rounded-2xl p-6 ${
                  isDark
                    ? "bg-slate-800/50 border border-slate-700/50"
                    : "bg-white/80 border border-white/50"
                } backdrop-blur-lg shadow-lg`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-slate-800"
                    }`}
                  >
                    Recent Activities
                  </h3>
                  <button
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isDark
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={activity.id}
                        className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                          isDark
                            ? "hover:bg-slate-700/50"
                            : "hover:bg-slate-50/80"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            activity.type === "placement"
                              ? "bg-green-100 text-green-600"
                              : activity.type === "drive"
                              ? "bg-blue-100 text-blue-600"
                              : activity.type === "application"
                              ? "bg-purple-100 text-purple-600"
                              : activity.type === "company"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p
                            className={`font-medium ${
                              isDark ? "text-white" : "text-slate-800"
                            }`}
                          >
                            {activity.message}
                          </p>
                          <p
                            className={`text-sm mt-1 ${
                              isDark ? "text-slate-400" : "text-slate-600"
                            }`}
                          >
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Upcoming Drives */}
              <div
                className={`rounded-2xl p-6 ${
                  isDark
                    ? "bg-slate-800/50 border border-slate-700/50"
                    : "bg-white/80 border border-white/50"
                } backdrop-blur-lg shadow-lg`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-slate-800"
                    }`}
                  >
                    Upcoming Drives
                  </h3>
                  <button
                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? "bg-blue-500 hover:bg-blue-400"
                        : "bg-blue-600 hover:bg-blue-500"
                    }`}
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="space-y-4">
                  {upcomingDrives.map((drive) => (
                    <div
                      key={drive.id}
                      className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                        isDark
                          ? "border-slate-700 hover:bg-slate-700/30"
                          : "border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-slate-800"
                          }`}
                        >
                          {drive.company}
                        </h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            drive.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : drive.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {drive.status}
                        </span>
                      </div>
                      <p
                        className={`text-sm mb-2 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {new Date(drive.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <div className="flex justify-between text-sm">
                        <span
                          className={
                            isDark ? "text-slate-300" : "text-slate-700"
                          }
                        >
                          {drive.positions} positions
                        </span>
                        <span
                          className={`font-medium ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {drive.package}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-slate-800/50 border border-slate-700/50"
                  : "bg-white/80 border border-white/50"
              } backdrop-blur-lg shadow-lg`}
            >
              <h3
                className={`text-xl font-semibold mb-6 ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Plus, label: "Add Student", color: "blue" },
                  { icon: Building, label: "Register Company", color: "green" },
                  { icon: Calendar, label: "Schedule Drive", color: "purple" },
                  { icon: Download, label: "Export Report", color: "orange" },
                ].map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? "bg-slate-700/50 hover:bg-slate-700"
                          : "bg-slate-50 hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-full mb-3 ${
                          action.color === "blue"
                            ? "bg-blue-100 text-blue-600"
                            : action.color === "green"
                            ? "bg-green-100 text-green-600"
                            : action.color === "purple"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {action.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Other Tab Placeholders */}
        {activeTab !== "overview" && (
          <div
            className={`text-center py-16 rounded-2xl ${
              isDark
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white/80 border border-white/50"
            } backdrop-blur-lg shadow-lg`}
          >
            <div
              className={`text-6xl mb-4 ${
                isDark ? "text-slate-600" : "text-slate-300"
              }`}
            >
              🚧
            </div>
            <h3
              className={`text-2xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-slate-800"
              }`}
            >
              {tabContent[activeTab]} Section
            </h3>
            <p
              className={`text-lg ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              This section is under development
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
