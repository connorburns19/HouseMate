import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddExpense from './AddExpense/AddExpense';
import ViewExpense from './ViewExpenses/ViewExpense';
import HousePage from './Houses/HousePage';
import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Profile from './Profile'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<App />}/>
          <Route path="/view-expense" element={<ViewExpense />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/houses" element={<HousePage />} />
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
