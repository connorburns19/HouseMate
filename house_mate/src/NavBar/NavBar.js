import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    return(
    <AppBar className="nav-bar nav-bar--color-transparent" color="navbar">  
        <ToolBar className="nav-bar__tool-bar">
            <IconButton>
                <MenuIcon color="ternary"/>
            </IconButton>
            <h1 className="nav-bar__address-text address-text--white">40 St George Street</h1>
        </ToolBar>
    </AppBar>
    );
}

export default NavBar;