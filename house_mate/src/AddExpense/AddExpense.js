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


import { useState } from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddExpense({users}) {

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [payees, setPayees] = useState([]);

  const housemateList = [
    'Connor Burns', 'Nathan DeGoey', 'Sal Neri'
  ]

  const addExpense = () => {
    const expenseDetails = {
        'amount' : amount,
        'description' : description,
        'payees': payees
    }
    console.log(expenseDetails);
  }

  return (
    <div className="main-page main-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="add-expense-wrapper" color="primary">
          <div className="main-page__title title-color--primary">
            <h1>You've spent: ${users.expenses} this month</h1>
          </div>
          <div className="add-expense__form">
            <FormControl
              className="add-expense__amount"
              variant="filled"
              color="secondary"
              focused
            >
              <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
              <FilledInput onChange={event => setAmount(event.target.value)}
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
              onChange={event => setDescription(event.target.value)}
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
            <FormGroup onChange={event => setPayees(event.target.value)} className="add-expense__checkboxes">
              {housemateList.map((name) => (
                <React.Fragment key={name}>
                  <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label={
                    <FormLabel color="secondary" focused>
                      {name}
                    </FormLabel>
                  }
                />
                </React.Fragment>
              ))}
            </FormGroup>
            <Button onClick = {addExpense}
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
