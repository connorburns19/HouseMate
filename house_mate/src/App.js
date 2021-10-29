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
              <div className="Table">
                <h1>Current Expenses</h1>

                <h2>Owed to you</h2>
                <table>
                  <tbody>
                    <tr><td><strong>User</strong></td> <td><strong>Owed</strong></td></tr>
                    <tr><td>Ekagra Luthra</td> <td>$65.00</td></tr>
                    <tr><td>Connor Burns</td> <td>$15.00</td></tr>
                    <tr><td>Evan Kanter</td> <td>$26.50</td></tr>
                    <tr><td>Liam Culp</td> <td>$10.60</td></tr>
                    <tr><td>Johnson Vo</td> <td>$9.99</td></tr>
                  </tbody>
                </table>

                <h2>You owe</h2>
                <table>
                  <tbody>
                    <tr><td><strong>User</strong></td> <td><strong>Owed</strong></td></tr>
                    <tr><td>Salvador Neri</td> <td>$75</td></tr>
                    <tr><td>Matvey Lebedev</td> <td>$17.86</td></tr>
                  </tbody>
                </table>
              </div>
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
              <h1>Expenses</h1>//Nathan to assist with implementation
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
            <h1>Payments are to be made on the 1st of each month</h1>//Nathan to assist with implementation
          )}
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
