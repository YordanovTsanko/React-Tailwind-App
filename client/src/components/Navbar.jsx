import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlignRight, X } from "lucide-react";

const Navbar = ({ loading, loggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register";

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
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  return (
    <nav className="bg-primary p-4 flex justify-between items-center fixed w-full z-50">
      <a href="/" className="text-white text-xl font-bold font-poppins">
      Advanced Tutorial
      </a>

      {!isLoginPage && (
        <>
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
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <ul className="flex flex-col space-y-2 py-6 px-4">
              <li>
                <Link
                  to={loggedIn === "true" ? "/" : "/login"}
                  className="text-white hover:text-gray-200 block text-lg"
                  onClick={(e) => {
                    if (!loading && loggedIn === "true") {
                      handleLogout(e);
                    }
                    setIsOpen(false); 
                  }}
                >
                  {!loading && loggedIn === "true" ? "Logout" : "Sign In"}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {!isLoginPage && (
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/login"
              onClick={
                !loading && loggedIn === "true" ? handleLogout : undefined
              }
              className="text-white hover:text-gray-200"
            >
              {!loading && loggedIn === "true" ? "Logout" : "Sign In"}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
