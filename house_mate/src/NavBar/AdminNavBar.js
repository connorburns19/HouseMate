//Cite NavBar implementation from https://mui.com/components/drawers/

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
import { GlobalContext } from "../context/GlobalState";
import { houses } from "../Objects/Houses";
import CurrUser from "../Objects/CurrUser";

function AdminNavBar() {
  const { currHouse } = React.useContext(GlobalContext);

  const [state, setState] = React.useState({
    visible: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const navList2 = [
    {
      text: "Profile",
      link: "/profile",
      icon: <PersonIcon />,
    },
    {
      text: "All Users in Database",
      link: "/house-rules",
      icon: <HomeWorkIcon />,
    },
    {
      text: "Houses",
      link: "/houses",
      icon: <OtherHousesIcon />,
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navList2.map((item, index) => {
          const { text, icon, link } = item;
          return (
            <Link to={link} style={{ textDecoration: "none" }}>
              <ListItem button key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar className="nav-bar nav-bar--color-transparent" color="navbar">
      <ToolBar className="nav-bar__tool-bar">
        {[""].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              {anchor}
              <MenuIcon color="ternary" />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <h1 className="nav-bar__address-text" style={{ color: "white" }}>
          {currHouse || currHouse === 0
            ? houses[parseInt(currHouse)].address
            : ""}
        </h1>
      </ToolBar>
    </AppBar>
  );
}

export default AdminNavBar;
