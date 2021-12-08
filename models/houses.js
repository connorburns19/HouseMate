'use strict';

const mongoose = require('mongoose')
const { UserSchema } = require('./users')
const { ExpenseSchema } = require('./expenses')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const HouseSchema = new mongoose.Schema({

	address: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
	},
	imageLink:{
		type: String,
		required:true,
		minlength:1,
		trim: true
	}, 
	members: [String], // userIDs
	expenses: [String] // expenseIDs

})

// make a model using the House schema
const House = mongoose.model('House', HouseSchema)
module.exports = { House }