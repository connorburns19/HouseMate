import NavBar from "../NavBar/NavBar.js";
import theme from "../Themes/theme.js";
import { ThemeProvider } from '@mui/material/styles';
import './AddExpense.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";

function AddExpense(){
    return(
        <div>
            <ThemeProvider theme={theme}>
            <NavBar />
            <div className="main-page main-page--dark">
                    <div className="add-expense-wrapper" color="primary">
                        <FormControl variant="filled" color="secondary">
                            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                        </FormControl>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default AddExpense;