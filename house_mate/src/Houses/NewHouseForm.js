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
import {createHouse} from '../Objects/Houses';
import {joinHouse} from '../Objects/Users';
import { GlobalContext } from '../context/GlobalState';

export default function NewHouseFormDialog({setHouseMember}) {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState();
  const [imageLink, setImageLink] = React.useState();
  const { currUser } = React.useContext(GlobalContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setHouseMember(false); //make sure that one peice of the state was changing
    setOpen(false);
    const houseID = createHouse(address, imageLink)
    joinHouse(currUser, houseID)
  };

  const handleClickOff = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button className="create-house-button" variant="outlined" onClick={handleClickOpen}>
        Create House
      </Button>
      <Dialog open={open} onClose={handleClickOff}>
        <DialogTitle>Create House</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the information fields below to create a new house:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="address"
            fullWidth
            variant="standard"
            onChange={event => setAddress(event.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Image Link"
            type="link"
            fullWidth
            variant="standard"
            onChange={event => setImageLink(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
