const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

let mongoConection = async () => {
    await client.connect();
    let db =client.db("mongoProject")
    return db;
}

module.exports={mongoConection}