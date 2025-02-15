import React from "react";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div class="grid md:grid-cols-2 px-10 relative gap-10 md:gap-0 md:mt-32">
        <div
          className="flex flex-col items-start justify-center gap-3
      text-red-100 font-bold text-start mt-28 md:mt-0"
        >
          <p className=" drop-shadow-md  text-6xl text-primary-dark font-poppins font-medium">
            Tsanko Yordanov's
          </p>
          <p className=" drop-shadow-lg text-4xl text-secondary-light font-poppins font-light">
            React Tailwind practice website.
          </p>
          <button
            className="bg-primary-dark drop-shadow-md text-white text-lg tracking-wide
         px-10 py-2 rounded-lg hover:bg-primary transition hover:scale-105 font-poppins"
            onClick={(e) => {
              e.preventDefault();
              return navigate("/dashboard");
            }}
          >
            Explore
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
