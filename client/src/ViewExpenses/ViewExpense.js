import * as React from "react";
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
import axios from "axios";



function addExpense(name, amount, description, expenseId){
    return { name, amount, description, expenseId };
}

function payOff(){

};



function ViewExpense(){

    const [open, setOpen] = useState(false);

    const { currUser, currHouse } = useContext(GlobalContext);
    const [creators, setCreators] = useState([]);
    const [amounts, setAmounts] = useState([])
    const [rows, setRows] = useState([])
    const [total, setTotal] = useState(0)
    // const [houseMemberIds, setHouseMemberIds] = useState([]);
    let expenses = []
    let tempArr = []

    const getExpenseInfo = async () => {
        try{
          const res = await axios({
            method:"get",
            url:`https://secret-cliffs-62941.herokuapp.com/expense/${currUser}/${currHouse}/false`,
            headers: {
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            },
          })
          return res.data
        }catch(error){
          console.log(error)
        }
      }



      React.useEffect(async ()=>{
        expenses = await getExpenseInfo();
        for(var i = 0; i < expenses.length; i++){
            await getMembersName(expenses[i].creator)
        }
        
        setCreators(tempArr);
        createRows();

      },[creators])

      const getMembersName = async (userId) => {
        try{
          const res = await axios({
            method:"get",
            url:`https://secret-cliffs-62941.herokuapp.com/users/${userId}`,
            headers: {
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            },
          })
          tempArr.push(res.data.name)
          return res.data.name
        }catch(error){
          console.log(error)
        }
      }


      const payOffExpense = async (eid) => {
        try{
            const res = await axios({
              method:"patch",
              url:`https://secret-cliffs-62941.herokuapp.com/expense/${currUser}/${currHouse}/${eid}`,
              headers: {
                "Access-Control-Allow-Headers":
                  "Origin, X-Requested-With, Content-Type, Accept",
              },
            })
            console.log(res.data)
          }catch(error){
            console.log(error)
          }
      }

    function createRows() {
        const rows = []
        
            for (var j = 0; j < expenses.length; j++){
                if(expenses[j].creator !== currUser){
                    rows.push(addExpense(creators[j], expenses[j].amount, expenses[j].description, expenses[j]._id))
                    setTotal(total+expenses[j].amount)
                }
            } 
        setRows(rows);
    }

    return(
        <div className="main-page main-page--dark">
            <ThemeProvider theme={theme}>
                <NavBar />
                <div className="view-expense-wrapper" color="primary">
				    <div className="main-page__title title-color--primary"><h1>Who You Owe:</h1></div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">House Member</TableCell>
                                <TableCell align="center">Amount Owed</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={ row.expenseId }>
                                    <TableCell align="center">
                                        { row.name }
                                    </TableCell>
                                    <TableCell align="center">
                                        { `${row.amount}` }
                                    </TableCell>
                                    <TableCell align="center">
                                        { `${row.description}` }
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button color="primary" variant="contained"
                                        onClick={() => {payOffExpense(row.expenseId)}}>
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