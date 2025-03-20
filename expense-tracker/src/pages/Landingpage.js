import "./Loginpage.css";
import cashbag from './assets/cashbag.png';
import analytics from './assets/analytics.png';
import target from './assets/target.png';
import approval from './assets/approval.png';


function App() {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1 className="title">Expense Pro</h1>
        <p className="subtitle">
          A seamless way to <br /> Track, Manage, and Analyze Your Expenses
        </p>
        <div className="features">
          <div className="feature left">
            <img src={cashbag} alt="Money Bag" className="feature-icon-onleft" />
            <p className="aligned-left">Manage and categorize expenses efficiently</p>
          </div>
          <div className="feature right">
            <p className="aligned-right">Real-time Analytics and reports for financial decisions</p>
            <img src={analytics} alt="Analytics" className="feature-icon-onright" />
          </div>
          <div className="feature left">
            <img src={target} alt="Target" className="feature-icon-onright" />
            <p className="aligned-left">Quick look at all the payments done through Dashboard</p>
          </div>
          <div className="feature right">
            <p className="aligned-right">Seamless Approvals for the Budget</p>
            <img src={approval} alt="Approval" className="feature-icon-onleft" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2 className="get-started">Lets Get Started</h2>
        <div className="login-buttons">
          <button className="login-btn">Log In as Employee</button>
          <button className="login-btn">Log In as Manager</button>
        </div>
      </div>
    </div>
  );
}

export default App;
