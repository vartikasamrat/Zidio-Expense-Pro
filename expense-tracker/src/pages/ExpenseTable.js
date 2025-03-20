
import React from "react";
import "../styles/ExpensesTable.css";
import { FaSearch } from "react-icons/fa";


const ExpensesTable = () => {
  return (
    <div className="expense-container">
      {/* Search Input */}
  <div className="search-wrapper">
  <svg
    className="search-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="gray"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85ZM12.5 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" />
  </svg>
  <input type="text" placeholder="Search" className="search-bar" />
</div>


      {/* Filter Buttons */}
      <div className="filters">
        <button className="all-btn">All</button>
        <button className="approved-btn">Approved</button>
        <button className="pending-btn">Pending</button>
        <button className="rejected-btn">Rejected</button>
      </div>

      {/* Table */}
      <div className="expense-table">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team lunch</td>
              <td>₹1200</td>
              <td>Food</td>
              <td>04-06-2003</td>
              <td>✅</td>
            </tr>
            <tr>
              <td><br></br></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><br></br><br></br></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <p>
              <br></br>
            </p>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensesTable;
