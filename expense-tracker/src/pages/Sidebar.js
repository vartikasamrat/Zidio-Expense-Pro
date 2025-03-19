import React from "react";
import { FaHome, FaFileInvoiceDollar, FaPlus, FaClipboardCheck, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="expense-pro">Expense Pro</h2>
      <nav className="menu">
        <li><onclick to="/" activeClassName="active"><FaHome/><span>Dashboard</span></onclick></li>
        <li><onclick to="/expenses" activeClassName="active"><FaFileInvoiceDollar/><span>Expenses</span></onclick></li>
        <li><onclick to="/approvals" activeClassName="active"><FaClipboardCheck /><span> Approval</span></onclick></li>
        <li><onclick to="/reports" activeClassName="active"><FaChartBar /><span>Reports</span> </onclick></li>
        <li><onclick to="/analytics" activeClassName="active"><FaChartBar /><span> Analytics</span></onclick></li>
      </nav>
      
      <div className="logoutbutton">
        <a><onclick to="/logout" className="logout-btn"><FaSignOutAlt /> Logout</onclick></a>
        </div>
    </div>
  );
};

export default Sidebar;