import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="Row">
        <div className="Column">
          <div className = "LeftColumn">lefthand</div>
        </div>
        <div className="Column">
        <div className = "MidColumn">middle</div>
        </div>
        <div className="Column">
        <div className = "RightColumn">righthand</div>
        </div>
      </div>
    </div>
  );
}

export default App;
