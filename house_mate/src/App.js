import './App.css';
import { useState } from 'react';
import NavBar from './NavBar';

function App() {
  const [leftDetails, leftDetailsShown] = useState(false);

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
              <h1>details</h1>
            )}

          </div>
          
        </div>
        <div className="Column">
        <div className = "MidColumn"><h1>Add Expenses</h1></div>
        </div>
        <div className="Column">
        <div className = "RightColumn"><h1>House Rules</h1></div>
        </div>
      </div>
    </div>
  );
}

export default App;
