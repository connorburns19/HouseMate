import NavBar from "../NavBar/NavBar.js";
import theme from "../Themes/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import './ViewExpense.css'
import { Table, TableCell, TableHead, TableRow , TableBody} from "@mui/material";

function addExpense(name, amount){
    return { name, amount };
}

const rows = [
    addExpense('Connor Burns', -12.23),
    addExpense('Nathan DeGoey', 10.50),
    addExpense('Sal Neri', 24.20),
]

function ViewExpense(){
    return(
        <div className="main-page main-page--dark">
            <ThemeProvider theme={theme}>
                <NavBar />
                <div className="view-expense-wrapper" color="primary">
				    <div className="main-page__title title-color--primary"><h1>You Owe $69.42</h1></div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">House Member</TableCell>
                                <TableCell align="center">Amount Owed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={ row.name } onClick={() => {console.log(row.name)}}>
                                    <TableCell align="center">
                                        { row.name }
                                    </TableCell>
                                    <TableCell align="center">
                                        { row.amount }
                                    </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default ViewExpense;