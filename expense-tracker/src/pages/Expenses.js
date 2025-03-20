import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/Expenses.css";
import ExpensesTable from "../components/ExpensesTable";




const Expenses = () => {
  return (
    <div className="container">
      <Sidebar/>
      <div className="main-container>">
        <Header/>
        <div>
          <h2 className="expenses-heading">Expenses</h2>
          <p className="expenses-para">Track and manage your expenses</p>
          <ExpensesTable/>
        </div>
      </div>
    </div>

  );
};
export default Expenses;
