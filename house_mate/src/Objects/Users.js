/*
    The files in the Objects folder are to represent instances of 
    the objects that will eventually be stored in the database during
    the final submission of the project.
*/
/*
SCHEMA:
{
    username: username of the user (primary key),
    password: password of the user,
    name: name of the user,
    phone: phone number of the user,
    houses: list of house id's that the user is in,
    expenses: list of expenses id's that the user has created,
    type: type of the user, either user or admin
}
*/

const users = [
{
    username: "user",
    password: "user",
    name: "user",
    phone: "999 999 9999",
    houses: [0, 1, 2],
    expenses: [],
    type: "User"
},
{
    username: "admin",
    password: "admin",
    name: "admin",
    phone: "888 888 8888",
    houses: [],
    expenses: [],
    type: "Admin"
},
{
    username: "burnsco2",
    password: "love309",
    name: "Connor Burns",
    phone: "123 456 7890",
    houses: [2],
    expenses: [],
    type: "Admin"
},
{
    username: "degoeyna",
    password: "love309",
    name: "Nathan DeGoey",
    phone: "226 868 8733",
    houses: [1, 2],
    expenses: [],
    type: "User"
},
{
    username: "luthraek",
    password: "love309",
    name: "Ekagra Luthra",
    phone: "000 000 0000",
    houses: [1],
    expenses: [],
    type: "User"
},
{
    username: "cernasal",
    password: "love309",
    name: "Sal Cerna Neri",
    phone: "111 111 1111",
    houses: [1],
    expenses: [],
    type: "User"
}]

export default users;