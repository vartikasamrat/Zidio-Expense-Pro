import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";  // Import Sidebar
import NewExpense from "./pages/NewExpense";
/*import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Logout from "./pages/Logout";*/
import "./App.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Sidebar remains visible on all pages */}
        <div className="content"> {/* This will hold the page content */}
          <Routes>
            <Route path="/add-expense" element={<NewExpense />} />
            {/*<Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />  
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />*/}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
