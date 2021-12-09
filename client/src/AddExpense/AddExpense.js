import * as React from "react";
import NavBar from "../NavBar/NavBar.js";
import theme from "../Themes/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import "./AddExpense.css";
import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  TextField,
  FormLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import { addNewExpense } from "../Objects/Expense.js";

import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { houses } from "../Objects/Houses.js"; //change to database in Phase 2

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import axios from "axios";

function AddExpense() {
  const { currHouse, currUser } = useContext(GlobalContext);
  const [houseMembers, setHouseMembers] = useState([]);
  const [houseMemberIds, setHouseMemberIds] = useState([]);
  const tempArr = []

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [payees, setPayees] = useState([]);

  const getMembers = async () => {
    try{
      const res = await axios({
        method:"get",
        url: `http://localhost:5000/houses/info/${currHouse}`,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      })
      setHouseMemberIds(res.data.members);
      return res.data.members
    }catch(error){
      console.log(error)
    }
  }

  const getMembersUsername = async (userId) => {
    try{
      const res = await axios({
        method:"get",
        url:`http://localhost:5000/users/${userId}`,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      })
      tempArr.push(res.data.username)
      return res.data.username
    }catch(error){
      console.log(error)
    }
  }

  React.useEffect(async ()=>{
    const uidList = await getMembers();
    for(var i=0; i<uidList.length; i++){
      await getMembersUsername(uidList[i])
    }
    setHouseMembers(tempArr)
  }, [])

  const addExpense = () => {
    createExpense(amount, description);
  };

  const createExpense = async (amount, description) =>{
    try{
      const res = await axios({
        method:"post",
        url:`http://localhost:5000/expense/${currUser}/${currHouse}`,
        data: { amount: amount, description: description, creatorId:currUser, payees:houseMemberIds },
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      })

    }catch(error){

    }
  }

  return (
    <div className="main-page main-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="add-expense-wrapper" color="primary">
          <div className="main-page__title title-color--primary">
            <h1>You've spent: $45 this month</h1>
          </div>
          <div className="add-expense__form">
            <FormControl
              className="add-expense__amount"
              variant="filled"
              color="secondary"
              focused
            >
              <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
              <FilledInput
                onChange={(event) => setAmount(event.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="add-expense__form">
            <TextField
              className="add-expense__description"
              fullWidth
              color="secondary"
              focused
              label="Description"
              multiline
              rows={4}
              variant="filled"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="add-expense__form">
            <FormControl
              component="fieldset"
              variant="standard"
              className="add-expense__textfield"
            >
              <FormLabel color="secondary" focused component="legend">
                Select payees:
              </FormLabel>
            </FormControl>
            <FormGroup className="add-expense__checkboxes">
              {houseMembers.map((name) => (
                <React.Fragment key={name}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={name}
                        onChange={(event) => {
                          if (event.target.checked) {
                            if (payees.includes(event.target.value)) {
                              return;
                            } else {
                              setPayees([...payees, event.target.value]);
                            }
                          } else {
                            const index = [...payees].indexOf(
                              event.target.value
                            );
                            if (index > -1) {
                              setPayees([...payees].splice(index, 1));
                            }
                          }
                        }}
                        color="secondary"
                      />
                    }
                    label={
                      <FormLabel color="secondary" focused>
                        {name}
                      </FormLabel>
                    }
                  />
                </React.Fragment>
              ))}
            </FormGroup>
            <Button
              onClick={addExpense}
              startIcon={<AddIcon />}
              color="secondary"
              variant="contained"
              className="add-expense__button"
            >
              Submit
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default AddExpense;
