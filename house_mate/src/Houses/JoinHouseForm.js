// Credit: https://mui.com/components/dialogs/ 
import * as React from 'react';
import "./HousePage.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CurrUser from "../Objects/CurrUser";
import houses from '../Objects/Houses';
import {users, joinHouse} from '../Objects/Users';

// const currUser = CurrUser();

export default function JoinHouseFormDialog({setHouseMember}) {
  const [open, setOpen] = React.useState(false);
  const [houseID, setHouse] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setHouseMember(false); //make sure that one peice of the state was changing
    joinHouse("user", parseInt(houseID));
    setOpen(false);
  };

  return (
    <div>
      <Button className="join-house-button" variant="outlined" onClick={handleClickOpen}>
        Join House
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Join House</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the unique ID of the house you wish to join:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="House ID"
            type="id"
            fullWidth
            variant="standard"
            onChange={event => setHouse(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Join</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
