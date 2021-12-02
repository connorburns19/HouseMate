/*
    The files in the Objects folder are to represent instances of 
    the objects that will eventually be stored in the database during
    the final submission of the project.
*/

export const expenses = {
    0:{
        amount:"10.5",
        description:"eggs and bread",
        payees: ["user", "cernasal"]
    },
    1:{
        amount:"5",
        description:"milk",
        payees: ["cernasal"]
    }
}

export function addNewExpense(amount, description, payees){
    const expenseDetails = {
        'amount' : amount,
        'description' : description,
        'payees': payees
    }
    const expenseId = Object.keys(expenses).length;
    expenses[expenseId] = expenseDetails;
    console.log(expenses)
}
