import React, { useState } from 'react';
import '../ExpensePro.css';


const ApprovedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#E8F5E9"/>
    <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#4CAF50"/>
  </svg>
);

const PendingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF8E1"/>
    <path d="M13 12L13 7L11 7L11 12L13 12ZM13 16L13 14L11 14L11 16L13 16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#FFC107"/>
  </svg>
);

const RejectedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFEBEE"/>
    <path d="M16.6 8.6L15.4 7.4L12 10.8L8.6 7.4L7.4 8.6L10.8 12L7.4 15.4L8.6 16.6L12 13.2L15.4 16.6L16.6 15.4L13.2 12L16.6 8.6Z" fill="#F44336"/>
  </svg>
);

const DashboardManager = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 1,
      name: "Team lunch reimbursement",
      amount: 1200,
      status: "pending",
      submittedBy: "John",
      daysAgo: 2
    },
    {
      id: 2,
      name: "Office supplies",
      amount: 300,
      status: "pending",
      submittedBy: "James",
      daysAgo: 1
    }
  ]);

  const [recentExpenses, setRecentExpenses] = useState([
    {
      id: 1,
      name: "Team lunch",
      amount: 1200,
      status: "approved"
    },
    {
      id: 2,
      name: "Office staplers",
      amount: 300,
      status: "pending"
    },
    {
      id: 3,
      name: "Printer cartridge",
      amount: 3000,
      status: "rejected"
    }
  ]);

  const handleApprove = (id) => {
    // Update the pending approvals list by removing the approved item
    setPendingApprovals(prevApprovals => 
      prevApprovals.filter(approval => approval.id !== id)
    );
    
    // Update the status in recent expenses if it exists there
    setRecentExpenses(prevExpenses => 
      prevExpenses.map(expense => 
        expense.id === id ? {...expense, status: "approved"} : expense
      )
    );
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'approved':
        return <ApprovedIcon />;
      case 'pending':
        return <PendingIcon />;
      case 'rejected':
        return <RejectedIcon />;
      default:
        return <PendingIcon />;
    }
  };

  const handleSidebarClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-logo">Expense Pro</div>
        <button className="close-btn">✕</button>
        <div className="nav-buttons"></div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-menu">
          <div 
            className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`} 
            onClick={() => handleSidebarClick('dashboard')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="currentColor"/>
            </svg>
            Dashboard
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'expenses' ? 'active' : ''}`} 
            onClick={() => handleSidebarClick('expenses')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="currentColor"/>
            </svg>
            Expenses
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'approvals' ? 'active' : ''}`} 
            onClick={() => handleSidebarClick('approvals')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="currentColor"/>
            </svg>
            Approvals
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'reports' ? 'active' : ''}`} 
            onClick={() => handleSidebarClick('reports')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
            </svg>
            Reports
          </div>
          <div 
            className={`sidebar-item ${activeTab === 'analytics' ? 'active' : ''}`} 
            onClick={() => handleSidebarClick('analytics')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
            </svg>
            Analytics
          </div>
        </div>
        <div className="sidebar-footer">
          <div 
            className={`sidebar-item ${activeTab === 'settings' ? 'active' : ''}`} 
            onClick={() => handleSidebarClick('settings')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="currentColor"/>
            </svg>
            Settings
          </div>
          <div className="sidebar-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor"/>
            </svg>
            Log out 
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-welcome">Welcome back to your expense dashboard.</p>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">
            <h3 className="card-label">Total Expenses</h3>
            <p className="card-value">₹ 10,000</p>
          </div>
          <div className="summary-card">
            <h3 className="card-label">Pending Approval</h3>
            <p className="card-value">{pendingApprovals.length}</p>
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

        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Recent Expenses Section */}
          <div className="recent-expenses" style={{ flex: 1 }}>
            <div className="expenses-header">
              <h2 className="expenses-title">Recent Expenses</h2>
              <button className="view-all-btn">View all</button>
            </div>
            <div className="expenses-list">
              {recentExpenses.map(expense => (
                <div className="expense-item" key={expense.id}>
                  <div className="expense-name">{expense.name}</div>
                  <div className="expense-status">{getStatusIcon(expense.status)}</div>
                  <div className="expense-amount">₹{expense.amount}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Approvals Section */}
          <div className="recent-expenses" style={{ flex: 1 }}>
            <div className="expenses-header">
              <h2 className="expenses-title">Your Approvals</h2>
            </div>
            {pendingApprovals.length > 0 ? (
              <div className="expenses-list">
                {pendingApprovals.map(approval => (
                  <div key={approval.id} style={{ 
                    background: '#f5f5f5', 
                    padding: '15px', 
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      {approval.name}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#666',
                      marginBottom: '10px'
                    }}>
                      Submitted by {approval.submittedBy} • {approval.daysAgo} days ago
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ fontWeight: 'bold' }}>₹{approval.amount}</div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={{ 
                          background: '#e6f7f5',
                          border: 'none',
                          padding: '5px 15px',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}>
                          View
                        </button>
                        <button 
                          onClick={() => handleApprove(approval.id)}
                          style={{ 
                            background: '#2196F3',
                            color: 'white',
                            border: 'none',
                            padding: '5px 15px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '20px 0', textAlign: 'center', color: '#666' }}>
                No pending approvals
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardManager;