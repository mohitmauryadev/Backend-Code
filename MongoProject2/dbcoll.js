const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function dbconection() {
    await client.connect();
    const db = client.db("Mongo2");
    return db;
}

module.exports = {dbconection};