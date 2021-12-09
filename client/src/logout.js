import * as React from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import axios from "axios";
import { getSessionCookie, setSessionCookie } from "./session";
import * as Cookies from "js-cookie";
import { Cookie } from "express-session";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";

import { useContext } from "react";

function Logout() {
  const { switchHouse } = useContext(GlobalContext);
  const { setUser } = useContext(GlobalContext);
  const { currHouse } = useContext(GlobalContext);
  const { currUser } = useContext(GlobalContext);
  if (currHouse != null) {
    switchHouse(null);
  }
  if (currUser != null) {
    setUser(null);
  }

  Cookies.remove("session");

  //   const backtoLogin = () => {
  //     navigate("/*");
  //   };

  //   return (
  //     <div className="landing-page--dark">
  //       <ThemeProvider theme={theme}>
  //         <Button variant="contained" onClick={backtoLogin}>
  //           Back to Login
  //         </Button>
  //       </ThemeProvider>
  //     </div>
  //   );
  return (
    <div className="landing-page landing-page--dark">
      <ThemeProvider theme={theme}>
        <div className="landing-page__flex-wrapper">
          <div className="landing-page__button-container">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                className="landing-page__button button--color-blue"
              >
                <h1>Back to Login</h1>
              </Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Logout;
