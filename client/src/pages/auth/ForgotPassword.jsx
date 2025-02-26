import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from "../../components/Container";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate an API call for password reset.
    setSubmitting(false);
    navigate("/success"); 
  };

  return (
    <Container>
      <div className="h-screen grid place-items-center">
        <div className="w-full max-w-md bg-white p-8 md:px-20 m-2 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold text-primary mb-6">
            Forgot Password
          </h2>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                    disabled={isSubmitting}
                  >
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
                </button>
              </Form>
            )}
          </Formik>

          <p className="mt-4 text-center text-gray-600">
            Remember your password?{" "}
            <Link to="/login" className="text-primary hover:text-purple-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
