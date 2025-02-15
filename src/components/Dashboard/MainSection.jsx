import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InlineChart from "./InlineChart";

const tasksarray = [
  {
    id: 1,
    title: "Task 1",
    description: "Description of Task 1",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description of Task 2",
  },
  {
    id: 3,
    title: "Task 4",
    description: "Description of Task 4",
  },
  {
    id: 4,
    title: "Task 7",
    description: "Description of Task 7",
  },
  {
    id: 5,
    title: "Task 8",
    description: "Description of Task 8",
  },
  {
    id: 6,
    title: "Task 9",
    description: "Description of Task 9",
  },
];


const MainSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <ChevronRight size={20} className="text-primary" style={{ top: "33% !important" }} />
      </div>
    ),
    prevArrow: (
      <div style={{ top: "33%" }}>
        <ChevronLeft size={20} className="text-primary " style={{ top: "33% !important" }}/>
      </div>
    ),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-5">
      <div>
        <h1 className="font-poppins text-2xl mb-4">Pinned Tasks:</h1>
        <div className="w-full px-4">
          <Slider {...settings}>
            {tasksarray.map((task) => (
              <div key={task.id} className="p-2">
                <div
                  className={`bg-primary rounded-md p-4 cursor-pointer`}
                >
                  <h2 className="font-poppins font-semibold text-lg text-secondary-light">
                    {task.title}
                  </h2>
                  <p className="font-poppins text-secondary-light">{task.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <div className="flex align-center gap-2 mt-8">
          <div>
            <h1 className="font-poppins font-light text-xl text-primary-dark mb-4 mt-8">
              {[65, 59, 80, 81, 56, 55, 10, 60, 90].reduce((acc, num) => acc + num, 0)} Completed
            </h1>
            <p>This Year</p>
          </div>

          <div className="border-l-4 border-primary" />

          <div>
            <h1 className="font-poppins font-light text-xl text-primary-dark mb-4 mt-8">
              2 Pending
            </h1>
          </div>
        </div>
        <InlineChart />
      </div>
    </div>
  );
};

export default MainSection;
