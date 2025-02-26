import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlignRight, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlicer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <nav className="bg-primary p-4 flex justify-between items-center fixed w-full z-50">
      <a href="/" className="text-white text-xl font-bold font-poppins">
        Advanced Tutorial
      </a>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white md:hidden z-50"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <AlignRight className="w-6 h-6" />
        )}
      </button>

      <div
        className={`absolute top-0 left-0 w-full bg-primary-light shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 py-6 px-4">
          {isAuthenticated && (
            <li>
              <Link
                to="/dashboard"
                className="text-white hover:text-gray-200 block text-lg"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link
              to={isAuthenticated ? "/" : "/login"}
              className="text-white hover:text-gray-200 block text-lg"
              onClick={(e) => {
                if (isAuthenticated) {
                  handleLogout(e);
                }
                setIsOpen(false);
              }}
            >
              {isAuthenticated ? "Logout" : "Sign In"}
            </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex space-x-6">
        {isAuthenticated && (
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </Link>
          </li>
        )}
        <li>
          <Link
            to={isAuthenticated ? "/" : "/login"}
            onClick={isAuthenticated ? handleLogout : undefined}
            className="text-white hover:text-gray-200"
          >
            {isAuthenticated ? "Logout" : "Sign In"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
