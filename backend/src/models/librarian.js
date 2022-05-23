const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");

const librarianSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
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
  cnic: {
    type: String,
    required: true,
    minLength: 13,
    maxLength: 13,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain password");
      }
    },
    required: true,
  },
  join_date: {
    type: Date,
    default: new Date(),
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});
librarianSchema.statics.findByCredentials = async (email_address, password) => {
  //console.log(email_address);
  const user = await Librarian.findOne({ email_address });

  if (!user) {
    alert("invalid user");
  }
  const ismatch = await bcrypt.compare(password, user.password);
  console.log(ismatch);
  if (!ismatch) {
    alert("invalid password");
  }
  return user;
};
librarianSchema.methods.generateAuthTokens = async function () {
  const lib = this;
  const token = jwt.sign({ _id: lib._id.toString() }, "thisismylibrary");
  //console.log(token);
  lib.tokens = lib.tokens.concat({ token });
  await lib.save();

  return token;
};
librarianSchema.pre("save", async function (next) {
  const lib = this;
  if (lib.isModified("password")) {
    lib.password = await bcrypt.hash(lib.password, 8);
  }
  next();
});

const Librarian = mongoose.model("Librarian", librarianSchema);

module.exports = Librarian;
