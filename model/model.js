let client = require('../dbConnection');
let collection = client.db('test').collection('Cats'); //TODO can be better

function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find().toArray(callback);
}

module.exports = { insertCat, getAllCats }