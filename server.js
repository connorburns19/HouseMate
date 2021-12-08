require('dotenv').config()

const express = require('express');
const app = express()
const { mongoose } = require("./db/mongoose");
const { ObjectId } = require('mongodb')

app.use(express.json());
app.use(express.urlencoded( {extended: false }));

const { User } = require("./models/users");
const { House } = require("./models/houses")
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

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
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
app.get('/:id', mongoChecker, async (req, res)=>{
    const id = req.params.id

    // // Validate id immediately.
    if (!ObjectId.isValid(id)) {
        res.status(404).send()  // if invalid id, definitely can't find resource, 404.
        return;  // so that we don't run the rest of the handler.
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    // If id valid, findById
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send('Resource not found') 
        } else { 
            res.send(user)
        }
    } catch(error) {
        log(error)
        if (isMongoError(error)) { 
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    } 
})

//for adding a new house (admin)
app.post('/houses', mongoChecker, async (req,res)=>{
    console.log(req.body)

    // Create a new user
    const house = new House({
        address: req.body.address,
        imageLink: req.body.imageLink,
        members: req.body.members
    })
        // Save the user
    const newHouse = await house.save()
    res.send(newHouse)
})

//for getting all houses (admin)
app.get('/houses', mongoChecker, async (req,res)=>{

    // check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	// Get the houses
	try {
		const houses = await House.find()
		res.send(houses)
	} catch(error) {
		log(error)
		if (isMongoError(error)) { 
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request')
		}
	}
})


//for getting house based on Id (admin)
app.get('/houses/:houseId', mongoChecker, async (req,res)=>{
    const id = req.params.houseId

    // Validate id immediately.
    if (!ObjectId.isValid(id)) {
        res.status(404).send()  // if invalid id, definitely can't find resource, 404.
        return;  // so that we don't run the rest of the handler.
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    // If id valid, findById
    try {
        const house = await House.findById(id)
        if (!house) {
            res.status(404).send('Resource not found') 
        } else { 
            res.send(house)
        }
    } catch(error) {
        log(error)
        if (isMongoError(error)) { 
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    } 
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