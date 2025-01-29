import React from 'react';

function MongoMacCheatSheet() {
  return (
    <div className="container">
      <h1>MongoDB Cheat Sheet (macOS)</h1>
      <p>
        MongoDB is a NoSQL document database known for its flexibility, scalability,
        and JSON-like document structure. Below you'll find references for working
        with MongoDB locally on macOS and remotely via MongoDB Atlas.
      </p>

      {/* LOCAL USAGE SECTION */}
      <h2>Local Usage on macOS</h2>
      <p>
        On macOS, you can install MongoDB Community Edition via Homebrew, then use the MongoDB shell
        (<code>mongosh</code>) to interact with your local database.
      </p>
      <pre className="code-block">
<code>
{`# Install MongoDB Community Edition (example: version 6.0)
brew tap mongodb/brew
brew install mongodb-community@6.0

# Start MongoDB as a background service
brew services start mongodb-community@6.0

# Connect to the MongoDB shell
mongosh`}
</code>
      </pre>

      <h3>Basic Shell Commands</h3>
      <pre className="code-block">
<code>
{`# Show all databases
show dbs

# Switch to / create a database
use myDatabase

# Show collections in the current database
show collections

# Drop the current database
db.dropDatabase()

# Exit the shell
exit`}
</code>
      </pre>
      <p>
        MongoDB databases and collections are often created automatically upon first insert,
        so you may not explicitly see them until data is present.
      </p>

      <h3>CRUD Operations</h3>
      <pre className="code-block">
<code>
{`// Insert one document
db.users.insertOne({ name: "Bob", age: 30 })

// Insert multiple documents
db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 }
])

// Read documents
db.users.find({})               // returns all
db.users.find({ age: { $gt: 30 } })  // query with condition
db.users.findOne({ name: "Alice" })  // single doc

// Update one document
db.users.updateOne(
  { name: "Bob" },
  { $set: { age: 31 } }
)

// Update multiple documents
db.users.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
)

// Delete one document
db.users.deleteOne({ name: "Alice" })

// Delete multiple documents
db.users.deleteMany({ age: { $gt: 40 } })`}
</code>
      </pre>

      <h3>Indexing</h3>
      <p>
        Indexes improve query performance by letting MongoDB quickly locate documents.
        However, each index adds storage overhead.
      </p>
      <pre className="code-block">
<code>
{`// Create an index on the 'name' field
db.users.createIndex({ name: 1 })

// List indexes
db.users.getIndexes()

// Drop an index
db.users.dropIndex("name_1")`}
</code>
      </pre>

      <h3>Aggregation</h3>
      <p>
        The Aggregation Framework is a powerful way to transform and analyze data,
        similar to SQL GROUP BY queries.
      </p>
      <pre className="code-block">
<code>
{`db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: {
      _id: null,
      avgAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  },
  { $sort: { avgAge: -1 } }
])`}
</code>
      </pre>

      <h3>Backup and Restore</h3>
      <p>
        Homebrew installs <code>mongodump</code> and <code>mongorestore</code> for backup/restore tasks.
      </p>
      <pre className="code-block">
<code>
{`# Backup a database
mongodump --db myDatabase --out /path/to/backup

# Restore a database
mongorestore --db myDatabase /path/to/backup/myDatabase`}
</code>
      </pre>

      <h3>Connecting via Drivers (Local)</h3>
      <pre className="code-block">
<code>
{`// Node.js (Mongoose)
npm install mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB locally");
});

// Python (PyMongo)
pip install pymongo

import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["myDatabase"]
print(db.list_collection_names())`}
</code>
      </pre>

      {/* REMOTE USAGE SECTION */}
      <h2>Remote Usage with MongoDB Atlas</h2>
      <p>
        MongoDB Atlas is a hosted cloud database service. You can create a free cluster and
        connect to it from anywhere. Once you have a cluster, you’ll have a connection string
        like <code>mongodb+srv://...</code>.
      </p>

      <h3>Connecting via the Mongo Shell</h3>
      <pre className="code-block">
<code>
{`mongosh "mongodb+srv://<clusterName>.mongodb.net/myDatabase" --username <user>`}
</code>
      </pre>

      <h3>Connecting via Drivers (Remote)</h3>
      <pre className="code-block">
<code>
{`// Node.js (Mongoose)
mongoose.connect("mongodb+srv://<user>:<pass>@<clusterName>.mongodb.net/myDatabase");

// Python (PyMongo)
client = pymongo.MongoClient("mongodb+srv://<user>:<pass>@<clusterName>.mongodb.net/myDatabase")
db = client["myDatabase"]`}
</code>
      </pre>

      <h2>Learn More</h2>
      <p>
        Visit the official MongoDB documentation for detailed information:
      </p>
      <ul>
        <li>
          <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
            MongoDB Official Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MongoMacCheatSheet;
