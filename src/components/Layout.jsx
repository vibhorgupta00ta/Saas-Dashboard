import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkStyle = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <div className="flex min-h-screen bg-[#0B1120] text-white">

      {/* SIDEBAR */}
      <aside className="w-60 bg-[#111827] border-r border-gray-800 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-12">SaaS</h2>

        <nav className="space-y-2">
          <Link to="/dashboard" className={linkStyle("/dashboard")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link to="/users" className={linkStyle("/users")}>
            <Users size={18} />
            Users
          </Link>

          <Link to="/settings" className={linkStyle("/settings")}>
            <Settings size={18} />
            Settings
          </Link>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* TOP HEADER */}
        <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800 bg-[#0F172A]">
          <h1 className="text-xl font-semibold">
            {location.pathname.replace("/", "").toUpperCase()}
          </h1>

          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            className="flex items-center gap-2 text-red-400 hover:text-red-500 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-10">{children}</main>
      </div>
    </div>
  );
}
