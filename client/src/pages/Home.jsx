import React, { useEffect } from "react";
import Container from "../components/Container";
import axiosInstance from "../utils/axiosInstance";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await axios.get("/");
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    checkServer();

  }, []); 


  return (
    <Container>
      <div className="grid md:grid-cols-2 px-10 relative gap-10 md:gap-0 md:mt-32">
        <div
          className="flex flex-col items-start lg:ps-36 justify-center gap-3
      text-red-100 font-bold text-start mt-28 md:mt-0"
        >
          <p className=" drop-shadow-md  text-6xl text-primary-dark font-poppins font-medium">
            Axios Setup with Cookies
          </p>
          <p className=" drop-shadow-lg text-4xl my-3 text-secondary-light font-poppins font-light">
            Developed by Tsanko Yordanov
          </p>
          <button
            className="bg-primary-dark drop-shadow-md text-white text-lg tracking-wide
         px-10 py-2 rounded-lg hover:bg-primary transition hover:scale-105 font-poppins"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/YordanovTsanko/React-Tailwind-App",
                "_blank"
              );
            }}
          >
            See on GitHub
          </button>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src="https://png.pngtree.com/png-clipart/20231005/original/pngtree-business-training-3d-character-illustration-png-image_13123031.png"
            alt="home"
            className="object-cover h-96 w-96  "
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
