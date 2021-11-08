import NavBar from "../NavBar/NavBar.js";
import theme from "../Themes/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import './ViewExpense.css'
import { Table, TableCell, TableHead, TableRow , TableBody} from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import houses from "../Objects/Houses.js";
import { users } from "../Objects/Users.js";


function addExpense(name, amount){
    return { name, amount };
}

function ViewExpense(){

    const { currHouse, currUser } = useContext(GlobalContext);

    const houseMembers = houses[currHouse].members;

    function createRows() {
        const rows = []
        for (var i=0; i < houseMembers.length; i++) {
            const roommate = houseMembers[i]
            if (roommate !== currUser){
                rows.push(addExpense(users[roommate].name, 10.50));
            }
        }
        return rows;
    }

    const rows = createRows();

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