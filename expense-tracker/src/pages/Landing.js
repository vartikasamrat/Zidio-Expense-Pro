import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Initial.css";
import cashbag from "../assets/cashbag.png";
import analytics from "../assets/analytics.png";
import target from "../assets/target.png";
import approval from "../assets/approval.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isEmployee, setIsEmployee] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      // Save the user role to localStorage
      localStorage.setItem("userRole", isEmployee ? "employee" : "manager");

      // Navigate based on user role
      navigate(isEmployee ? "/employee-dashboard" : "/manager-dashboard");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return React.createElement(
    "main",
    { className: "landing-container" },

    // Left Section
    React.createElement(
      "section",
      { className: "left-section" },
      React.createElement("h1", { className: "title" }, "Expense Pro"),
      React.createElement(
        "p",
        { className: "subtitle" },
        "A seamless way to ",
        React.createElement("br"),
        "Track, Manage, and Analyze Your Expenses"
      ),
      React.createElement(
        "div",
        { className: "features" },
        React.createElement(
          "div",
          { className: "feature left" },
          React.createElement("img", {
            src: cashbag,
            alt: "Money Bag",
            className: "feature-icon-onleft",
          }),
          React.createElement("p", { className: "aligned-left" }, "Manage and categorize expenses efficiently")
        ),
        React.createElement(
          "div",
          { className: "feature right" },
          React.createElement("p", { className: "aligned-right" }, "Real-time Analytics and reports for financial decisions"),
          React.createElement("img", {
            src: analytics,
            alt: "Analytics",
            className: "feature-icon-onright",
          })
        ),
        React.createElement(
          "div",
          { className: "feature left" },
          React.createElement("img", {
            src: target,
            alt: "Target",
            className: "feature-icon-onright",
          }),
          React.createElement("p", { className: "aligned-left" }, "Quick look at all the payments done through Dashboard")
        ),
        React.createElement(
          "div",
          { className: "feature right" },
          React.createElement("p", { className: "aligned-right" }, "Seamless Approvals for the Budget"),
          React.createElement("img", {
            src: approval,
            alt: "Approval",
            className: "feature-icon-onleft",
          })
        )
      )
    ),

    // Right Section
    React.createElement(
      "section",
      { className: "right-section" },
      React.createElement("h2", { className: "get-started" }, isEmployee ? "Employee Log In" : "Manager Log In"),
      React.createElement(
        "div",
        { className: "toggle-buttons" },
        React.createElement(
          "button",
          {
            className: toggle-btn ${isEmployee ? "active" : ""},
            onClick: () => setIsEmployee(true),
            type: "button",
          },
          "Employee"
        ),
        React.createElement(
          "button",
          {
            className: toggle-btn ${!isEmployee ? "active" : ""},
            onClick: () => setIsEmployee(false),
            type: "button",
          },
          "Manager"
        )
      ),
      React.createElement(
        "form",
        { className: "login-form", onSubmit: handleLogin },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", { htmlFor: "email" }, "E-mail"),
          React.createElement("input", {
            type: "email",
            id: "email",
            className: "form-input",
            placeholder: "eg.sonu12@mail.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
          })
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", { htmlFor: "password" }, "Password"),
          React.createElement("input", {
            type: "password",
            id: "password",
            className: "form-input",
            placeholder: "Minimum 8 characters",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
          })
        ),
        React.createElement(
          "button",
          { type: "submit", className: "enter-btn" },
          "Enter"
        ),
        React.createElement(
          "a",
          { href: "/forgot-password", className: "forgot-password" },
          "Forgot Password?"
        )
      )
    )
  );
};

export default LandingPage;
