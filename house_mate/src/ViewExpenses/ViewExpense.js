import NavBar from "../NavBar/NavBar.js";
import theme from "../Themes/theme.js";
import { ThemeProvider } from "@mui/material/styles";

function addExpense(name, amount){
    
}

function ViewExpense(){
    return(
        <div className="main-page main-page--dark">
            <ThemeProvider theme={theme}>
                <NavBar />
                <div className="add-expense-wrapper" color="primary">
				    <div className="main-page__title title-color--primary"><h1>You Owe $69.42</h1></div>

                </div>
            </ThemeProvider>
        </div>
    )
}

export default ViewExpense;