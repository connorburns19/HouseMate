'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
	},
	username:{
		type:String,
		required:true,
		minlength:1,
		trim: true,
		unique: true
	}, 
	password: {
		type: String,
		required: true,
		minlength: 1
	},
	phoneNumber: {
		type: String,
		required: true,
		minlength: 5
	}

})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})
// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User, UserSchema }