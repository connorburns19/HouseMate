import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../Themes/theme";

// code copied and modified from https://mui.com/components/dividers/

function textprompt() {
  return <TextField id="outlined-basic" label="Outlined" variant="outlined" />;
}

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.dark",
};

const TDivider = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <List sx={style} component="nav" aria-label="profile info">
        <ListItem>
          <ListItemText color="#3db8e9" primary={props.displayname} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText color="#3db8e9" primary={props.number} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText color="#3db8e9" primary={props.username} />
        </ListItem>
        <Divider />

        <Divider light />
      </List>
    </ThemeProvider>
  );
};
export default TDivider;
