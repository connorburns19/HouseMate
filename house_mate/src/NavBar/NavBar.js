//Cite NavBar implementation from https://mui.com/components/drawers/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';

function NavBar() {
    const [state, setState] = React.useState({
        visible: false,
      });
  
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    
    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {['Home', 'Add Expenses', 'View Expenses'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                {index === 0 ? <HomeIcon /> : <AttachMoneyIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Profile'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                {<PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </Box>
    );

    return(
        <AppBar className="nav-bar nav-bar--color-transparent" color="navbar">  
            <ToolBar className="nav-bar__tool-bar">
            {[''].map((anchor) => (
            <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}>{anchor}
                    <MenuIcon color="ternary"/>
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
                <h1 className="nav-bar__address-text address-text--white">40 St George Street</h1>
            </ToolBar>
        </AppBar>
    );
}

export default NavBar;