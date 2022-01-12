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
	},
	houses: [String]

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// METHOD taken from CSC309 sample code provided by Mark Kazakevich, in the class which this was developed (CSC309, University of Toronto)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// METHOD taken from CSC309 sample code, provided by Mark Kazakevich, in the class which this was developed (CSC309, University of Toronto)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
UserSchema.statics.findByUsernamePassword = function (username, password) {
	const User = this; // binds this to the User model
  
	// First find the user by their email
	return User.findOne({ username: username }).then((user) => {
	  if (!user) {
		return Promise.reject(); // a rejected promise
	  }
	  // if the user exists, make sure their password is correct
	  return new Promise((resolve, reject) => {
		bcrypt.compare(password, user.password, (err, result) => {
		  if (result) {
			resolve(user);
		  } else {
			reject();
		  }
		});
	  });
	});
  };
  

const User = mongoose.model('User', UserSchema)
module.exports = { User, UserSchema }
