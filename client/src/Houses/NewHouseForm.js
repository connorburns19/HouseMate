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
import axios from 'axios';

export default function NewHouseFormDialog({setHouseMember}) {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState();
  const [imageLink, setImageLink] = React.useState();
  const { currUser } = React.useContext(GlobalContext);
  const [houseId, setHouseId] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const submitValue = (userid, hid) => {
    addUserToHouse(userid, hid);
  }

  const addUserToHouse = async (userid, hid) =>{
  try{
    const res = await axios({
      method: "post",
      url: `http://localhost:5000/houses/${userid}`,
      data: { id:`${hid}` },
      headers: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      }
    });
    } catch (error) {
      console.log(error)
    }
  }

  const handleClose = async () => {
    setHouseMember(false); //make sure that one peice of the state was changing
    const hid = await createHouse();
    submitValue(currUser, hid);
    setOpen(false);
  };

  const handleClickOff = () => {
    setOpen(false);
  }

  React.useEffect(async () => {
    await createHouse();
  }, []);

  const createHouse = async () => {
    try{
      const res = await axios({
          method: "post",
          url: "http://localhost:5000/houses/",
          data: { address:address, imageLink: imageLink },
          headers: {
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        }
      });
      setHouseId(res.data._id);
      return res.data._id
    }catch(error){

    }
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
          <Button onClick={handleClickOff}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
