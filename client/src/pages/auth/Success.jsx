import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

const Success = () => {
  return (
    <Container>
      <div className="h-screen grid place-items-center">
        <div className="w-full max-w-md bg-white p-8 md:px-20 m-2 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold text-primary mb-6">
            Success!
          </h2>
          <p className="text-center text-lg text-gray-700 mb-4">
            A password reset link has been sent to your email address.
          </p>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors 
              duration-200 "
            >
              <Link to="/login">Go to Login</Link>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Success;
