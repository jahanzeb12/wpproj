const bcrypt = require("bcryptjs/dist/bcrypt");
const express = require("express");
require("./db/mongoose");
var cors = require("cors");
const Book = require("./models/books");
const Feedback = require("./models/feedbacks");
const User = require("./models/users");
const Librarian = require("./models/librarian");
const Rentbooks = require("./models/rentedbooks");
const auth = require("./middleware/auth");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.post("/newbook", async (req, res) => {
  const newBook = await new Book(req.body);
  try {
    await newBook.save();
    res.send(newBook);
  } catch (e) {
    res.send(e);
  }
});

app.get("/viewbook", async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (e) {
    res.send(e);
  }
});

app.delete("/deletebook/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.send("Book not found");
    }
    res.send(book);
  } catch (e) {
    res.send(e);
  }
});

app.post("/newfeedback", async (req, res) => {
  console.log(req);
  const newFB = new Feedback(req.body);
  try {
    await newFB.save();
    res.send(newFB);
  } catch (e) {
    res.send(e);
  }
});

app.get("/viewfeedback", async (req, res) => {
  try {
    const fb = await Feedback.find({});
    res.send(fb);
  } catch (e) {
    res.send(e);
  }
});

app.post("/newuser", async (req, res) => {
  const newuser = new User(req.body);

  try {
    await newuser.save();
    const token = await newuser.generateAuthTokens();
    res.send({ username: newuser.firstname, token, role: "user" });
  } catch (e) {
    res.send(e);
  }
});
app.get("/viewusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.send(e);
  }
});
app.delete("/removeuser/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const email = user.email_address;
    console.log(email);
    const ans = await Rentbooks.find({ email_address: email });
    if (ans.length) {
      res.send({
        issued: "The user can't be removed since he has a book issued",
      });
    } else {
      const newuser = await User.findByIdAndDelete(req.params.id);
      console.log(newuser);
    }
  } catch (e) {
    res.send(e);
  }
});

app.get("/viewuser/me", auth, async (req, res) => {
  res.send(req.user);
});

app.post("/user/login", async (req, res) => {
  console.log("runn");

  try {
    const user = await User.findByCredentials(
      req.body.email_address,
      req.body.password
    );
    console.log(user);

    if (user) {
      const token = await user.generateAuthTokens();
      console.log(token);

      res.status(200).send({
        user: user.firstname,
        email: user.email_address,
        token,
        role: "user",
      });
    }
  } catch (Error) {
    res.send(Error);
  }
});

app.post("/librarian/login", async (req, res) => {
  console.log("runn");
  try {
    const lib = await Librarian.findByCredentials(
      req.body.email_address,
      req.body.password
    );
    console.log(lib);

    if (lib) {
      const token = await lib.generateAuthTokens();
      //console.log(token);

      res.status(200).send({
        user: lib.firstname,
        email: lib.email_address,
        token,
        role: "librarian",
      });
    }
  } catch (Error) {
    res.send(Error);
  }
});

app.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    console.log(req.user.tokens);
    await req.user.save();
    res.send("Logout successful");
  } catch (e) {
    res.send(e);
  }
});

app.post("/user/logoutall", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send("Logout from all is succesful");
  } catch (e) {
    res.send(e);
  }
});

app.post("/newlibrarian", async (req, res) => {
  const newlib = await new Librarian(req.body);
  //console.log(newlib);
  try {
    await newlib.save();
    res.send(newlib);
  } catch (e) {
    res.send(e);
  }
});

app.get("/viewlibrarian", async (req, res) => {
  try {
    const libraryemp = await Librarian.find({});
    res.send(libraryemp);
  } catch (e) {
    res.send(e);
  }
});

app.delete("/removelibrarian/:id", async (req, res) => {
  try {
    const librarians = await Librarian.findByIdAndDelete(req.params.id);
    res.send(librarians);
  } catch (e) {
    res.send(e);
  }
});

app.post("/returnbook/:id", async (req, res) => {
  const bookname = req.params.id;
  console.log(bookname);
  try {
    await Book.findOneAndUpdate({ title: bookname }, { status: true });

    await Rentbooks.findOneAndDelete({ title: bookname });

    res.send("Successful");
  } catch (e) {
    res.send(e);
  }
});

app.post("/changereturndate/:id/:email", async (req, res) => {
  const bookname = req.params.id;
  const email = req.params.email;
  console.log(bookname);
  console.log(email);
  rbkdetails = await Rentbooks.findOne({
    title: bookname,
    email_address: email,
  });
  var currentdate = rbkdetails.return_date;
  var newdate = currentdate.setDate(currentdate.getDate() + 7);
  const newreturndate = new Date(newdate);
  await Rentbooks.findOneAndUpdate(
    {
      title: bookname,
      email_address: email,
    },
    { return_date: newreturndate }
  );
  res.send("Return date updated");
});

app.post("/rentbook", async (req, res) => {
  try {
    // console.log("hellooo");
    // console.log(req);
    //console.log(req.body);
    const email = req.body.email_address;
    const bookname = req.body.title;
    const user = await User.findOne({ email_address: email });
    const checkbookscount = await Rentbooks.countDocuments({
      email_address: email,
    });
    const bookavailability = await Book.findOne({ title: bookname });
    //console.log(checkbookscount);
    if (checkbookscount < 3 && bookavailability.status === true) {
      console.log(user);
      if (user) {
        const rbk = await new Rentbooks(req.body);
        await rbk.save();
        await Book.findOneAndUpdate({ title: bookname }, { status: false });
        res.send(rbk);
      }
    } else {
      res.status(501).send("You have reached the limit to issue the books");
    }
  } catch (e) {
    res.send(e);
  }
});

app.get("/viewrentedbooks", async (req, res) => {
  try {
    const books = await Rentbooks.find();
    res.send(books);
  } catch (e) {
    res.send(e);
  }
});

app.get("/userrentedbooks/:id", async (req, res) => {
  try {
    const email_address = req.params.id;
    const books = await Rentbooks.find({ email_address });
    res.send(books);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log("Server is up and running");
});

// const myfunc = async () => {
//   const password = "tariq1234";
//   const hashedpassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedpassword);

//   const ismatch = await bcrypt.compare("tariq1234", hashedpassword);
//   console.log(ismatch);
// };

// const jwt = require("jsonwebtoken");
// const myfunc = async () => {
//   const token = jwt.sign({ _id: "hello1234" }, "thisismylibrary", {
//     expiresIn: "7days",
//   });
//   console.log(token);
//   const data = jwt.verify(token, "thisismylibrary");
//   console.log(data);
// };
// myfunc();
