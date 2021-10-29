import './App.css';
import { useState } from 'react';
import NavBar from './NavBar';

function App() {
  const [leftDetails, leftDetailsShown] = useState(false);
  const [addExpense, addExpenseShown] = useState(false);
  const [houseRules, houseRulesShown] = useState(false);

  return (
    <div className="App">
      <NavBar/>
      <div className="Row">
        <div className="Column">
          <div 
          className = "LeftColumn" 
          onMouseEnter={() => leftDetailsShown(true)}
          onMouseLeave={() => leftDetailsShown(false)}
          >
            {!leftDetails && (
              <h1>View Expenses</h1>
            )}
            
            {leftDetails && (
              <h1>Details</h1>
            )
          }
          </div>
          
        </div>
        <div className="Column">
        <div 
        className = "MidColumn"
        onMouseEnter={() => addExpenseShown(true)}
        onMouseLeave={() => addExpenseShown(false)}
        >
          {!addExpense && (
              <h1>Add Expenses</h1>
            )}
            
            {addExpense && (
              <h1>Expenses</h1>
            )}
        </div>
        </div>
        <div className="Column">
        <div 
        className = "RightColumn"
        onMouseEnter={() => houseRulesShown(true)}
        onMouseLeave={() => houseRulesShown(false)}
        >
          {!houseRules && (
            <h1>House Rules</h1>
          )}
          {houseRules && (
            <h1>Payments are to be made on the 1st of each month</h1>
          )}
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
