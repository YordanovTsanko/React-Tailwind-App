import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LinearScale, PointElement, LineElement, CategoryScale);

const InlineChart = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ], 
    datasets: [
      {
        label: "Monthly Data",
        data: [65, 59, 80, 81, 56, 55, 10, 60, 90, ], 
        borderColor: "#A855F7", 
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "#A855F7"); 
          gradient.addColorStop(1, "#D4A1F7"); 

          return gradient;
        },
        fill: true, 
        tension: 0.4, 
        borderWidth: 2, 
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
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        grid: {
          color: "#e4e4e4", 
        },
      },
    },
  };

  return (
    <div className="w-full p-5">
      <Line data={data} options={options} />
    </div>
  );
};

export default InlineChart;
