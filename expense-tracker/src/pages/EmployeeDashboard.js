import { useState } from "react";
import { Home, FileText, Clipboard, BarChart, LogOut } from "react-feather";
import "./ExpensePro.css";

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">

      </div>


        <div className="container">
        
        <aside className="sidebar">
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
        </aside>

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



// Commented Code For Manager Still In Progress  

// import { useState } from "react";
// import { Home, FileText, Clipboard, BarChart, LogOut } from "react-feather";
// import "./ExpensePro.css";

// const getStatusIcon = (status) => {
//   switch (status) {
//     case "approved":
//       return "✅";
//     case "pending":
//       return "⏳";
//     case "rejected":
//       return "❌";
//     default:
//       return "❓";
//   }
// };

// const DashboardManager = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [pendingApprovals, setPendingApprovals] = useState([
//     { id: 1, name: "Team lunch reimbursement", amount: 1200, status: "pending", submittedBy: "John", daysAgo: 2 },
//     { id: 2, name: "Office supplies", amount: 300, status: "pending", submittedBy: "James", daysAgo: 1 },
//   ]);

//   const [recentExpenses, setRecentExpenses] = useState([
//     { id: 1, name: "Team lunch", amount: 1200, status: "approved" },
//     { id: 2, name: "Office staplers", amount: 300, status: "pending" },
//     { id: 3, name: "Printer cartridge", amount: 3000, status: "rejected" },
//   ]);

//   const handleApprove = (id) => {
//     setPendingApprovals((prev) => prev.filter((approval) => approval.id !== id));
//     setRecentExpenses((prev) => prev.map((expense) => (expense.id === id ? { ...expense, status: "approved" } : expense)));
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header"></div>

//       <div className="container">
//         <aside className="sidebar">
//           <div className="brand">Expense Pro</div>

//           <nav className="sidebar-nav">
//             <a onClick={() => setActiveTab("dashboard")} className={activeTab === "dashboard" ? "active" : ""}>
//               <Home size={18} /> Dashboard
//             </a>
//             <a onClick={() => setActiveTab("expenses")} className={activeTab === "expenses" ? "active" : ""}>
//               <FileText size={18} /> Expenses
//             </a>
//             <a onClick={() => setActiveTab("add-expense")} className={activeTab === "add-expense" ? "active" : ""}>
//               <Clipboard size={18} /> Add Expense
//             </a>
//             <a onClick={() => setActiveTab("reports")} className={activeTab === "reports" ? "active" : ""}>
//               <FileText size={18} /> Reports
//             </a>
//             <a onClick={() => setActiveTab("analytics")} className={activeTab === "analytics" ? "active" : ""}>
//               <BarChart size={18} /> Analytics
//             </a>
//           </nav>
//           <div className="sidebar-bottom">
//             <a href="/logout" className="logout-btn">
//               <LogOut size={16} /> Log out
//             </a>
//           </div>
//         </aside>

//         {/* Summary Cards */}
//         <div className="summary-cards">
//           <div className="summary-card">
//             <h3 className="card-label">Total Expenses</h3>
//             <p className="card-value">₹ 10,000</p>
//           </div>
//           <div className="summary-card">
//             <h3 className="card-label">Pending Approval</h3>
//             <p className="card-value">{pendingApprovals.length}</p>
//           </div>
//           <div className="summary-card">
//             <h3 className="card-label">Expenses this Month</h3>
//             <p className="card-value">₹ 1,000</p>
//           </div>
//           <div className="summary-card">
//             <h3 className="card-label">Budget Utilized</h3>
//             <p className="card-value">42%</p>
//           </div>
//         </div>

//         <div style={{ display: "flex", gap: "20px" }}>
//           {/* Recent Expenses Section */}
//           <div className="recent-expenses" style={{ flex: 1 }}>
//             <div className="expenses-header">
//               <h2 className="expenses-title">Recent Expenses</h2>
//               <button className="view-all-btn">View all</button>
//             </div>
//             <div className="expenses-list">
//               {recentExpenses.map((expense) => (
//                 <div className="expense-item" key={expense.id}>
//                   <div className="expense-name">{expense.name}</div>
//                   <div className="expense-status">{getStatusIcon(expense.status)}</div>
//                   <div className="expense-amount">₹{expense.amount}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Approvals Section */}
//           <div className="recent-expenses" style={{ flex: 1 }}>
//             <div className="expenses-header">
//               <h2 className="expenses-title">Your Approvals</h2>
//             </div>
//             {pendingApprovals.length > 0 ? (
//               <div className="expenses-list">
//                 {pendingApprovals.map((approval) => (
//                   <div key={approval.id} className="approval-item">
//                     <div className="approval-name">{approval.name}</div>
//                     <div className="approval-info">Submitted by {approval.submittedBy} • {approval.daysAgo} days ago</div>
//                     <div className="approval-actions">
//                       <span className="approval-amount">₹{approval.amount}</span>
//                       <button className="approve-btn" onClick={() => handleApprove(approval.id)}>Approve</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="no-approvals">No pending approvals</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardManager;
