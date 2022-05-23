const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

const userSchema = new mongoose.Schema({
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
    unique: true,
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
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthTokens = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismylibrary");
  console.log(token);
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// userSchema.methods.getPublicProfile = function () {
//   const user = this;
//   const userobj = user.toOject();
//   console.log(userobj);

//   delete userobj.password;
//   delete userobj.tokens;

//   console.log("helloo");
//   return userobj;
// };

userSchema.statics.findByCredentials = async (email_address, password) => {
  //console.log(email_address);
  const user = await User.findOne({ email_address });

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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
