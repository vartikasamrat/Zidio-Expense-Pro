import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, FileText, ClipboardList, BarChart, LogOut } from "lucide-react";
import "./Sidebar.css";

const EmployeeSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <h2 className="brand">Expense Pro</h2>
      <nav>
        <NavLink to="/employee-dashboard">
          <Home size={18} /> Dashboard
        </NavLink>
        <NavLink to="expenses">
          <FileText size={18} /> Expenses
        </NavLink>
        <NavLink to="new-expense">
          <ClipboardList size={18} /> New Expense
        </NavLink>
        <NavLink to="reports">
          <FileText size={18} /> Reports
        </NavLink>
        <NavLink to="analytics">
          <BarChart size={18} /> Analytics
        </NavLink>
      </nav>
      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={16} className="logout-icon" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default EmployeeSidebar;
