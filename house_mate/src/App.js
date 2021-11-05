import "./App.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import theme from './Themes/theme.js';
import NavBar from './NavBar/NavBar';

function App() {

  return (
    <div className="landing-page landing-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="landing-page__flex-wrapper">
          <div className="landing-page__button-container">
            <Button startIcon={<AttachMoneyIcon />} color="primary" variant="contained" className="landing-page__button button--color-blue">
              <h1>View Expenses</h1>
            </Button>
          </div>
          <div className="landing-page__button-container">
            <Button startIcon={<AddIcon />}color="secondary" variant="contained" className="landing-page__button button--color-green">
              <h1>Add Expenses</h1>
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>

  );
}

export default App;
