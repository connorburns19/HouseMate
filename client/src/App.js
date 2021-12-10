import "./App.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import { getSessionCookie, setSessionCookie } from "./session";
import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";
import React from "react";
const session = getSessionCookie();

function App() {
  const { switchHouse } = useContext(GlobalContext);
  const { currHouse } = React.useContext(GlobalContext);
  if (session.hid != null && currHouse !== session.hid) {
    switchHouse(session.hid);
  }

  return (
    <div className="landing-page landing-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="landing-page__flex-wrapper">
          <div className="landing-page__button-container">
            <Link to="/view-expense" style={{ textDecoration: "none" }}>
              <Button
                startIcon={<AttachMoneyIcon />}
                color="primary"
                variant="contained"
                className="landing-page__button button--color-blue"
              >
                <h1>View Expenses</h1>
              </Button>
            </Link>
          </div>
          <div className="landing-page__button-container">
            <Link to="/add-expense" style={{ textDecoration: "none" }}>
              <Button
                startIcon={<AddIcon />}
                color="secondary"
                variant="contained"
                className="landing-page__button"
              >
                <h1>Add Expenses</h1>
              </Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
