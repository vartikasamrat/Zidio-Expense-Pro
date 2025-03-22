
import { useState } from "react";
import { Home, FileText, Clipboard, BarChart, LogOut } from "react-feather";
import "./ExpensePro.css";
import Sidebar from "./components/sidebar";

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">

      </div>


        <div className="container">
        <div><Sidebar></Sidebar></div>

        {/* <aside className="sidebar">
          <div className="brand">Expense Pro</div>
    
          <nav className="sidebar-nav">
            <a href="/dashboard" className={currentPage === "dashboard" ? "active" : "dashboard"}>
              <Home size={18} /> Dashboard
            </a>
            <a href="/expenses" className={currentPage === "expenses" ? "active" : ""}>
              <FileText size={18} /> Expenses
            </a>
            <a href="/add-expense" className={currentPage === "add-expense" ? "active" : ""}>
              <Clipboard size={18} /> Add Expense
            </a>
            <a href="/reports" className={currentPage === "reports" ? "active" : ""}>
              <FileText size={18} /> Reports
            </a>
            <a href="/analytics" className={currentPage === "analytics" ? "active" : ""}>
              <BarChart size={18} /> Analytics
            </a>
          </nav>
          <div className="sidebar-bottom">
            <a href="/logout" className="logout-btn">
              <LogOut size={16} /> Log out
            </a>
          </div>
        </aside> */}


        {/* Main Content Area */}
        <div className="dashboard-content">
          {currentPage === "dashboard" && (
            <>
              <h1 className="dashboard-title">Dashboard</h1>
              <p className="dashboard-welcome">
                Welcome back to your expense dashboard.
              </p>

              {/* Summary Cards */}
              <div className="summary-cards">
                <div className="summary-card">
                  <h3 className="card-label">Total Expenses</h3>
                  <p className="card-value">₹ 10,000</p>
                </div>
                <div className="summary-card">
                  <h3 className="card-label">Pending Approval</h3>
                  <p className="card-value">5</p>
                </div>
                <div className="summary-card">
                  <h3 className="card-label">Expenses this Month</h3>
                  <p className="card-value">₹ 1,000</p>
                </div>
                <div className="summary-card">
                  <h3 className="card-label">Budget Utilized</h3>
                  <p className="card-value">42%</p>
                </div>
              </div>

              {/* Recent Expenses */}
              <div className="recent-expenses">
                <div className="expenses-header">
                  <h2 className="expenses-title">Recent Expenses</h2>
                  <button className="view-all-btn">View all</button>
                </div>
                <div className="expenses-list">
                  <div className="expense-item">
                    <div className="expense-name">Team lunch</div>
                    <div className="expense-status">✅</div>
                    <div className="expense-amount">₹1200</div>
                  </div>
                  <div className="expense-item">
                    <div className="expense-name">Office staplers</div>
                    <div className="expense-status">⏳</div>
                    <div className="expense-amount">₹300</div>
                  </div>
                  <div className="expense-item">
                    <div className="expense-name">Printer cartridge</div>
                    <div className="expense-status ">❌</div>
                    <div className="expense-amount">₹3000</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentPage === "add-expense" && (
            <h1 className="dashboard-title">Add Expense Page</h1>
          )}

          {currentPage === "expenses" && (
            <h1 className="dashboard-title">Expenses Page</h1>
          )}

          {currentPage === "reports" && (
            <h1 className="dashboard-title">Reports Page</h1>
          )}

          {currentPage === "analytics" && (
            <h1 className="dashboard-title">Analytics Page</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
