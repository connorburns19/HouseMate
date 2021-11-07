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

function AddExpense() {
  return (
    <div className="main-page main-page--dark">
      <ThemeProvider theme={theme}>
				<NavBar />
        <div className="add-expense-wrapper" color="primary">
				<div className="main-page__title title-color--primary"><h1>Add an Expense:</h1></div>
          <div className="add-expense__form">
            <FormControl className="add-expense__amount" variant="filled" color="secondary" focused>
              <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
              <FilledInput
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
            />
          </div>
          <div className="add-expense__form">
						<FormControl component="fieldset" variant="standard" className="add-expense__textfield">
        			<FormLabel color="secondary" focused component="legend">Select payees:</FormLabel>
						</FormControl>
						<FormGroup className="add-expense__checkboxes">
							<FormControlLabel control={<Checkbox color="secondary"/>} label={<FormLabel color="secondary" focused>Nathan DeGoey</FormLabel>} />
							<FormControlLabel control={<Checkbox color="secondary"/>} label={<FormLabel color="secondary" focused>Connor Burns</FormLabel>} />
							<FormControlLabel control={<Checkbox color="secondary"/>} label={<FormLabel color="secondary" focused>Sal Neri</FormLabel>} />
						</FormGroup>
					</div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default AddExpense;
