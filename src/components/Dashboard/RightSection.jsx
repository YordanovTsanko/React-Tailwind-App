import React, { useState } from "react";
import { Filter } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";  

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels  
);

const DropdownFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Weekly");

  const options = ["30m", "1h", "8h", "Daily", "Weekly", "Yearly"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left font-poppins font-light">
      <button
        onClick={toggleDropdown}
        className="text-primary-dark bg-primary-light hover:bg-primary-dark-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
      >
        <Filter className="w-4 h-4" />
        <span className="ml-2">{selectedOption}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-44 mt-2 bg-white rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const RightSection = () => {
  const data2 = {
    labels: ["Completed", "Pending", "In Progress"],
    datasets: [
      {
        label: "Task Status 2",
        data: [3, 2, 4],
        backgroundColor: ["#A855F7", "red", "#D4A1F7"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
      datalabels: {
        display: true,
        color: "white",
        formatter: function (value) {
          return `${value}`; 
        },
      },
    },
  };

  return (
    <div className="p-5">
      <div className="float-right">
        <DropdownFilter />
      </div>

      <div className="flex flex-col items-center mt-14">
        <div className="w-60 h-60 flex flex-col items-center">
          <h4 className="font-poppins font-light text-lg">This Week</h4>
          <Doughnut data={data2} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
