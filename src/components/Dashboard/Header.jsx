import React from "react";
import { BellRing,Search } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-full">
      <div className="flex align-center justify-between px-5">
        <div class="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            class="w-full py-3 px-6 pl-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-primary transition duration-200"
          />
          <Search size={20} className="absolute top-4 left-3 text-gray-400"/>
        </div>
        <div className="flex align-center gap-3">
          <div className="flex relative items-center hover:bg-gray-200 rounded-full p-2 cursor-pointer">
            <BellRing size={30} className="text-primary-dark"/>
            <p className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              3
            </p>
          </div>
          <div className="w-auto h-full flex justify-center items-center overflow-hidden cursor-pointer">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Profile"
              className="w-14 h-14 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
