import "./App.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FF5151',
      },
      secondary: {
        main: '#FF9B6A',
      },
      ternary: {
        main: '#161E54',
      },
      navbar: {
        main: '#88E0EF',
      }
    },
  });

  return (
    <div className="landing-page landing-page--black">
      <ThemeProvider theme={theme}>
        <AppBar className="nav-bar nav-bar--color-transparent" color="navbar">  
          <ToolBar className="nav-bar__tool-bar">
            <IconButton>
              <MenuIcon color="ternary"/>
            </IconButton>
            <h1 className="nav-bar__address-text address-text--white">40 St George Street</h1>
          </ToolBar>
        </AppBar>
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
