"use strict";

const mongoose = require("mongoose");
const { UserSchema } = require("users");
const { User } = require("./users");
// const validator = require('validator')
// const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const ExpenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
    minlength: 1,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  payees: [UserSchema],
  creator: UserSchema,
  //   payees: [
  //     {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       trim: true,
  //     },
  //   ],
});

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
// ExpenseSchema.pre('save', function(next) {
// 	const expense = this; // binds this to User document instance

// 	// checks to ensure we don't hash password more than once
// 	if (expense.isModified('password')) {
// 		// generate salt and hash the password
// 		bcrypt.genSalt(10, (err, salt) => {
// 			bcrypt.hash(user.password, salt, (err, hash) => {
// 				user.password = hash
// 				next()
// 			})
// 		})
// 	} else {
// 		next()
// 	}
// })
// make a model using the User schema
const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = { Expense };
