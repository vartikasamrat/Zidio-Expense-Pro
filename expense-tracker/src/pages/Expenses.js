import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ExpenseTable from "../components/ExpenseTable";
import "../styles/Expenses.css";

const Expenses = () => {
  return (
    <div className="container">   
      <Sidebar />
      <div className="main-content">
        <Header /> 
        <div>
          <h2 className="expenses-heading">Expenses</h2>
          <p className="expenses-para">Track and manage your expenses</p>
        <ExpenseTable />
        </div>
        </div>
      </div>
   
  );
};

export default Expenses;
