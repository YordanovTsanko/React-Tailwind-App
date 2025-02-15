import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";

const Register = ({ loggedIn, loading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && loggedIn === "true") {
      navigate("/dashboard");
    }
  }, [loggedIn, loading, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container>
      <div className="h-screen grid place-items-center">
        <div className="w-full max-w-md bg-white p-8 md:px-20 m-2 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold text-primary mb-6">
            Register
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="example@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="********"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="********"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              Create Account
            </button>

            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-purple-700">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
