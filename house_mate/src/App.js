import "./App.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8cb369',
      },
      secondary: {
        main: '#f4a259',
      },

    },
  });

  return (
    <div className="landing-page landing-page--black">
      <ThemeProvider theme={theme}>
        <div className="landing-page__flex-wrapper">
          <div className="landing-page__button-container">
            <Button startIcon={<AttachMoneyIcon />} color="primary" variant="contained" className="landing-page__button button--color-blue">
              View Expenses
            </Button>
          </div>
          <div className="landing-page__button-container">
            <Button startIcon={<AddIcon />}color="secondary" variant="contained" className="landing-page__button button--color-green">
              Add Expenses
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>

  );
}

export default App;
