//MongoDB authentication and connection
// import mongodb from 'mongodb';

const mongoose = require("mongoose");
const db = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const client = new MongoClient(process.env.DB_URI, {
//   useNewUrlParser: true,
// });

// client.connect((err) => {
//   const collection = client.db("message_board").collection("main");
//   // perform actions on the collection object
//   client.close();
// });




