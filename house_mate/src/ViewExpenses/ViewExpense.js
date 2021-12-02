import NavBar from "../NavBar/NavBar.js";
import theme from "../Themes/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import './ViewExpense.css'
import { Table, TableCell, TableHead, TableRow , TableBody} from "@mui/material";
import Button from "@mui/material/Button";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import {houses} from "../Objects/Houses.js"; //change to database in Phase 2
import { users } from "../Objects/Users.js"; //change to database in Phase 2
import  { expenses } from "../Objects/Expense";
import { useState } from "react";



function addExpense(name, amount){
    return { name, amount };
}

function payOff(){

};

function ViewExpense(){

    const [open, setOpen] = useState(false);

    const { currHouse, currUser } = useContext(GlobalContext);

    const houseMembers = houses[currHouse].members;

    function createRows() {
        const rows = []
        for (var i=0; i < houseMembers.length; i++) {
            const roommate = houseMembers[i]
            if (roommate !== currUser){
                for (var j = 0; j < users[roommate].expenses.length; j++){
                    rows.push(addExpense(users[roommate].name, expenses[users[roommate].expenses[j]].amount));
                }
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
				    <div className="main-page__title title-color--primary"><h1>You Owe ${rows.length*10.50}</h1></div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">House Member</TableCell>
                                <TableCell align="center">Amount Owed</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={ row.name }>
                                    <TableCell align="center">
                                        { row.name }
                                    </TableCell>
                                    <TableCell align="center">
                                        { row.amount }
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color="primary" variant="contained"
                                        onClick={()=>{
                                            console.log('paid off');
                                        }}>
                                            Pay off
                                        </Button>
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