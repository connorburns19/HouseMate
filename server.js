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


//the forward slash is the endpoint
app.get('/', (req, res) => res.send('Hello World')) //http request to localhost 5000, should send hello world back
app.get('/users', (req,res)=> res.send("this is where we send users"))

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});