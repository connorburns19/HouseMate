import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// code copied and modified from https://mui.com/components/dividers/


const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.dark',
};

const TDivider = props => {
  return (
      
    <List sx={style} component="nav" aria-label="profile info">
      <ListItem button>
        <ListItemText primary={props.displayname} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary={props.number} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary={props.username} />
      </ListItem>
      <Divider />
      
      <Divider light />
      
    </List>
  );
}
export default TDivider;