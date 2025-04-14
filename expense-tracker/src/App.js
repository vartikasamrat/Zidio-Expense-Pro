import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DashboardLayout from "./layouts/DashboardLayout";

// Manager pages
import ManagerDashboard from "./pages/ManagerDashboard";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import ManagerNewExpense from "./pages/ManagerNewExpense";

// Employee pages
import EmployeeDashboard from "./pages/EmployeeDashboard";
import MyExpenses from "./pages/Expenses";
import EmployeeNewExpense from "./pages/NewExpense";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing/Login Page */}
        <Route path="/" element={<Landing />} />

        {/* Manager Routes */}
        <Route path="/manager" element={<DashboardLayout />}>
          <Route path="dashboard" element={<ManagerDashboard />} />
          <Route path="reports" element={<Reports />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        {/* Employee Routes */}
        <Route path="/employee" element={<DashboardLayout />}>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="my-expenses" element={<MyExpenses />} />
          <Route path="new-expense" element={<EmployeeNewExpense />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
