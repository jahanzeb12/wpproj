const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databasename = "librarydb";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect");
    }
    console.log("Database Connected");
    // const db = client.db(databasename);
    // db.collection("Users").insertOne({
    //   _id: "1",
    //   name: "Tariq",
    //   Age: 18,
    // });
  }
);
