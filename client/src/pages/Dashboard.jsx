import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUser } from "../redux/authSlicer";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-800 text-purple-200 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-purple-500 font-bold"><Link to="/">Dashboard</Link></h1>
      {user && (
        <div className="my-2 italic">
          <p>Welcome, {user.username}</p>
        </div>
      )}
      <button
        onClick={handleLogout}
        className="bg-slate-400 text-gray-900 font-semibold px-10 py-2 rounded shadow-md hover:scale-105
         hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
