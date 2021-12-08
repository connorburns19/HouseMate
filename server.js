require('dotenv').config()

const express = require('express');
const app = express()
const { mongoose } = require("./db/mongoose");
const { ObjectId } = require('mongodb');

app.use(express.json());
app.use(express.urlencoded( {extended: false }));

const { User } = require("./models/users");
const { House } = require("./models/houses");
const { Expense } = require("./models/expenses");
const port = process.env.PORT || 5000;
const log = console.log;

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

//to add a new user
/* Request body expects:
{
    "name": <username>,
    "password": <password>,
    "phoneNumber": <phoneNumber>,
    "userName": <username>
}
*/
app.post('/users', mongoChecker, async (req, res) => {
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

//delete a user
app.delete('/users', mongoChecker, async(req, res) =>{

    const uid = req.body.id

    // Validate id immediately.
	if (!ObjectId.isValid(uid)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}

    // check mongoose connection established.
	if(mongoose.connection.readyState != 1){
        log('Issue with mongoose connection')
        res.status(500).send('Internal Server Error')
        return;
    }

    // If id valid, findById
	try {
		const user = await User.findByIdAndDelete(uid)
		if (!user) {
			res.status(404).send('Resource not found')  // could not find this restaurant
        }
        else {
            res.send("User deleted.")
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

//to get all the users (for admin)
app.get('/users', mongoChecker, async (req, res)=>{
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } 

    try {
        const users = await User.find()
        res.send(users)
    } catch(error) {
        log(error)
        if (isMongoError(error)) { 
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    }
})

//to get user info for a given user (profile page)
app.get('/users/:userId', mongoChecker, async (req, res)=>{
    const id = req.params.userId

    // // Validate id immediately.
    if (!ObjectId.isValid(id)) {
        res.status(404).send()  // if invalid id, definitely can't find resource, 404.
        return;  // so that we don't run the rest of the handler.
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        console.log('Issue with mongoose connection')
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
        console.log(error)
        if (isMongoError(error)) { 
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request')
        }
    } 
})

//for making changes to the user's name and phone number
/* Request body expects: 
// { 
//     "name": <name> 
//     "phoneNumber": <phone number> 
} 
*/ 
app.patch('/users/:userId', mongoChecker, async (req,res)=>{

    const id = req.params.userId

    // Validate id immediately.
	if (!ObjectId.isValid(id)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}

    // check mongoose connection established.
	if(mongoose.connection.readyState != 1){
        log('Issue with mongoose connection')
        res.status(500).send('Internal Server Error')
        return;
    }

    // If id valid, findById
	try {
		const user = await User.findById(id)
		if (!user) {
			res.status(404).send('Resource not found')  // could not find this restaurant
		} else { 
            // update image
            // what if they want to change their password? Re-encrypt new one
            user.name = req.body.name
            user.phoneNumber = req.body.phoneNumber
            const result = await user.save()
            res.send(result)
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
        members: []
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
app.get('/houses/info/:houseId', mongoChecker, async (req,res)=>{
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
app.post('/houses/:userId', mongoChecker, async (req,res)=>{
    const uid = req.params.userId
    const hid = req.body.id //body passed in is just the house id

    // Validate id immediately.
	if (!ObjectId.isValid(uid)) {
		res.status(404).send()
		return;
	}
	
    // check mongoose connection established.
	if(mongoose.connection.readyState != 1){
        log('Issue with mongoose connection')
        res.status(500).send('Internal Server Error')
        return;
    }

    // If id valid, findById
	try {
		const user = await User.findById(uid)
        const house = await House.findById(hid)
		if (!user || !house) {
			res.status(404).send('Resource not found')  // could not find this restaurant
		} else { 
            user.houses.push(hid) // store the house id in the users houses list
            const uresult = await user.save()
            house.members.push(uid) //store the user id in the houses member list
            const hresult = await house.save()
            res.send({ house: hresult, user: uresult })
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

//delete a user from a house
app.delete('/users/house', mongoChecker, async(req, res) =>{

    const uid = req.body.uid
    const hid = req.body.hid

    // Validate id immediately.
	if (!ObjectId.isValid(uid)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}

    // Validate id immediately.
	if (!ObjectId.isValid(hid)) {
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}

    // check mongoose connection established.
	if(mongoose.connection.readyState != 1){
        log('Issue with mongoose connection')
        res.status(500).send('Internal Server Error')
        return;
    }

    // If id valid, findById
	try {
		const house = await House.findById(hid)
        const user = await User.findById(uid)
		if (!house) {
			res.status(404).send('Resource not found')  // could not find this restaurant
        }
        else {
            const updated_members = house.members.filter(id => id !== uid)
            house.members = updated_members
            const house_result = await house.save()
            const updated_houses = user.houses.filter(id => id !== hid)
            user.houses = updated_houses
            const user_result = await user.save()
            res.send({house: house_result, user: user_result})
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

//to get all the houses for one person (houses page)
app.get('/houses/:userId', mongoChecker, async (req,res)=>{
    const id = req.params.userId
    console.log(id)

    // // Validate id immediately.
    if (!ObjectId.isValid(id)) {
        res.status(404).send()  // if invalid id, definitely can't find resource, 404.
        return;  // so that we don't run the rest of the handler.
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        console.log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    }

    // If id valid, findById
    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(404).send('Resource not found') 
        } else { 
            res.send(user.houses)
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

// NEW EXPENSES ROUTES

// app.get('/expense/:userId/:houseId/:owed') {
//     //get all expenses associated with this user account on this house
//     //if owed
//     //filter for the expenses where userId is in the payees list
//     //else
//     //filter for the expenses where userId is the creator
// }

// app.post('/expense/:userId/:houseId') {
//     //post a new expense
//     //set userId as the creator
//     //add this expense to the expenses array in houseId
//     //set payees list as the payees list in the expense object
//     //save
// }

// app.patch('/expense/:userId/:houseId/:expenseId') {
//     //take the userId out of the payees list for this expense
// }

// app.delete('/expense/:userId/:houseId/:expenseId') {
//     //delete this expense
// }

// OLD EXPENSES ROUTES

// //to get all the expenses (view expenses page)
// app.get('/view-expense/:userId/:houseId', mongoChecker, async (req,res)=>{
//     console.log(req.body)
//     const userId = req.params.userId
//     console.log(userId)
// })

// //to pay off expenses (view expenses page) //I think this should be a patch, not a post because we're going to be patching 'payees' array in 'expense'
// app.post('/view-expense/:userId/:houseId', mongoChecker, async (req,res)=>{
//     console.log(req.body)
//     const userId = req.params.userId
//     console.log(userId)
// })

// //to add an expense (add expense page)
// app.post('/add-expense/:userId/:houseId', mongoChecker, async (req,res)=>{
//     console.log(req.body)
//     const userId = req.params.userId
//     console.log(userId)
// })

// //to get user's roommates for adding an expense (add expense page)
// app.get('/add-expense/:userId/:houseId', mongoChecker, async (req,res)=>{
//     console.log(req.body)
//     const userId = req.params.userId
//     console.log(userId)
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});