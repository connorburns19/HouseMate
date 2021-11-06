/*
    The files in the Objects folder are to represent instances of 
    the objects that will eventually be stored in the database during
    the final submission of the project.
*/
/*
{
    name: name of the user,
    phone: phone number of the user,
    username: username of the user,
    password: password of the user,
    houses: list of house id's that the user is in,
    type: type of the user, either user or admin
}
*/

const users = [
{
    name: "user",
    phone: "999 999 9999",
    username: "user",
    password: "user",
    houses: [0, 5, 6],
    type: "User"
},
{
    name: "admin",
    phone: "888 888 8888",
    username: "admin",
    password: "admin",
    houses: [5, 6],
    type: "Admin"
},
{
    name: "Connor Burns",
    phone: "123 456 7890",
    username: "burnsco2",
    password: "love309",
    houses: [0, 2, 3],
    type: "Admin"
},
{
    name: "Nathan DeGoey",
    phone: "226 868 8733",
    username: "degoeyna",
    password: "love309",
    houses: [0, 1, 2],
    type: "User"
},
{
    name: "Ekagra Luthra",
    phone: "000 000 0000",
    username: "luthraek",
    password: "love309",
    houses: [4],
    type: "User"
},
{
    name: "Sal Cerna Neri",
    phone: "111 111 1111",
    username: "cernasal",
    password: "love309",
    houses: [2],
    type: "User"
}]