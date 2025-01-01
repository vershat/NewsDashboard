import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import CreateAccount from "./pages/CreateAccount";
// import LoginAccount from "./pages/LoginAccount";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import HomePage from "./pages/HomePage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<CreateAccount />} />
//         <Route path="/login" element={<LoginAccount />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="*" element={<HomePage />} />
//         <Route path="*" element={<LoginAccount />} />
//       </Routes>
//     </Router>
//   );
// };


import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;

