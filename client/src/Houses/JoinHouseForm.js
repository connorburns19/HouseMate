// Credit: https://mui.com/components/dialogs/
import * as React from "react";
import "./HousePage.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { joinHouse } from "../Objects/Users";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";
import { getSessionCookie } from "../session";
const session = getSessionCookie();

export default function JoinHouseFormDialog({ setHouseMember }) {
  const [open, setOpen] = React.useState(false);
  const [houseID, setHouse] = React.useState();
  const { currUser } = React.useContext(GlobalContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setHouseMember(false); //make sure that one peice of the state was changing
    submitValue(currUser);
    setOpen(false);
  };

  const handleClickOff = () => {
    setOpen(false);
  };

  const submitValue = (userid) => {
    addUserToHouse(userid);
  };

  const addUserToHouse = async (userid) => {
    try {
      const res = await axios({
        method: "post",
        url: `http://localhost:5000/houses/${userid}`,
        data: { id: houseID },
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        className="join-house-button"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Join House
      </Button>
      <Dialog open={open} onClose={handleClickOff}>
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
            onChange={(event) => setHouse(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOff}>Cancel</Button>
          <Button onClick={handleClose}>Join</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
