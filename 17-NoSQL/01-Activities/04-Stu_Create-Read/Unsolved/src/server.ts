import express from "express";
// Run npm install mongodb and require mongodb and MongoClient class
import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Create variable to hold our database name
const dbName = "inventoryDB";

// Use connect method to connect to the mongo server
await client.connect().catch((err) => {
  console.log(err);
});

const db = client.db(dbName);

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

// Post request to create a single document to collection
app.post("/books", async (req, res) => {
  try {
    // TODO: Explain what the following MongoDB method does/ accesses and inserts a single item into the database
    const results = await db
      .collection("bookCollection")
      .insertOne({ title: req.body.title, author: req.body.author });

    // Sends results
    res.status(201).json(results);
  } catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

// Post request to add multiple sample documents to collection
app.post("/books/seed", async (_req, res) => {
  try {
    // TODO: Explain what the following MongoDB method does/ accesses and adds multiple items to the database
    const results = await db
      .collection("bookCollection")
      .insertMany([
        { title: "Oh the Places We Will Go!" },
        { title: "Diary of Anne Frank" },
      ]);

    // Sends results
    res.status(201).json(results);
  } catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

// Get request to read all the documents in a collection
app.get("/books", async (_req, res) => {
  try {
    // TODO: Explain what the following MongoDB methods do/ use db connection to find all documents in collection
    const results = await db.collection("bookCollection").find({}).toArray();

    // Sends results
    res.status(200).json(results);
  } catch (error) {
    // Handles error
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
