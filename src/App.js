import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const result = localStorage.getItem("loggedIn");
    setLoggedIn(result);
    if (!result) {
      localStorage.setItem("loggedIn", false);
    }
    setLoading(false);
  }, []);

  return (
    <>
      {!location.pathname.startsWith("/dashboard") && (
        <Navbar loggedIn={loggedIn} loading={loading} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              loading={loading}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              loading={loading}
            />
          }
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
