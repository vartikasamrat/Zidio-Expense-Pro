import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DashboardLayout from "./layouts/DashboardLayout";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import Expenses from "./pages/Expenses";
import NewExpense from "./pages/NewExpense";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing/Login Page */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard Layout shared for both roles */}
        <Route path="/employee-dashboard" element={<DashboardLayout />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="new-expense" element={<NewExpense />} />
          <Route path="reports" element={<Reports />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        <Route path="/manager-dashboard" element={<DashboardLayout />}>
          <Route index element={<ManagerDashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="new-expense" element={<NewExpense />} />
          <Route path="reports" element={<Reports />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
