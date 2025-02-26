import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlicer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username cannot exceed 20 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      await dispatch(
        loginUser({ username: values.username, password: values.password })
      ).unwrap();
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container>
      <div className="h-screen grid place-items-center">
        <div className="w-full max-w-md bg-white p-8 md:px-20 m-2 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold text-primary mb-6">Login</h2>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Username"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                  disabled={isSubmitting || status === "loading"}
                >
                  {status === "loading" || isSubmitting ? "Loading..." : "Login"}
                </button>
                {status === "failed" && <p className="mt-4 text-center text-red-500">{error}</p>}
                <p className="mt-4 text-center text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary hover:text-purple-700">Register</Link>
                </p>
                <p className="mt-4 text-center text-gray-600">
                  <Link to="/forgot-password" className="text-primary hover:text-purple-700">Forgot Password?</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Simulate an API call for password reset.
    alert(`Password reset link sent to ${email}`);
    navigate("/login");
  };

  return (
    <Container>
      <div className="h-screen grid place-items-center">
        <div className="w-full max-w-md bg-white p-8 md:px-20 m-2 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold text-primary mb-6">Forgot Password</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
          <button
            onClick={handleResetPassword}
            className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
          >
            Send Reset Link
          </button>
          <p className="mt-4 text-center text-gray-600">
            Remember your password?{" "}
            <Link to="/login" className="text-primary hover:text-purple-700">Login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
