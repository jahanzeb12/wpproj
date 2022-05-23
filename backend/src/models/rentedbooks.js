const mongoose = require("mongoose");
const validator = require("validator");
const rentbkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  customer_name: {
    type: String,
    required: true,
  },
  email_address: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not an authentic email");
      }
    },
  },
  issue_date: {
    type: Date,
    default: new Date(),
  },
  return_date: {
    type: Date,
    default: function () {
      var date = new Date();
      var newdate = date.setDate(date.getDate() + 7);
      return new Date(newdate);
    },
  },
});

const Rentbooks = mongoose.model("Rentbooks", rentbkSchema);

module.exports = Rentbooks;
