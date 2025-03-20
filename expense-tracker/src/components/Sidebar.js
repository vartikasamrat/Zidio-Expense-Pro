import React from "react";
import { NavLink } from "react-router-dom";
import { Home, FileText, BarChart, ClipboardList, LogOut } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="brand">Expense Pro</h2>
      <nav>
        <NavLink to="/dashboard">
          <Home size={18} /> Dashboard
        </NavLink>
        <NavLink to="/expenses">
          <FileText size={18} /> Expenses
        </NavLink>
        <NavLink to="/add-expense" className="active">
          <ClipboardList size={18} /> New Expense
        </NavLink>
        <NavLink to="/reports">
          <FileText size={18} /> Reports
        </NavLink>
        <NavLink to="/analytics">
          <BarChart size={18} /> Analytics
        </NavLink>
      </nav>
      <div className="sidebar-bottom">
        <NavLink to="/logout" className="logout-btn">
          <LogOut size={16} /> Log out
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
