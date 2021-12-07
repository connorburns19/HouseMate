require('dotenv').config()

const express = require('express');
const app = express()
const { mongoose } = require("./db/mongoose");

app.use(express.json());
app.use(express.urlencoded( {extended: false }));

const { User } = require("./models/users");
const port = process.env.PORT || 5000;

console.log(port)

const path = require('path');

var environment = process.env.NODE_ENV || 'production';
console.log("environment: ", environment)

const cors = require('cors')
if (environment !== 'production') { app.use(cors()) }

app.use(express.static(path.join(__dirname, "/client/build")));

const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

app.post('/', mongoChecker, async (req, res) => {
    console.log(req.body)

    // Create a new user
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        username: req.body.username,
        phoneNumber: req.body.phoneNumber
    })
        // Save the user
    const newUser = await user.save()
    res.send(newUser)
})

//to get user info for a given user (profile page)
app.get('/:username', mongoChecker, async (req, res)=>{
    console.log(req.body)
    const username = req.params.username
    console.log(username)
})

//for adding a new house to a user (houses page)
app.post('/houses/:username', mongoChecker, async (req,res)=>{
    console.log(req.body)
    const username = req.params.username
    console.log(username)
})

//to get all the houses for one person (houses page)
app.get('/houses/:username', mongoChecker, async (req,res)=>{
    console.log(req.body)
    const username = req.params.username
    console.log(username)
})

//to get all the houses (for admin)
app.get('/houses', mongoChecker, async (req, res)=>{
    console.log(req.body)
})

//to get all the users (for admin)
app.get('users', mongoChecker, async (req, res)=>{
    console.log(req.body)
})

//to get all the expenses (view expenses page)
app.get('/view-expense/:username/:houseId', mongoChecker, async (req,res)=>{
    console.log(req.body)
    const username = req.params.username
    console.log(username)
})

//to pay off expenses (view expenses page)
app.post('/view-expense/:username/:houseId', mongoChecker, async (req,res)=>{
    console.log(req.body)
    const username = req.params.username
    console.log(username)
})

//to get user's roommates for adding an expense (add expense page)
app.get('/add-expense/:username/:houseId', mongoChecker, async (req,res)=>{
    console.log(req.body)
    const username = req.params.username
    console.log(username)
})

//to add an expense (add expense page)
app.post('/add-expense/:username/:houseId', mongoChecker, async (req,res)=>{
    console.log(req.body)
    const username = req.params.username
    console.log(username)
})

//get house info for a specific house for a specific user (people page)
app.get('/:username/:houseId', mongoChecker, async (req,res)=>{
    console.log(req.body)
    const username = req.params.username
    const houseId = req.params.houseId
    console.log(username)
    console.log(houseId)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});