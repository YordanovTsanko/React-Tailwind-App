import { Link, useLocation } from "react-router-dom";
import React from "react";
import { LayoutDashboard, ListChecks, LogOut } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="h-screen  text-white font-poppins w-full flex flex-col items-center py-8">
      <Link
        to="/"
        className="text-3xl font-semibold mb-10 hover:text-primary transition"
      >
        React Tailwind <span className="text-primary">App</span>
      </Link>

      <ul className="space-y-6 w-full px-6">
        <li>
          <Link
            to={path === "/dashboard" ? "#" : "/dashboard"}
            onClick={(e) =>
              path === "/dashboard" && e.preventDefault()
            }
            className={`flex items-center space-x-3 text-lg transition ${
              path === "/dashboard"
                ? "text-primary cursor-not-allowed"
                : "hover:text-primary"
            }`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link
            to={
              path === "/dashboard/tasks"
                ? "#"
                : "/dashboard/tasks"
            }
            onClick={(e) =>
              path === "/dashboard/tasks" && e.preventDefault()
            }
            className={`flex items-center space-x-3 text-lg transition ${
              path === "/dashboard/tasks"
                ? "text-primary cursor-not-allowed"
                : "hover:text-primary"
            }`}
          >
            <ListChecks size={20} />
            <span>Tasks</span>
          </Link>
        </li>

        <li>
          <button className="flex items-center space-x-3 text-lg bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition w-full">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
