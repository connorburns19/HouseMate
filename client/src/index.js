// Followed https://www.jmfurlott.com/handling-user-session-react-context/ for sessions

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddExpense from "./AddExpense/AddExpense";
import ViewExpense from "./ViewExpenses/ViewExpense";
import HousePage from "./Houses/HousePage";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Profile from "./Profile";
import HouseRules from "./HouseRules/HouseRules";
import { GlobalProvider } from "./context/GlobalState";
import Login from "./login-components/Login/Login.js";

///////

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/home" element={<App />} />
          <Route path="/view-expense" element={<ViewExpense />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/houses" element={<HousePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/house-rules" element={<HouseRules />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
