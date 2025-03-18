import React, { useState } from "react";
import { Upload, LogOut, Home, FileText, BarChart, ClipboardList } from "lucide-react";

import "./NewExpense.css";

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

  const handleClear = () => {
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
    setAttachments(null);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="brand">Expense Pro</h2>
        <nav>
        <a href="/dashboard"><Home size={18} /> Dashboard</a>
        <a href="/expenses"><FileText size={18} /> Expenses</a>
        <a href="/add-expense" className="active"><ClipboardList size={18} /> Add Expense</a>
        <a href="/reports"><FileText size={18} /> Reports</a>
        <a href="/analytics"><BarChart size={18} /> Analytics</a>
        </nav>
        <div className="sidebar-bottom">
          <a href="/logout" className="logout-btn">
            <LogOut size={16} /> Log out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="content-wrapper">
        <main className="main-content">
          {/* Title Container (Left-Aligned) */}
          <div className="title-container">
            <h1 className="page-title">New Expense</h1>
          </div>

          {/* Expense Form */}
          <div className="form-container">
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

              {/* File Upload */}
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

              {/* Action Buttons */}
              <div className="form-actions">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="clear-btn" onClick={handleClear}>
                  Clear All
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewExpense;
