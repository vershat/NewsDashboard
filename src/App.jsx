import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateAccount from "./pages/CreateAccount";
import LoginAccount from "./pages/LoginAccount";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import HomePage from "./pages/HomePage";
import Payout from "./pages/PayoutTable";
import NewsAnalytics from "./pages/NewsAnalytics";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for the CreateAccount page */}
      
        <Route path="*" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
