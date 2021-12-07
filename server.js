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
// function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
//     return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
// }
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
        email: req.body.email,
        password: req.body.password
    })
        // Save the user
    const newUser = await user.save()
    res.send(newUser)
})

// app.get("*", (req, res) => {
//     // check for page routes that we expect in the frontend to provide correct status code.
//     const goodPageRoutes = ["/"];
//     if (!goodPageRoutes.includes(req.url)) {
//         // if url not in expected page routes, set status to 404.
//         res.status(404);
//     }

//     // send index.html
//     res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });


//the forward slash is the endpoint
app.get('/', (req, res) => res.send('Hello World')) //http request to localhost 5000, should send hello world back
app.get('/users', (req,res)=> res.send("this is where we send users"))

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});