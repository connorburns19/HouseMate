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

});

// make a model using the User schema
const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = { Expense };
