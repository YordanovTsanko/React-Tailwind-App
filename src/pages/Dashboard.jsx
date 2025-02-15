import React from "react";
import Navigation from "../components/Dashboard/Navigation";
import Header from "../components/Dashboard/Header";
import MainSection from "../components/Dashboard/MainSection";
import RightSection from "../components/Dashboard/RightSection";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="bg-gray-900 col-start-1 col-end-4">
        <Navigation />
      </div>

      <div className="grid grid-cols-1 grid-rows-10 col-start-4 col-end-11">
        <div className="p-3 row-span-1 pt-5">
          <Header />
        </div>

        <div className="row-span-10">
          <div className="grid grid-cols-3">
            <div className="col-span-2"><MainSection /></div>

            <div><RightSection /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
