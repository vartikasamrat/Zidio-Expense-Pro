// import React from 'react';
// import './ExpensePro.css';

// // SVG Icon Components
// const MoneyBagIcon = () => (
//   <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
//     <path d="M30 15C27.5 15 25.5 17 25.5 19.5C25.5 22 27.5 24 30 24C32.5 24 34.5 22 34.5 19.5C34.5 17 32.5 15 30 15ZM36 25.5H24C21.5 25.5 19.5 27.5 19.5 30V37.5C19.5 39 20.5 40 22 40H22.5V46.5H37.5V40H38C39.5 40 40.5 39 40.5 37.5V30C40.5 27.5 38.5 25.5 36 25.5ZM36 36H24V30H36V36Z" fill="#D32F2F"/>
//   </svg>
// );

// const AnalyticsIcon = () => (
//   <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
//     <path d="M42 18H37.5V42H42V18ZM32.25 24H27.75V42H32.25V24ZM22.5 30H18V42H22.5V30Z" fill="#D32F2F"/>
//     <circle cx="45" cy="15" r="7.5" fill="#FFC107" />
//   </svg>
// );

// const TargetIcon = () => (
//   <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
//     <path d="M48 30C48 39.9 39.9 48 30 48C20.1 48 12 39.9 12 30C12 20.1 20.1 12 30 12C39.9 12 48 20.1 48 30Z" fill="#FFFFFF" />
//     <path d="M30 15C21.7 15 15 21.7 15 30C15 38.3 21.7 45 30 45C38.3 45 45 38.3 45 30C45 21.7 38.3 15 30 15ZM30 42C23.4 42 18 36.6 18 30C18 23.4 23.4 18 30 18C36.6 18 42 23.4 42 30C42 36.6 36.6 42 30 42Z" fill="#D32F2F" />
//     <path d="M30 21C25 21 21 25 21 30C21 35 25 39 30 39C35 39 39 35 39 30C39 25 35 21 30 21ZM30 36C26.7 36 24 33.3 24 30C24 26.7 26.7 24 30 24C33.3 24 36 26.7 36 30C36 33.3 33.3 36 30 36Z" fill="#FFC107" />
//     <circle cx="30" cy="30" r="3" fill="#D32F2F" />
//   </svg>
// );

// const ApprovalsIcon = () => (
//   <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
//     <path d="M45 30C43.5 24 40.5 19.5 36 17.5V20C39 21.5 41.5 25 42.5 30H45ZM36 15V12.5C27 14.5 21 21.5 21 30C21 38.5 27 45.5 36 47.5V45C28.5 43 24 37 24 30C24 23 28.5 17 36 15ZM31.5 30C31.5 27.5 33.5 25.5 36 25.5C38.5 25.5 40.5 27.5 40.5 30C40.5 32.5 38.5 34.5 36 34.5C33.5 34.5 31.5 32.5 31.5 30Z" fill="#D32F2F" />
//     <path d="M18 36L21 33L24 36L30 30L33 33L24 42L18 36Z" fill="#FFC107" />
//   </svg>
// );

// const ExpensePro = () => {
//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <div className="menu-icon">
//           <div className="hamburger-icon">≡</div>
//         </div>
//         <div className="logo">Expense Pro</div>
//         <div className="auth-buttons">
//           <button className="login-btn">Log In</button>
//           <button className="signup-btn">Sign In</button>
//         </div>
//       </nav>

//       <main className="main-content">
//         <div className="hero-section">
//           <h1 className="hero-title">
//             A seamless way to<br />
//             Track, Manage  and Analyze Your<br />
//             Expenses
//           </h1>
//           <button className="get-started-btn">Get Started</button>
//         </div>

//         <div className="features-grid">
//           <div className="feature-card">
//             <MoneyBagIcon />
//             <h3 className="feature-title">Expense tracker</h3>
//             <p className="feature-description">
//               Manage and categorize expenses efficiently
//             </p>
//           </div>

//           <div className="feature-card">
//             <AnalyticsIcon />
//             <h3 className="feature-title">Real-time Analytics</h3>
//             <p className="feature-description">
//               Insights and reports for financial decisions
//             </p>
//           </div>

//           <div className="feature-card">
//             <TargetIcon />
//             <h3 className="feature-title">Dashboard</h3>
//             <p className="feature-description">
//               Quick look to all the payments done
//             </p>
//           </div>

//           <div className="feature-card">
//             <ApprovalsIcon />
//             <h3 className="feature-title">Approvals</h3>
//             <p className="feature-description">
//              Making sure all the expenses are approved
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ExpensePro;
import React from 'react';
import './ExpensePro.css';
import DashboardManager from './Pages/DashboardManager';
import {BrowserRouter as Router  , Route , Link, Routes} from 'react-router-dom';



// SVG Icon Components (reused from the landing page)
const MoneyBagIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
    <path d="M30 15C27.5 15 25.5 17 25.5 19.5C25.5 22 27.5 24 30 24C32.5 24 34.5 22 34.5 19.5C34.5 17 32.5 15 30 15ZM36 25.5H24C21.5 25.5 19.5 27.5 19.5 30V37.5C19.5 39 20.5 40 22 40H22.5V46.5H37.5V40H38C39.5 40 40.5 39 40.5 37.5V30C40.5 27.5 38.5 25.5 36 25.5ZM36 36H24V30H36V36Z" fill="#D32F2F"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
    <path d="M42 18H37.5V42H42V18ZM32.25 24H27.75V42H32.25V24ZM22.5 30H18V42H22.5V30Z" fill="#D32F2F"/>
    <circle cx="45" cy="15" r="7.5" fill="#FFC107" />
  </svg>
);

const TargetIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
    <path d="M48 30C48 39.9 39.9 48 30 48C20.1 48 12 39.9 12 30C12 20.1 20.1 12 30 12C39.9 12 48 20.1 48 30Z" fill="#FFFFFF" />
    <path d="M30 15C21.7 15 15 21.7 15 30C15 38.3 21.7 45 30 45C38.3 45 45 38.3 45 30C45 21.7 38.3 15 30 15ZM30 42C23.4 42 18 36.6 18 30C18 23.4 23.4 18 30 18C36.6 18 42 23.4 42 30C42 36.6 36.6 42 30 42Z" fill="#D32F2F" />
    <path d="M30 21C25 21 21 25 21 30C21 35 25 39 30 39C35 39 39 35 39 30C39 25 35 21 30 21ZM30 36C26.7 36 24 33.3 24 30C24 26.7 26.7 24 30 24C33.3 24 36 26.7 36 30C36 33.3 33.3 36 30 36Z" fill="#FFC107" />
    <circle cx="30" cy="30" r="3" fill="#D32F2F" />
  </svg>
);

const ApprovalsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#FFFFFF" fillOpacity="0.5" />
    <path d="M45 30C43.5 24 40.5 19.5 36 17.5V20C39 21.5 41.5 25 42.5 30H45ZM36 15V12.5C27 14.5 21 21.5 21 30C21 38.5 27 45.5 36 47.5V45C28.5 43 24 37 24 30C24 23 28.5 17 36 15ZM31.5 30C31.5 27.5 33.5 25.5 36 25.5C38.5 25.5 40.5 27.5 40.5 30C40.5 32.5 38.5 34.5 36 34.5C33.5 34.5 31.5 32.5 31.5 30Z" fill="#D32F2F" />
    <path d="M18 36L21 33L24 36L30 30L33 33L24 42L18 36Z" fill="#FFC107" />
  </svg>
);

// New Dashboard sidebar icons
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="currentColor"/>
  </svg>
);

const ExpenseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="currentColor"/>
  </svg>
);

const AddIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
  </svg>
);

const ReportsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
  </svg>
);

const AnalyticsSmallIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="currentColor"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor"/>
  </svg>
);

// Status icons for expense items
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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  >
    <circle cx="12" cy="12" r="12" fill="#FFEBEE"/>
    <path d="M16.6 8.6L15.4 7.4L12 10.8L8.6 7.4L7.4 8.6L10.8 12L7.4 15.4L8.6 16.6L12 13.2L15.4 16.6L16.6 15.4L13.2 12L16.6 8.6Z" fill="#F44336"/>
  </svg>
);
 

// Main App component with routing
const ExpenseProApp = () => {
  const [currentPage, setCurrentPage] = React.useState('landing');

  return (
    <Router>
    <div className="app-container">
      <Routes>
        <Route path="/dashboard" element={<DashboardManager />} />  
      </Routes> 

        
      {currentPage === 'landing' ? (
        <LandingPage onNavigate={setCurrentPage} />
      ) : (
        <DashboardPage currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </div>
    </Router>
  );
};


// Landing Page Component
const LandingPage = ({ onNavigate }) => {
  return (
    <>
      <nav className="navbar">
        <div className="menu-icon">
          <div className="hamburger-icon">≡</div>
        </div>
      
        <div className="logo">Expense Pro</div>
        <div className="auth-buttons">
          <button className="Empoloyee-btn">Empoloyee</button>
          <button className="Manager-btn" onClick={() => onNavigate('/dashboard')}>Manager</button>
        </div>
      </nav>

      <main className="left-panel">
        <div className="hero-section">
          <h1 className="hero-title">
            A seamless way to<br/>
            Track, Manage  and Analyze Your<br/>
            Expenses
          </h1>
          <button className="get-started-btn" onClick={() => onNavigate('dashboard')}>Get Started</button>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <MoneyBagIcon />
            <h3 className="feature-title">Expense tracker</h3>
            <p className="feature-description">
              Manage and categorize expenses efficiently
            </p>
          </div>

          <div className="feature-card">
            <AnalyticsIcon />
            <h3 className="feature-title">Real-time Analytics</h3>
            <p className="feature-description">
              Insights and reports for financial decisions
            </p>
          </div>

          <div className="feature-card">
            <TargetIcon />
            <h3 className="feature-title">Dashboard</h3>
            <p className="feature-description">
              Quick look to all the payments done
            </p>
          </div>

          <div className="feature-card">
            <ApprovalsIcon />
            <h3 className="feature-title">Approvals</h3>
            <p className="feature-description">
             Making sure all the expenses are approved
            </p>
          </div>

        </div>
          {/* Right Panel
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-12 font-serif">Lets Get Started</h1>
        
        <div className="space-y-8 w-64">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition duration-300 flex flex-col items-center">
            <span>Log In</span>
            <span className="text-sm">as</span>
            <span>Employee</span>
          </button>
          
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition duration-300 flex flex-col items-center">
            <span>Log In</span>
            <span className="text-sm">as</span>
            <span>Manager</span>
          </button>
        </div>
      </div>  */}

      </main>
    </>
  );
};


// Dashboard Page Component
const DashboardPage = ({ currentPage, onNavigate }) => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-logo">Expense Pro</div>
        <button className="close-btn">✕</button>
        <div className="nav-buttons">
     
        </div>
     
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-menu">
          <div className={`sidebar-item ${currentPage === 'dashboard' ? 'active' : ''}`} onClick={() => onNavigate('dashboard')}>
            <HomeIcon /> Dashboard
          </div>
          <div className={`sidebar-item ${currentPage === 'expenses' ? 'active' : ''}`} onClick={() => onNavigate('expenses')}>
            <ExpenseIcon /> Expenses
          </div>
          <div className={`sidebar-item ${currentPage === 'add-expense' ? 'active' : ''}`} onClick={() => onNavigate('add-expense')}>
            <AddIcon /> Add Expense
          </div>
          <div className={`sidebar-item ${currentPage === 'reports' ? 'active' : ''}`} onClick={() => onNavigate('reports')}>
            <ReportsIcon /> Reports
          </div>
          <div className={`sidebar-item ${currentPage === 'analytics' ? 'active' : ''}`} onClick={() => onNavigate('analytics')}>
            <AnalyticsSmallIcon /> Analytics
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="sidebar-item" onClick={() => onNavigate('settings')}>
            <SettingsIcon /> Settings
          </div>
          <div className="sidebar-item" onClick={() => onNavigate('landing')}>
            <LogoutIcon /> Log out
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
              <div className="expense-status"><ApprovedIcon /></div>
              <div className="expense-amount">₹1200</div>
            </div>
            <div className="expense-item">
              <div className="expense-name">Office staplers</div>
              <div className="expense-status"><PendingIcon /></div>
              <div className="expense-amount">₹300</div>
            </div>
            <div className="expense-item">
              <div className="expense-name">Printer cartridge</div>
              <div className="expense-status "><RejectedIcon /></div>
              <div className="expense-amount">₹3000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseProApp;               