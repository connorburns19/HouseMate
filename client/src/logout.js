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

function Logout({ history }) {
  Cookies.remove("session");
  const route = () => {
    history.push("/login");
  };
  return route;
}

export default Logout;
