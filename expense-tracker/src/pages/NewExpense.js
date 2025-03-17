import React, { useState } from "react";
import { Upload, Settings, LogOut } from "lucide-react";
import "./NewExpense.css"; // Importing the CSS file

const NewExpense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [attachments, setAttachments] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ description, amount, category, date, attachments });
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="brand">Expense Pro</h2>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/expenses">Expenses</a>
          <a href="/add-expense" className="active">Add Expense</a>
          <a href="/reports">Reports</a>
          <a href="/analytics">Analytics</a>
        </nav>
        <div className="sidebar-bottom">
          <a href="/settings" className="sidebar-btn"><Settings size={16} /> Settings</a>
          <a href="/logout" className="sidebar-btn logout-btn"><LogOut size={16} /> Log out</a>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="content-wrapper">
        <main className="main-content">
          <h1 className="page-title">New Expense</h1>

          <form onSubmit={handleSubmit} className="expense-form">
            <h2 className="form-title">Expense Details</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                  required
                />
              </div>

              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="₹0.00"
                  required
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="office">Office Supplies</option>
                  <option value="software">Software</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Attachments</label>
              <div className="upload-box">
                <Upload size={32} />
                <input
                  type="file"
                  onChange={(e) => setAttachments(e.target.files)}
                  className="hidden"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </main>

        {/* Footer */}
        <footer className="footer">
          © 2025 Expense Pro | All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default NewExpense;
